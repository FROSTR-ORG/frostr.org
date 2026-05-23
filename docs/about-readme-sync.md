# About ↔ org profile README sync

frostr.org owns About content. The FROSTR-ORG org profile README (`profile/README.md` in the `.github` repo) is a downstream mirror.

See also: [CONTEXT.md](../CONTEXT.md), [ADR-0001](./adr/0001-about-page-source-of-truth.md).

## When to run this checklist

Run after any change to:

- About copy (`src/data/about.ts`)
- About visuals (Paper artboard **About — frostr.org** or React components)
- About page layout affecting visual capture roots

## Edit order

1. **Paper** — update visual frames labeled `IMAGE — …` on artboard **About — frostr.org** (`frostr-website-v2`) when visuals change.
2. **About content** — edit `src/data/about.ts` for prose, app summaries, maintainers, captions.
3. **React visuals** — rebuild components in `src/components/about/AboutVisuals.tsx` to match Paper; ensure each root keeps `data-about-visual="{slug}"`.
4. **Export PNGs** — from repo root:

   ```bash
   npm run about:export-visuals
   ```

5. **Commit** — include updated PNGs in `public/about/` alongside code changes.
6. **Deploy frostr.org** — README images load from `https://frostr.org/about/{slug}.png`.
7. **Org profile README** — manually update `FROSTR-ORG/.github/profile/README.md` prose to match `about.ts`; embed PNGs via frostr.org URLs (not inline HTML blocks).

## Visual slug map

| Paper frame | Export slug | Public URL |
|-------------|-------------|------------|
| IMAGE — At a glance | `at-a-glance` | `https://frostr.org/about/at-a-glance.png` |
| IMAGE — Problem vs solution | `problem-solution` | `https://frostr.org/about/problem-solution.png` |
| IMAGE — Split | `split` | `https://frostr.org/about/split.png` |
| IMAGE — Coordinate | `coordinate` | `https://frostr.org/about/coordinate.png` |
| IMAGE — Same npub | `same-npub` | `https://frostr.org/about/same-npub.png` |
| IMAGE — V2 app stack | `v2-apps` | `https://frostr.org/about/v2-apps.png` |
| IMAGE — V1 app stack | `v1-apps` | `https://frostr.org/about/v1-apps.png` |

## README embedding pattern

```markdown
![At a glance threshold profile](https://frostr.org/about/at-a-glance.png)
```

Use the deployed frostr.org URL for every visual. Do not duplicate PNG blobs in the `.github` repo.

## README prose sections (mirror order)

1. Hero — title, lead, disclaimer, quick links
2. At a glance visual + caption
3. What is FROSTR? + visual + caption
4. How it works — four steps (visuals on steps 1, 2, 4)
5. Applications — intro, V2 visual + rows, V1 visual + rows
6. Open source + links
7. Maintainers (curated list from `about.ts`)

## Export settings

- Command: `npm run about:export-visuals`
- Captures: `[data-about-visual="{slug}"]` on the About page (`/`)
- Viewport: desktop width (`1440px`) so the page content column matches the live site shell; visual roots span the full measured `[data-page-content]` width
- Device scale: 2x, dark color scheme
- Output: `public/about/{slug}.png`

## Out of scope for this doc

- CI automation for export or README drift detection
- Live GitHub org membership for maintainers
- Apps page repo metadata UI
