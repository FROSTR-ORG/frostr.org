# Igloo UI design system (frostr.org)

Visual source of truth: [Paper frostr-website-v2](https://app.paper.design/file/01KS3AE1V20271ZW6FDG71S330).

Code reference: `igloo/igloo-web` (same token set).

## Artboard map

| Paper artboard | Code |
|----------------|------|
| Foundations | `src/index.css` (tokens + `igloo-*` utilities), `tailwind.config.ts` |
| Core Components | `src/components/ui/*` |
| Navigation & Layout | `src/components/layout/*` |
| Glossary | `src/components/glossary/*` |

Dev preview: `http://127.0.0.1:5174/design-system` (development only).

## Colors

| Paper token | Hex / value | Usage |
|-------------|-------------|--------|
| gray-950 | `#030712` | Page background (`bg-gray-950`) |
| gray-900 | `#111827` | Deep surfaces |
| gray-900/40 | `#11182766` | `.surface-panel`, `.igloo-card` |
| slate-900/60 | `#0F172A99` | `.surface-elevated`, header bar |
| slate-900/80 | `#0F172ACC` | Mobile nav overlay |
| blue-300 | `#93c5fd` | Headings, active accents (`text-blue-300`) |
| blue-400 | `#60a5fa` | Links, secondary accent |
| blue-600 | `#2563eb` | Primary buttons |
| blue-900/20 | — | Panel borders |
| blue-900/30 | — | Focus / elevated borders |
| slate-200 | — | Primary body text on glossary terms |
| slate-400 | — | Secondary text, muted labels |
| slate-400/20 | — | Dividers |

Semantic CSS variables (HSL): `--primary`, `--destructive`, `--success`, `--warning` in `src/index.css`.

## Typography

| Role | Font | Size | Class |
|------|------|------|--------|
| H1 | Share Tech Mono | 36px | `.igloo-h1` |
| H2 | Share Tech Mono | 24px | `.igloo-h2` |
| H3 | Share Tech Mono | 20px | `.igloo-h3` |
| Body | Inter | 14px | `.igloo-body` |
| Small | Inter | 12px | `.igloo-small` |
| Section label | Share Tech Mono | 13px uppercase | `.igloo-section-label` |
| Mono data | Share Tech Mono | 14px | `.igloo-mono-data` |
| Inline code | Share Tech Mono | — | `.igloo-code-inline` or `<Code>` |

## Components

- **Button** — `variant`: default, destructive, success, secondary, ghost, outline, link
- **Card** — glass panel; use with Header / Content
- **Badge** — pill with ring; semantic variants
- **StatusPill** — dot + label (Foundations status row)
- **Alert** — destructive for API errors
- **SectionLabel** — glossary / section headers
- **Code** — inline and block monospace

## Conventions

- Do not use legacy frostr green/cyan (`#00ff95`, `#00f0ff`).
- Prefer semantic tokens and `igloo-*` classes over one-off hex in routes.
- Use `cn()` from `@/lib/utils` when composing Tailwind classes.
