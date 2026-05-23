/**
 * Tests for the About content module — public data contract only.
 */
import { describe, expect, it } from 'vitest';

import {
  ABOUT_CONTENT,
  ABOUT_VISUAL_SLUGS,
  getAboutVisualCaptions,
} from '@/data/about';

describe('About content module', () => {
  it('exposes the FROSTR hero title', () => {
    expect(ABOUT_CONTENT.hero.title).toBe('FROSTR');
  });

  it('lists curated maintainers', () => {
    expect(ABOUT_CONTENT.maintainers.people).toEqual([
      { name: 'Austin Kelsay', handle: '@austinkelsay' },
      { name: '@cmdruid', handle: 'co-founder' },
    ]);
  });

  it('defines all seven About visual slugs with captions', () => {
    expect(ABOUT_VISUAL_SLUGS).toHaveLength(7);
    const captions = getAboutVisualCaptions();
    for (const slug of ABOUT_VISUAL_SLUGS) {
      expect(captions[slug]?.length).toBeGreaterThan(0);
    }
  });
});
