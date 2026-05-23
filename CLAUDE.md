# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website (melissapula.github.io) built with **Vue 3** + **Vite** and deployed to **GitHub Pages**. It showcases a resume, About bio, project portfolio (live products + a Blockly sandbox + a Fitness blog), Python coursework projects, and data analysis projects.

## Commands

```bash
npm install              # Install dependencies
npm run dev              # Dev server with hot reload
npm run build            # Production build → outputs to docs/
npm run preview          # Preview production build locally
npm run lint             # ESLint check and auto-fix
```

## Architecture

**SPA with hash-based routing** — all navigation is client-side.

- **Entry:** `src/main.js` → creates Vue app with `createApp()`, registers router and `vue-gtag` (GA4 ID: `G-ZP2LCLVZ2X`)
- **Root component:** `src/App.vue` → top navbar + `<router-view>`. Navbar links: Home, About, Resume, Projects, Python, Data Analysis, Contact.
- **Router:** `src/router/index.js` → 8 routes (including `/:pathMatch(.*)*` 404 catch-all). All routes except Home use dynamic `import()` for code-splitting. Each route declares `meta.title`; an `afterEach` guard updates `document.title` to `"<page> | Melissa Freundschuh-Pula"`.
- **Pages:** `src/pages/` → main pages (home, about, resume, portfolio, contact, notFound) plus three "swap" pages (pythonCode, dataAnalysis, portfolio) that show a card grid and conditionally render a child project in place when a card is clicked.
- **Swap pattern:** clicking a card sets a `selectedProject` data prop; the cards hide via `v-show` (kept in DOM so the live `love-is-love-spinners` spinner on portfolio.vue keeps animating) and a floating fixed-position "Back" button appears at top-left of the project view.
- **Child project components** still live in `src/pages/` (calculator, macbeth, bullsCows, sticks, pig, turtle, pygame, wordcount, imageClustering, randomForestClassifier, blockly, fitnessBlog) but are NOT registered as their own routes — they're only reachable through the swap pages.
- **Assets:** `src/assets/` → image files referenced by page components. Large images have been compressed.
- **OG image:** `public/og-image.jpg` → 1200×630 social-preview image (resume photo + name + title on navy bg). Generated via PowerShell + System.Drawing if it ever needs to be regenerated.
- **Build output:** `docs/` → compiled static files served directly by GitHub Pages.

**No Pinia/Vuex** — state is local to each component via `data()`. No centralized state management.

## Key Tech Stack

- **Vue 3.4** with **Vue Router 4** (hash mode for GitHub Pages compatibility)
- **Vite 5** as build tool
- **mdb-vue-ui-kit** (Material Design Bootstrap for Vue 3) for layout primitives (Container/Row/Col) and icons — used sparsely
- **Bootstrap CSS** utility classes (`mt-4`, `pt-5`, `text-center`, etc.) come bundled with mdb
- **FontAwesome** for icons (loaded once in `main.js`)
- **CodeMirror** (`codemirror-editor-vue3`) for read-only Python code display
- **Blockly** + a few custom components in `src/components/` for the Blockly sandbox
- **love-is-love-spinners** (own npm package) — live demo on the portfolio page
- **vue-gtag** for GA4 page-view tracking
- **ESLint** with `plugin:vue/vue3-essential`

## Code Style

- Do not add comments to new or modified code.
- All routes (except Home) use dynamic `import()` — preserve this when adding new routes.

## Build Configuration

- `vite.config.js` configures Vue plugin, `@` alias, and `outDir: 'docs'`
- `@/*` path alias maps to `src/*` (configured in `jsconfig.json` and `vite.config.js`)
- Production builds go to `docs/` which is committed and served directly by GitHub Pages
- Files in `public/` (e.g. `favicon.ico`, `og-image.jpg`) are copied to `docs/` as-is
