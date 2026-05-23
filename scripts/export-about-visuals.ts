/**
 * Captures About visual PNGs from a running preview server via Playwright.
 * Run via: npm run about:export-visuals
 */
import { spawn, type ChildProcess } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { chromium } from 'playwright';

import {
  ABOUT_VISUAL_EXPORT_DEVICE_SCALE,
  DESKTOP_EXPORT_VIEWPORT_WIDTH,
  PAGE_CONTENT_SELECTOR,
  getAboutVisualExportTargets,
} from '../src/about-visual-export/index.ts';
import { resolveExportViewportWidth } from '../src/layout/pageContent.ts';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PREVIEW_PORT = 4174;
const PREVIEW_URL = `http://127.0.0.1:${PREVIEW_PORT}/`;

/**
 * Waits until the Vite preview server responds successfully.
 * @param url - Preview server root URL.
 * @param timeoutMs - Maximum wait time in milliseconds.
 */
async function waitForPreview(url: string, timeoutMs = 30000): Promise<void> {
  const startedAt = Date.now();

  while (Date.now() - startedAt < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return;
      }
    } catch {
      // Preview still starting.
    }

    await new Promise((resolve) => {
      setTimeout(resolve, 250);
    });
  }

  throw new Error(`Preview server did not start at ${url}`);
}

/**
 * Starts `vite preview` for the production build.
 */
function startPreview(): ChildProcess {
  return spawn(
    'npm',
    ['run', 'preview', '--', '--host', '127.0.0.1', '--port', String(PREVIEW_PORT)],
    {
      cwd: ROOT,
      stdio: 'pipe',
      env: process.env,
    },
  );
}

/** Exports all About visual PNGs to public/about/. */
async function exportAboutVisuals(): Promise<void> {
  const targets = getAboutVisualExportTargets();
  const outputDir = path.join(ROOT, 'public', 'about');
  await mkdir(outputDir, { recursive: true });

  const preview = startPreview();

  try {
    await waitForPreview(PREVIEW_URL);

    const browser = await chromium.launch();
    const page = await browser.newPage({
      viewport: {
        width: DESKTOP_EXPORT_VIEWPORT_WIDTH,
        height: 900,
      },
      deviceScaleFactor: ABOUT_VISUAL_EXPORT_DEVICE_SCALE,
    });

    await page.emulateMedia({ colorScheme: 'dark' });
    await page.goto(PREVIEW_URL, { waitUntil: 'networkidle' });

    const contentWidth = await page.locator(PAGE_CONTENT_SELECTOR).evaluate((element) => {
      return element.getBoundingClientRect().width;
    });
    const exportContentWidth = resolveExportViewportWidth(contentWidth);
    console.log(`page content width: ${exportContentWidth}px`);

    for (const target of targets) {
      const element = page.locator(target.selector);
      await element.waitFor({ state: 'visible' });
      await element.screenshot({ path: path.join(ROOT, target.relativePath) });
      console.log(`exported ${target.relativePath}`);
    }

    await browser.close();
  } finally {
    preview.kill('SIGTERM');
  }
}

exportAboutVisuals().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
