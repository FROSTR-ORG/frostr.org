/**
 * Public GitHub REST client for Apps catalog repo metadata.
 */
import { APP_CATALOG, type CatalogItem } from '@/data/apps-catalog';
import { ORG } from '@/config/site';

const GITHUB_API_URL = 'https://api.github.com';
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
 * Fetches public repository metadata without browser credentials.
 * @throws When GitHub is unavailable or its unauthenticated rate limit is reached.
 */
export async function fetchCatalogRepoMetadata(): Promise<CatalogRepoMetadata[]> {
  const repos = getCatalogGithubRepos();
  return Promise.all(repos.map(async ({ catalogId, repoName }) => {
    const response = await fetch(
      `${GITHUB_API_URL}/repos/${ORG}/${encodeURIComponent(repoName)}`,
      { credentials: 'omit', headers: { Accept: 'application/vnd.github+json' } },
    );
    if (!response.ok) {
      throw new Error(`GitHub metadata unavailable (${response.status}).`);
    }
    const data = await response.json();
    return {
      catalogId,
      repoName,
      url: data.html_url,
      description: data.description,
      stargazerCount: data.stargazers_count,
      pushedAt: data.pushed_at,
    };
  }));
}
