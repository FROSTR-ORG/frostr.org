/**
 * Tests for page layout width contracts.
 */
import { describe, expect, it } from 'vitest';

import {
  PAGE_CONTENT_ATTRIBUTE,
  PROSE_WIDTH_PX,
  resolveExportViewportWidth,
} from '@/layout/pageContent';

describe('page content layout contract', () => {
  it('exposes the page content container marker for export measurement', () => {
    expect(PAGE_CONTENT_ATTRIBUTE).toBe('data-page-content');
  });

  it('fixes prose width at 900px site-wide', () => {
    expect(PROSE_WIDTH_PX).toBe(900);
  });

  it('accepts measured page content width for export viewport resolution', () => {
    expect(resolveExportViewportWidth(1216)).toBe(1216);
  });

  it('rejects non-positive measured content width', () => {
    expect(() => resolveExportViewportWidth(0)).toThrow(
      'Measured page content width must be a positive number.',
    );
  });
});
