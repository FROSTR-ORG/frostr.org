/**
 * Tests for the Apps catalog launch availability metadata.
 */
import { describe, expect, it } from 'vitest';

import { getCatalogItems } from '@/data/apps-catalog';

describe('Apps catalog', () => {
  it('marks every V2 app as coming soon', () => {
    const v2Apps = getCatalogItems({ version: 'v2', category: 'app' });

    expect(v2Apps).not.toHaveLength(0);
    expect(v2Apps.every((item) => item.releaseStatus === 'comingSoon')).toBe(true);
  });

  it('includes Igloo PWA and the planned V2 mobile apps', () => {
    const v2Apps = getCatalogItems({ version: 'v2', category: 'app' });

    expect(v2Apps).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 'igloo-pwa',
          releaseStatus: 'comingSoon',
          type: 'Web App',
        }),
        expect.objectContaining({
          id: 'igloo-mobile-android',
          releaseStatus: 'comingSoon',
          type: 'Mobile App',
        }),
        expect.objectContaining({
          id: 'igloo-mobile-ios',
          releaseStatus: 'comingSoon',
          type: 'Mobile App',
        }),
      ]),
    );
  });

  it('marks all main V2 libraries as released', () => {
    const v2Libraries = getCatalogItems({ version: 'v2', category: 'library' });

    expect(v2Libraries).not.toHaveLength(0);
    expect(v2Libraries.every((item) => item.releaseStatus === 'released')).toBe(true);
  });
});
