# About page source of truth is frostr.org, not the org profile README

Status: accepted

The legacy frostr-website plan treated the FROSTR-ORG GitHub org profile README as canonical and rendered it on frostr.org. We invert that: frostr.org owns About content (`src/data/about.ts` + React components); the org profile README is a downstream mirror updated manually after site changes.

**Why:** About visuals are Igloo UI components designed in Paper — GitHub markdown cannot render them faithfully. frostr.org is the public marketing surface; README visitors should see the same story via prose plus PNG snapshots of the live site (`npm run about:export-visuals` → `public/about/`). This removes the GitHub API dependency for About (maintainers are curated, not fetched).

**Considered:** (1) GitHub README as source — rejected; markdown/HTML cannot match Paper visuals and couples site deploys to `.github` repo edits. (2) Shared markdown file rendered by both — rejected; visuals still need a separate path. (3) frostr.org source with README mirroring — accepted.

**Consequences:** README prose drift is possible without discipline — mitigated by `docs/about-readme-sync.md`. `github.ts` is repurposed for Apps repo metadata only. See `CONTEXT.md` for domain terms.
