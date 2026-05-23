/**
 * Tests for About visual export targets — public export contract.
 */
import { describe, expect, it } from 'vitest';

import { getAboutVisualSlugs } from '@/components/about/aboutVisualRegistry';
import { ABOUT_VISUAL_SLUGS } from '@/data/about';
import {
  getAboutVisualExportSelector,
  getAboutVisualExportTargets,
  getAboutVisualPublicUrl,
} from '@/about-visual-export';

describe('About visual export targets', () => {
  it('maps every About visual slug to a frostr.org PNG path', () => {
    const targets = getAboutVisualExportTargets();

    expect(targets).toHaveLength(7);
    expect(targets.map((target) => target.slug)).toEqual([...ABOUT_VISUAL_SLUGS]);
    expect(getAboutVisualSlugs()).toEqual([...ABOUT_VISUAL_SLUGS]);
    expect(targets[0]).toEqual({
      slug: 'at-a-glance',
      fileName: 'at-a-glance.png',
      relativePath: 'public/about/at-a-glance.png',
      publicUrl: 'https://frostr.org/about/at-a-glance.png',
      selector: '[data-about-visual="at-a-glance"]',
    });
  });

  it('builds stable selectors and public URLs for README embedding', () => {
    expect(getAboutVisualExportSelector('split')).toBe('[data-about-visual="split"]');
    expect(getAboutVisualPublicUrl('v2-apps')).toBe(
      'https://frostr.org/about/v2-apps.png',
    );
  });
});
