/**
 * GitHub GraphQL client for Apps catalog repo metadata.
 */
import { APP_CATALOG, type CatalogItem } from '@/data/apps-catalog';
import { ORG } from '@/config/site';

const GITHUB_GRAPHQL_URL = 'https://api.github.com/graphql';
const FROSTR_ORG_REPO_PREFIX = `https://github.com/${ORG}/`;

/** Live repo fields fetched for Apps catalog entries. */
export type CatalogRepoMetadata = {
  catalogId: string;
  repoName: string;
  url: string;
  description: string | null;
  stargazerCount: number;
  pushedAt: string;
};

type GraphQLRepoNode = {
  name: string;
  url: string;
  description: string | null;
  stargazerCount: number;
  pushedAt: string;
};

type GraphQLResponse = {
  data?: Record<string, GraphQLRepoNode | null>;
  errors?: { message: string }[];
};

/**
 * Returns catalog items that map to a FROSTR-ORG GitHub repository.
 * @param catalog - Apps catalog entries to inspect.
 */
export function getCatalogGithubRepos(
  catalog: CatalogItem[] = APP_CATALOG,
): { catalogId: string; repoName: string }[] {
  const repos = new Map<string, { catalogId: string; repoName: string }>();

  for (const item of catalog) {
    for (const link of item.links) {
      if (!('url' in link) || !link.url.startsWith(FROSTR_ORG_REPO_PREFIX)) {
        continue;
      }

      const remainder = link.url.slice(FROSTR_ORG_REPO_PREFIX.length);
      const repoName = remainder.split('/')[0]?.split('#')[0]?.split('?')[0];
      if (!repoName || repoName.includes('/')) {
        continue;
      }

      repos.set(item.id, { catalogId: item.id, repoName });
      break;
    }
  }

  return [...repos.values()];
}

/**
 * Maps a GraphQL batch response to catalog repo metadata records.
 * @param repos - Catalog repo targets included in the query.
 * @param response - Parsed GraphQL response payload.
 */
export function mapGraphQLResponseToCatalogRepoMetadata(
  repos: { catalogId: string; repoName: string }[],
  response: GraphQLResponse,
): CatalogRepoMetadata[] {
  if (!response.data) {
    throw new Error('GitHub metadata response did not include data.');
  }

  return repos.map(({ catalogId, repoName }) => {
    const alias = toRepoAlias(repoName);
    const node = response.data?.[alias];

    if (!node) {
      throw new Error(`GitHub metadata missing for repository ${repoName}.`);
    }

    return {
      catalogId,
      repoName,
      url: node.url,
      description: node.description,
      stargazerCount: node.stargazerCount,
      pushedAt: node.pushedAt,
    };
  });
}

/**
 * Builds the GraphQL query for catalog repo metadata.
 * @param repos - Catalog repo targets to include in the batch query.
 */
export function buildCatalogRepoMetadataQuery(
  repos: { repoName: string }[],
): string {
  const repoSelections = repos
    .map(
      ({ repoName }) => `
    ${toRepoAlias(repoName)}: repository(owner: "${ORG}", name: "${repoName}") {
      name
      url
      description
      stargazerCount
      pushedAt
    }`,
    )
    .join('\n');

  return `query {${repoSelections}\n}`;
}

/**
 * Fetches repo metadata for Apps catalog repositories from GitHub GraphQL API.
 * @throws When the API key is missing or the request fails.
 */
export async function fetchCatalogRepoMetadata(): Promise<CatalogRepoMetadata[]> {
  const token = import.meta.env.VITE_GITHUB_API_KEY;
  const repos = getCatalogGithubRepos();

  if (!token) {
    throw new Error(
      'GitHub API key is not configured. Add VITE_GITHUB_API_KEY to your .env file.',
    );
  }

  const response = await fetch(GITHUB_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      Authorization: `bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: buildCatalogRepoMetadataQuery(repos) }),
  });

  const data = (await response.json()) as GraphQLResponse;

  if (data.errors?.length) {
    throw new Error(data.errors[0].message);
  }

  return mapGraphQLResponseToCatalogRepoMetadata(repos, data);
}

/** Converts repo slug to a safe GraphQL alias. */
function toRepoAlias(repoName: string): string {
  return `repo_${repoName.replace(/[^a-zA-Z0-9_]/g, '_')}`;
}
