# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website (melissapula.github.io) built with **Vue 3** + **Vite** and deployed to **GitHub Pages**. It doubles as the live showcase for the author's own design system, `@mfp-design-system/*` (Lit web components on npm). It contains a home hero, About bio, resume, a Projects grid (live products, npm packages, a Blockly sandbox, a WebGL painting, a Fitness blog), Python coursework, and data analysis projects.

## Commands

```bash
npm install              # Install dependencies
npm run dev              # Dev server with hot reload
npm run build            # Production build → outputs to docs/
npm run preview          # Serve the built docs/ locally (port 4173)
npm run lint             # ESLint check and auto-fix
npm run format           # Prettier on src/ and root json/cjs/md
npm run format:check     # Same, check only
```

No test suite exists. Verification is `npm run lint`, `npm run build`, and checking the page in a browser.

## Deployment

**Commit and push straight to `main`; don't create feature branches or pull requests.** This is a single-maintainer repo.

GitHub Pages serves `docs/` from the `main` branch, so deploying is: `npm run build`, commit `src/` and `docs/` together, push `main`. The push triggers GitHub's built-in "pages build and deployment" workflow (there is no workflow file in the repo); it copies `docs/` as-is and runs no build. Every page chunk imports the main bundle by hashed filename, so any change to `App.vue` or `main.js` renames most files in `docs/assets/`; that churn is expected.

## Architecture

**SPA with hash-based routing** (`createWebHashHistory`), so deep links work on GitHub Pages without a 404 fallback.

- **Entry:** `src/main.js` imports Font Awesome, the highlight.js theme, mfp tokens + layout utilities, every `@mfp-design-system/*` component package (each self-registers its custom elements), and `src/styles/app.css`. Calls `initTheme()` before mounting, then registers the router and `vue-gtag` (GA4 `G-ZP2LCLVZ2X`, `send_page_view: false`, router-driven page views).
- **Root:** `src/App.vue` → `<mfp-nav-bar sticky variant="brand">` + `<router-view>` (wrapped in a fade `<Transition>` and `<Suspense>` with an `<mfp-spinner>` fallback) + `<mfp-footer>`. Nav links Home, About, Resume, Projects, Python, Data Analysis; Contact and the theme `<mfp-select>` sit in the nav's `actions` slot.
- **Layout height variables:** `App.vue` measures the nav and footer with `ResizeObserver` and publishes `--site-nav-height` and `--site-footer-height` on `:root`. Full-height pages use `calc(100vh - var(--site-nav-height, 56px))`; never hardcode the nav height.
- **Resume route:** `App.vue` adds `.route-resume` to `.app-shell`, which pins the footer (`position: fixed`). `resume.vue` reserves footer height as bottom padding and sizes its sticky photo/contact `<aside>` to `100vh` minus nav and footer (`box-sizing: border-box` so padding stays inside). It has extensive `@media print` styles; nav and footer are hidden in print.
- **Router:** `src/router/index.js` → 8 routes including the `/:pathMatch(.*)*` 404. Each route has `meta.title`; an `afterEach` guard sets `document.title` to `"<title> | Melissa Freundschuh-Pula"`.
- **Theming:** `src/themeManager.js` imports the six theme CSS files from `@mfp-design-system/tokens/themes/*?raw` (Blue, Emerald, Orange, Sand, Terracotta, Navy; default Navy), injects the active one into a single `<style id="mfp-active-theme">`, and persists the choice in `localStorage` under `mfp-theme`. `RENAMED` maps legacy saved names (portfolio, warm, earth) to current ones.

### Swap pages

`portfolio.vue`, `pythonCode.vue` and `dataAnalysis.vue` show a `ProjectCard` grid and render the chosen project in place with a fixed "Back to ..." `<mfp-button>`.

- `selectedProject` is a **computed getter/setter over `$route.query.project`** (for example `#/python?project=pig`), so browser back/forward works and project views are linkable. Unknown keys fall back to the grid.
- `portfolio.vue` hides its grid with `v-show` (kept in the DOM so the live `love-is-love-spinners` instance keeps running) and renders `FitnessBlog`, `Blockly` or `BreathingPainting` by key (`fitness`, `blockly`, `painting`). Its other cards are external links (`href` prop on `ProjectCard`).
- `pythonCode.vue` and `dataAnalysis.vue` use `v-if`/`v-else` and resolve a key → component-name map through `<component :is>`. Data Analysis keys are lowercase (`wordcount`, `imageclustering`, `randomforestclassifier`); Python keys are camelCase (`bullsCows`).
- Child project components live in `src/pages/` but are **not routes**: calculator, macbeth, bullsCows, sticks, pig, turtle, pygame, wordcount, imageClustering, randomForestClassifier (all use `ProjectShell`), plus blockly, fitnessBlog and breathingPainting.
- Card grids use a 6-column grid with `span 2` at ≥1024px, with orphan rows centered via `grid-column: <start> / span 2` (shorthand; overriding only `grid-column-start` loses the span). These grid rules are in non-scoped `<style>` blocks scoped by a page class (`.portfolio-page`, `.swap-page`) because scoped styles don't reliably reach `ProjectCard`'s `<component :is>` root. `.swap-page` is shared by Python and Data Analysis.

### Components (`src/components/`)

- `ProjectCard.vue`: card with a `#preview` slot, title, description, `mfp-badge` tags, and a CTA `mfp-button`. With `href` it renders an `<a target="_blank">`; without, a `role="button"` div that emits `select`.
- `ProjectShell.vue`: 7fr/5fr split (code pane left, summary pane right) used by the 10 Python/Data Analysis project pages; `center-summary` vertically centers the summary (bullsCows, pig, sticks).
- `CodeBlock.vue`: read-only code display via **highlight.js** core with only Python registered (`atom-one-dark` theme from `main.js`). The Python source of each project is a template-literal string in the page's `data()`.
- `BlocklyHeader.vue`, `BlocklyWorkspace.vue`, `CodePanel.vue`: the Blockly sandbox. Blockly 11.2.1 is **loaded at runtime from unpkg**, not npm; custom blocks and the toolbox are in `src/blockly/`. "Run Code" executes the generated JavaScript with `new Function` and a fake `console`.

### Breathing painting

`public/breathing-painting/` is a **prebuilt** Three.js/GLSL bundle from the separate paint-that-breathes repo, iframed by `breathingPainting.vue` at `/breathing-painting/index.html`. Treat it as vendored output: replace it wholesale from that repo, don't edit or format it (it is in `.prettierignore`).

## Design system usage

- Every `mfp-*` tag is a native custom element; `vite.config.js` sets `isCustomElement: (tag) => tag.startsWith('mfp-')`.
- Use the HTML `slot="name"` attribute to fill mfp component slots, never Vue's `<template v-slot:name>` / `#name` (ESLint's `vue/no-deprecated-slot-attribute` is turned off for this). Vue's `#preview` syntax is only for Vue components such as `ProjectCard`.
- mfp events are `CustomEvent`s; read values from `event.detail.value` (see `onThemeChange` in `App.vue` and the max-blocks input in `BlocklyHeader.vue`).
- Style inside mfp shadow DOM through exposed parts, for example `.back-button::part(button)`, `.fitness-card::part(header)`.
- Layout comes from `@mfp-design-system/layout`: `<mfp-container size="...">` plus utilities such as `mt-md`, `mb-lg`, `my-lg`, `mr-sm`, `flex`, `items-center`. Bootstrap is gone; Bootstrap class names like `mt-4` or `d-flex` do nothing.
- `src/styles/app.css` adds the few utilities mfp doesn't ship: `text-center`, `img-fluid`, `rounded`, `shadow`, `lead`.
- Brand color comes from tokens such as `var(--color-brand-primary, #1a2744)` so it follows the active theme. Page backgrounds (`#f0f2f5`) and much body text color are still hardcoded.

## Code Style

- Do not add comments to new or modified code.
- All routes (except Home) use dynamic `import()` — preserve this when adding new routes.
- Prettier: 4-space indent, single quotes, semicolons, no trailing commas, 120 columns, indented `<script>`/`<style>` in `.vue`.
- Options API is the norm; the Blockly components use `<script setup>`.

## Tooling

- **npm only.** `package.json` pins `"packageManager": "npm@11.8.0"` and `package-lock.json` is the lockfile. Don't run pnpm or yarn here; install with `npm ci` for an exact lockfile install.
- Husky pre-commit runs `lint-staged` (config in `package.json`): `eslint --fix` + `prettier --write` on `src/**/*.{vue,js}`, and `prettier --write` on `*.{json,css,md,cjs,html}` in any folder. `.prettierignore` excludes `docs`, `public/breathing-painting`, lockfiles and build dirs, and Prettier silently skips ignored files even when the hook passes them.
- `.gitattributes` (`* text=auto eol=lf`) keeps every text file LF in git and in working copies, regardless of each machine's `core.autocrlf`.
- ESLint 10 with a flat config (`eslint.config.js`): `eslint-plugin-vue`'s `flat/essential` + `@eslint/js` recommended + `eslint-config-prettier`, browser and node globals from `globals`, with `vue/multi-word-component-names` and `vue/no-deprecated-slot-attribute` off. `--ext` no longer exists; the Vue plugin's config decides which files are `.vue`. `vue-eslint-parser` must be installed explicitly (a peer of `eslint-plugin-vue` 10).
- `@/*` maps to `src/*` (`vite.config.js` and `jsconfig.json`).
- Files in `public/` (`favicon.ico`, `og-image.jpg`, `breathing-painting/`) are copied to `docs/` as-is. `og-image.jpg` is a 1200×630 social preview (resume photo + name + title on navy), generated with PowerShell + System.Drawing if it ever needs regenerating.
- SEO lives in the root `index.html`: meta description, Open Graph/Twitter tags, Google site verification, and a schema.org `Person` JSON-LD block. Keep it in step with resume content.
