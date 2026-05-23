/**
 * Page layout width tokens shared by site layout and About visual export.
 */

/** DOM attribute marking the page content column (matches header inner width). */
export const PAGE_CONTENT_ATTRIBUTE = 'data-page-content';

/** CSS selector for the page content container. */
export const PAGE_CONTENT_SELECTOR = `[${PAGE_CONTENT_ATTRIBUTE}]`;

/** Maximum width for prose and structured text blocks, in pixels. */
export const PROSE_WIDTH_PX = 900;

/** Initial desktop viewport when loading the site for About visual export. */
export const DESKTOP_EXPORT_VIEWPORT_WIDTH = 1440;

/**
 * Validates a measured page content width for export logging and guards.
 * @param measuredContentWidth - `getBoundingClientRect().width` of the page content container.
 */
export function resolveExportViewportWidth(measuredContentWidth: number): number {
  if (!Number.isFinite(measuredContentWidth) || measuredContentWidth <= 0) {
    throw new Error('Measured page content width must be a positive number.');
  }

  return Math.round(measuredContentWidth);
}

/**
 * Tailwind class string for the prose lane (900px, left-aligned).
 */
export function getProseLaneClassName(): string {
  return 'w-full max-w-[900px]';
}
