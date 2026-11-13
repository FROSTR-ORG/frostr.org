/** Tests for the credential-free public GitHub metadata client. */
import { afterEach, describe, expect, it, vi } from 'vitest';
import { fetchCatalogRepoMetadata, getCatalogGithubRepos } from '@/api/github';

afterEach(() => { vi.unstubAllGlobals(); vi.unstubAllEnvs(); });

describe('GitHub catalog repo metadata client', () => {
  it('collects FROSTR-ORG repo slugs from catalog GitHub links', () => {
    const names = getCatalogGithubRepos().map((repo) => repo.repoName);
    expect(names).toContain('igloo-shell');
    expect(names).toContain('igloo-ios');
    expect(names).not.toContain('apps.apple.com');
  });

  it('maps public REST metadata without sending a configured legacy token', async () => {
    vi.stubEnv('VITE_GITHUB_API_KEY', 'test-only-do-not-transmit');
    const fetchMock = vi.fn(async (url: string) => ({
      ok: true,
      json: async () => ({
        html_url: url.replace('api.github.com/repos', 'github.com'),
        description: 'Public repository',
        stargazers_count: 12,
        pushed_at: '2026-05-01T00:00:00Z',
      }),
    }));
    vi.stubGlobal('fetch', fetchMock);
    const records = await fetchCatalogRepoMetadata();
    expect(records.find((record) => record.catalogId === 'igloo-shell')).toEqual({
      catalogId: 'igloo-shell', repoName: 'igloo-shell',
      url: 'https://github.com/FROSTR-ORG/igloo-shell',
      description: 'Public repository', stargazerCount: 12,
      pushedAt: '2026-05-01T00:00:00Z',
    });
    const calls = vi.mocked(fetch).mock.calls;
    expect(calls).toHaveLength(getCatalogGithubRepos().length);
    for (const [url, options] of calls) {
      expect(String(url).startsWith('https://api.github.com/repos/FROSTR-ORG/')).toBe(true);
      expect(options?.credentials).toBe('omit');
      expect(new Headers(options?.headers).has('Authorization')).toBe(false);
      expect(JSON.stringify(options)).not.toContain('test-only-do-not-transmit');
    }
  });

  it('reports an unauthenticated rate limit without requesting credentials', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false, status: 403 }));
    await expect(fetchCatalogRepoMetadata()).rejects.toThrow('GitHub metadata unavailable (403)');
  });
});
