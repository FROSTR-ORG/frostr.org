/**
 * Tests for About visual registry slug parity.
 */
import { describe, expect, it } from 'vitest';

import {
  ABOUT_VISUAL_REGISTRY,
  getAboutVisualSlugs,
} from '@/components/about/aboutVisualRegistry';
import { ABOUT_VISUAL_SLUGS } from '@/data/about';

describe('About visual registry', () => {
  it('registers every About visual slug', () => {
    expect(getAboutVisualSlugs()).toEqual([...ABOUT_VISUAL_SLUGS]);
    for (const slug of ABOUT_VISUAL_SLUGS) {
      expect(ABOUT_VISUAL_REGISTRY[slug]).toBeTypeOf('function');
    }
  });
});
