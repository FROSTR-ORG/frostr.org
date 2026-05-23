/**
 * About visual export configuration — paths, selectors, and public URLs
 * consumed by Playwright export and org profile README sync docs.
 */
import { ABOUT_VISUAL_SLUGS, type AboutVisualSlug } from '../data/about';
import {
  DESKTOP_EXPORT_VIEWPORT_WIDTH,
  PAGE_CONTENT_SELECTOR,
} from '../layout/pageContent';

/** Directory for committed About visual PNG assets. */
export const ABOUT_VISUAL_EXPORT_DIR = 'public/about';

/** Device scale factor for crisp README images. */
export const ABOUT_VISUAL_EXPORT_DEVICE_SCALE = 2;

/** Playwright attribute used to locate visual capture roots on the About page. */
export const ABOUT_VISUAL_EXPORT_ATTRIBUTE = 'data-about-visual';

export { DESKTOP_EXPORT_VIEWPORT_WIDTH, PAGE_CONTENT_SELECTOR };

export type AboutVisualExportTarget = {
  slug: AboutVisualSlug;
  fileName: string;
  relativePath: string;
  publicUrl: string;
  selector: string;
};

/**
 * Returns the CSS selector for an About visual capture root.
 * @param slug - About visual slug from the content module/registry.
 */
export function getAboutVisualExportSelector(slug: AboutVisualSlug): string {
  return `[${ABOUT_VISUAL_EXPORT_ATTRIBUTE}="${slug}"]`;
}

/**
 * Returns the deployed frostr.org URL for an About visual PNG.
 * @param slug - About visual slug embedded in the org profile README.
 */
export function getAboutVisualPublicUrl(slug: AboutVisualSlug): string {
  return `https://frostr.org/about/${slug}.png`;
}

/**
 * Returns export targets for all About visuals in registry order.
 */
export function getAboutVisualExportTargets(): AboutVisualExportTarget[] {
  return ABOUT_VISUAL_SLUGS.map((slug) => {
    const fileName = `${slug}.png`;

    return {
      slug,
      fileName,
      relativePath: `${ABOUT_VISUAL_EXPORT_DIR}/${fileName}`,
      publicUrl: getAboutVisualPublicUrl(slug),
      selector: getAboutVisualExportSelector(slug),
    };
  });
}
