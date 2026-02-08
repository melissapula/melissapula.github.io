# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website (melissapula.github.io) built with **Vue 3** + **Vite** and deployed to **GitHub Pages**. It showcases projects, games, data analysis work, blog posts, and a resume.

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

- **Entry:** `src/main.js` → creates Vue app with `createApp()`, registers router and `vue-gtag` (ID: `G-ZP2LCLVZ2X`)
- **Root component:** `src/App.vue` → contains `MDBNavbar` navigation and `<router-view>`
- **Router:** `src/router/index.js` → defines 32 routes using `createRouter()` + `createWebHashHistory()`
- **Pages:** `src/pages/` → 28 page-level `.vue` components (home, about, resume, games, code examples, blog posts, data analysis projects)
- **Library system:** `src/library-management-system/` → 5 components demonstrating `vue-good-table-next` (books, users, checkouts, returns)
- **Assets:** `src/assets/` → 95+ image files used by page components
- **Build output:** `docs/` → compiled static files served by GitHub Pages

**No Pinia/Vuex** — state is local to each component via `data()`. No centralized state management.

## Key Tech Stack

- **Vue 3.4** with **Vue Router 4** (hash mode for GitHub Pages compatibility)
- **Vite 5** as build tool
- **mdb-vue-ui-kit** (Material Design Bootstrap for Vue 3) for UI components and layout
- **CodeMirror** (`codemirror-editor-vue3`) for read-only Python code display in project pages
- **vue-good-table-next** for data tables in the library system demo
- **ESLint** with `plugin:vue/vue3-essential`

## Code Style

- Do not add comments to new or modified code.

## Build Configuration

- `vite.config.js` configures Vue plugin, `@` alias, and `outDir: 'docs'`
- `@/*` path alias maps to `src/*` (configured in `jsconfig.json` and `vite.config.js`)
- Production builds go to `docs/` which is committed and served directly by GitHub Pages
