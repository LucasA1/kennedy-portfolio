# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page graphic design portfolio site for Kennedy Papian (React 19 + TypeScript + Vite + Chakra UI v3), deployed via GitHub Pages to kennedypapian.com (see `public/CNAME`).

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — type-check (`tsc -b`), production build, then copy `dist/index.html` to `dist/404.html` (needed for GitHub Pages SPA routing fallback)
- `npm run lint` — run Oxlint (`.oxlintrc.json`; plugins: react, typescript, oxc)
- `npm run preview` — preview the production build locally

There is no test suite configured in this repo.

## Architecture

**Content is fully data-driven.** All page copy, images, and structure live in `src/data/*.ts`, typed by `src/data/types.ts` and re-exported through `src/data/index.ts`. Pages and components are generic renderers over this data — when asked to change copy, stats, projects, or nav, edit the data file, not the component:

- `siteConfig.ts` — site name, tagline, nav links, contact info
- `home.ts` — all Home page content (hero, skills, about, portfolio preview)
- `categories.ts` — the 8 portfolio category definitions (slug, name, thumbnail)
- `projects.ts` — individual project entries, each tagged with a `categorySlug`; a `contentNotice` field flags known placeholder/reused copy from the source design PDF (never rendered — see `CONTENT-TODO.md` for the list of entries still needing real copy)
- `miscGallery.ts` — image grid for the `miscellaneous-design` category (rendered as a plain gallery instead of `ProjectBlock`s — see `PortfolioCategory.tsx`)
- `resume.ts` — resume/CV data shown on the Contact page

**Routing** (`src/App.tsx`): `/`, `/portfolio`, `/portfolio/:categorySlug`, `/contact`, plus a catch-all 404. All routes are lazy-loaded and nested under `SiteLayout` (`src/layouts/SiteLayout.tsx`), which wraps every page with `Header`/`Footer`. `PortfolioCategory` looks up the category by slug from `categories.ts` and filters `projects.ts` by `categorySlug`; an unknown slug redirects to `/portfolio`.

**Images degrade gracefully.** Every image reference is a path like `/images/<category-slug>/<file>.jpg` under `public/images/`. `PlaceholderImage` (`src/components/decorative/PlaceholderImage.tsx`) renders a deterministic colored placeholder block (hashed from the alt text) whenever the real file 404s, so the site is fully functional before real assets exist. Adding a real image is just dropping a file at the exact referenced path — no code changes. See `public/images/README.md`.

**Theme** (`src/theme/index.ts`): a Chakra v3 `createSystem`/`defineConfig` theme with custom `brand`/`slate`/`coral` color scales and a custom `button` recipe. Prefer using theme tokens (e.g. `color="brand.500"`) over raw hex values in components.

**Decorative components** (`src/components/decorative/`) are purely visual and `aria-hidden`/`pointerEvents="none"`:
- `BlobShape` — absolutely-positioned SVG blobs with named path presets (`BLOB_SHAPES`) or a custom `path`, and a `pattern` prop (`solid` | `striped` | `dots` | `outline`) for fill treatment. Used throughout as background flourishes behind content.
- `WavyDivider`, `StripeCorner` — other page-section ornamentation.

## Notes

- Chakra v3 API differs meaningfully from v2 (`createSystem`/`defineConfig` for theming, `List.Root`/`List.Item` instead of `UnorderedList`/`ListItem`, `asChild` instead of `as` for polymorphic composition with router links, etc.). Don't assume v2 patterns/docs apply.
- `CONTENT-TODO.md` tracks known content gaps (placeholder PDF copy reused across unrelated projects, missing resume/portfolio PDFs, an unreconciled date discrepancy). Check it before treating `src/data/projects.ts` copy as final.
- **Never start the dev server (`npm run dev`) to visually check a change.** After making a change that affects the UI, ask the user to run it themselves and share a screenshot instead of launching it yourself.
