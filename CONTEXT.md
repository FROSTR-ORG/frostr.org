# frostr.org

Marketing site for FROSTR — threshold signing for Nostr. Explains the protocol, surfaces Igloo apps, and links to glossary, FAQ, and GitHub.

## Language

**About page**:
The frostr.org home route (`/`) that introduces FROSTR: hero, explainer sections, inline visuals, app summaries, and maintainers.
_Avoid_: README page, org profile page

**Page content width**:
The main content column on marketing pages — same width as the site header within the layout shell (`max-w-7xl`). About, Apps, FAQ, Glossary, Privacy, Media, and footer share this width; no narrower per-page caps (e.g. 720px or 900px). Enforced by a content container in the site layout — individual pages do not set their own max-width.
_Avoid_: Article width, reading column, narrow content lane, per-page max-width

**Prose width**:
The maximum line length for body copy, headings, and structured text (app summary rows, maintainer lists, link rows) within the page content column — **900px** site-wide, **left-aligned**. Only About visual capture roots span the full column width.
_Avoid_: Page content width, visual width, centered text blocks

**About content**:
All copy, section order, and visual composition for the About page, owned by frostr.org source code (React components + structured data).
_Avoid_: GitHub README content, fetched markdown

**About content module**:
The structured data file `src/data/about.ts` — hero, section prose, abbreviated app summaries, maintainers, and CTA labels. The About page renders from this module; the org profile README is updated manually to match.
_Avoid_: Inline copy in page components, README as upstream source

See also: [ADR-0001](./docs/adr/0001-about-page-source-of-truth.md).

**Org profile README**:
The markdown file in `FROSTR-ORG/.github` (`profile/README.md`) shown on the GitHub organization page. A downstream mirror of the About page — prose aligned with frostr.org, visuals embedded as PNGs from `https://frostr.org/about/…`.
_Avoid_: Source of truth, canonical content

**About visual**:
An Igloo UI illustration on the About page, implemented as React components rebuilt from the Paper artboard **About — frostr.org**. Paper is the design source; the live site renders React, not raw Paper PNGs. Visual capture roots span the full page content width and reflow horizontally at wider breakpoints.
_Avoid_: README inline HTML block, ad-hoc diagrams unrelated to Paper, fixed 720px visual width

**About visual export**:
PNG snapshots of About visuals, captured from the running frostr.org site via `npm run about:export-visuals` (Playwright) and saved to `public/about/{slug}.png`. Run manually after visual changes; commit PNGs alongside code. Viewport width is measured from the live page content container at export time — not a fixed pixel constant. Ensures org profile README images match what visitors see on the site.
_Avoid_: Direct Paper-to-PNG export for README, hand-cropped browser screenshots, CI-only export (for now), fixed 720px export viewport

**About visual asset**:
A Playwright-generated PNG in `frostr.org/public/about/{slug}.png`, served at `https://frostr.org/about/{slug}.png` and embedded in the org profile README.
_Avoid_: GitHub-hosted duplicate images, inline HTML visual blocks in README

**About ↔ README sync**:
The workflow for keeping org profile README aligned after About page changes: update `about.ts` and/or Paper visuals → rebuild React if needed → run `npm run about:export-visuals` → deploy frostr.org → update `FROSTR-ORG/.github/profile/README.md` prose. Documented in `docs/about-readme-sync.md`.
_Avoid_: README-first edits, exporting PNGs from Paper without going through the live React render

**Paper About artboard**:
The canonical design for the frostr.org About page layout and visuals in Paper file `frostr-website-v2`, artboard **About — frostr.org**. Visual frames are labeled `IMAGE — …`; each maps to a React component and a Playwright export slug in `public/about/`. Layout width changes ship in code first, then the artboard is updated in the same session to match.
_Avoid_: Legacy frostr-website mockups, README as layout source, Paper-first width changes without code verification

**Maintainers (About)**:
A curated list of people shown on the About page — names, handles, and optional roles. Edited manually in frostr.org source; not derived from live GitHub org membership.
_Avoid_: Org members, `membersWithRole`, automatic membership sync

**About app summary**:
A short name + one-line description for an Igloo app or library shown on the About page. Lives in `about.ts`, independent of the Apps page catalog. Initial copy is seeded from the existing About page component; reconcile with Paper during the visual rebuild slice if text differs.
_Avoid_: Apps catalog entry, repo metadata row

**Maintainers (About)** — canonical list:
- Austin Kelsay — `@austinkelsay`
- `@cmdruid` — co-founder

**Catalog repo metadata scope**:
GitHub metadata queries cover every Apps catalog entry whose links include a `github.com/FROSTR-ORG/{repo}` URL. Entries with only npm, App Store, or demo URLs are excluded.

**GitHub API client (`github.ts`)**:
Frostr.org integration for repo metadata used by the Apps page: `stargazerCount`, `pushedAt`, `url`, and GitHub `description` per repo in `apps-catalog.ts`. Queries are implemented but not rendered until Apps page opts in — not used for About content or org profile README.
_Avoid_: About page data source, org profile README renderer, org profile README fetch

**Repo metadata (GitHub)**:
Live fields fetched from GitHub for Apps catalog repos. Apps page may use GitHub `description` as an optional override of static catalog copy; About app summaries remain independent in `about.ts`.
_Avoid_: About app summary, canonical app description for the whole site

## Flagged ambiguities

_(none)_

## Example dialogue

**Dev:** Where do we change the "What is FROSTR?" paragraph?
**Maintainer:** In frostr.org — the About content in source. Then update the org profile README to match.
**Dev:** We changed the Split visual — what now?
**Maintainer:** Update Paper (**IMAGE — Split**), rebuild the React component to match, run `npm run about:export-visuals`, deploy frostr.org, then update README prose if needed. Follow `docs/about-readme-sync.md`.

**Dev:** Should FAQ text go as wide as the header?
**Maintainer:** The page column matches the header, but prose stays at 900px left-aligned. Only visuals (on About) go full column width.

