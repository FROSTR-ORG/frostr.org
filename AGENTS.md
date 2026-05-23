# frostr.org

Marketing site for FROSTR. Vite + React + TypeScript + **Igloo UI** (Paper design system).

## Reference

- **Legacy app:** `../frostr-website/` — port content and behavior from here.
- **Design system:** [Paper frostr-website-v2](https://app.paper.design/file/01KS3AE1V20271ZW6FDG71S330)
- **Token docs:** [docs/design-system.md](./docs/design-system.md)
- **Code parity:** `../../igloo/igloo-web/` (same palette)

## Commands

- `npm run dev` — http://127.0.0.1:5174 (avoids port 5173 conflicts)
- `npm run build` — production build
- `npm run lint` — ESLint
- `npm run preview` — preview production build
- `npm test` — Vitest unit tests
- `npm run about:export-visuals` — build, preview, Playwright capture of About PNGs to `public/about/`

## Structure

- `src/index.css` + `src/styles/igloo.css` — CSS variables and utility classes
- `src/components/ui/` — Button, Card, Badge, Alert, etc.
- `src/components/layout/` — Layout, SiteNavLink, Footer
- `src/components/about/` — About page composer, Paper-aligned visuals, visual registry
- `src/components/glossary/` — GlossaryTerm, GlossarySection, GlossaryInlineText
- `src/data/about.ts` — About page content (source of truth; org profile README mirrors manually)
- `src/data/glossary.ts` — Glossary page content (aligned with Paper Glossary artboards)
- `src/data/media-catalog.ts` — Media page coverage items
- `src/config/site.ts` — nav items, `ORG`, feature flags
- `src/data/apps-catalog.ts` — Apps page catalog (V2 = frostr-infra submodules; demos = web-demo-v2 + web-demo)
- `src/api/github.ts` — GraphQL fetch for Apps catalog repo metadata (optional; not used by About)
- `src/data/privacy-policy.ts` — Privacy page (no FROSTR servers; App Store URL for Igloo Signer)
- `src/data/faq.ts` — FAQ page content
- `CONTEXT.md` — domain glossary; `docs/adr/0001-about-page-source-of-truth.md`
- `docs/about-readme-sync.md` — About ↔ org profile README checklist

## Conventions

- TypeScript, 2-space indent, `@/` path alias
- Use Igloo tokens (`igloo-h1`, `text-blue-300`, `igloo-card`) — no ad-hoc legacy accent colors
- `ROADMAP_ENABLED` in `site.ts` controls roadmap route and nav
- Dev-only route: `/design-system` (typography and component preview)

## Environment

- `VITE_GITHUB_API_KEY` — optional GitHub GraphQL token for Apps catalog repo metadata (not required for About page)
