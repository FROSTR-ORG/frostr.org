/**
 * Tests for GitHub catalog repo metadata client.
 */
import { describe, expect, it } from 'vitest';

import {
  buildCatalogRepoMetadataQuery,
  getCatalogGithubRepos,
  mapGraphQLResponseToCatalogRepoMetadata,
} from '@/api/github';

describe('GitHub catalog repo metadata client', () => {
  it('collects FROSTR-ORG repo slugs from catalog GitHub links', () => {
    const repos = getCatalogGithubRepos();
    const repoNames = repos.map((repo) => repo.repoName);

    expect(repoNames).toContain('igloo-shell');
    expect(repoNames).toContain('igloo-ios');
    expect(repoNames).not.toContain('apps.apple.com');
  });

  it('maps GraphQL repo nodes to catalog metadata records', () => {
    const repos = [{ catalogId: 'igloo-shell', repoName: 'igloo-shell' }];
    const metadata = mapGraphQLResponseToCatalogRepoMetadata(repos, {
      data: {
        repo_igloo_shell: {
          name: 'igloo-shell',
          url: 'https://github.com/FROSTR-ORG/igloo-shell',
          description: 'CLI operator host',
          stargazerCount: 12,
          pushedAt: '2026-05-01T00:00:00Z',
        },
      },
    });

    expect(metadata).toEqual([
      {
        catalogId: 'igloo-shell',
        repoName: 'igloo-shell',
        url: 'https://github.com/FROSTR-ORG/igloo-shell',
        description: 'CLI operator host',
        stargazerCount: 12,
        pushedAt: '2026-05-01T00:00:00Z',
      },
    ]);
  });

  it('builds a batch GraphQL query for catalog repos', () => {
    const query = buildCatalogRepoMetadataQuery([{ repoName: 'igloo-home' }]);

    expect(query).toContain('repository(owner: "FROSTR-ORG", name: "igloo-home")');
    expect(query).toContain('stargazerCount');
    expect(query).toContain('pushedAt');
  });
});
