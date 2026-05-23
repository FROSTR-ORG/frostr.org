/**
 * Maps About visual slugs to React components for page render and Playwright export.
 */
import type { ComponentType } from 'react';

import {
  AtAGlanceVisual,
  CoordinateVisual,
  ProblemSolutionVisual,
  SameNpubVisual,
  SplitVisual,
  V1AppsVisual,
  V2AppsVisual,
} from '@/components/about/AboutVisuals';
import { ABOUT_VISUAL_SLUGS, type AboutVisualSlug } from '@/data/about';

export type AboutVisualComponent = ComponentType;

/** Slug → component map consumed by the About page and export tooling. */
export const ABOUT_VISUAL_REGISTRY: Record<AboutVisualSlug, AboutVisualComponent> =
  {
    'at-a-glance': AtAGlanceVisual,
    'problem-solution': ProblemSolutionVisual,
    split: SplitVisual,
    coordinate: CoordinateVisual,
    'same-npub': SameNpubVisual,
    'v2-apps': V2AppsVisual,
    'v1-apps': V1AppsVisual,
  };

/** Ordered slug list for export scripts and parity tests. */
export function getAboutVisualSlugs(): AboutVisualSlug[] {
  return [...ABOUT_VISUAL_SLUGS];
}

/**
 * Renders the About visual for a slug.
 * @param slug - About visual slug from content module or registry.
 */
export function renderAboutVisual(slug: AboutVisualSlug) {
  const Visual = ABOUT_VISUAL_REGISTRY[slug];
  return <Visual />;
}
