# melissapula.github.io

Personal portfolio website for Melissa Freundschuh-Pula — Full-Stack Software Engineer.

**Live site:** [melissapula.github.io](https://melissapula.github.io)

## Tech Stack

- **Vue 3.4** + **Vue Router 4** (hash-based routing for GitHub Pages)
- **Vite 5** build tool, with route-level dynamic imports for code splitting
- **`@mfp-design-system/*`** — the author's own Lit-based design system, consumed live throughout the site. Component packages: `button`, `card`, `badge`, `accordion`, `footer`, `icon-button`, `input`, `nav`, `select`, `spinner`. Layout package: `layout` (`<mfp-container>`, `<mfp-row>`, `<mfp-col>` + a spacing/flex/grid utility sheet). Design tokens: `tokens`.
- **Font Awesome 7** for icons
- **highlight.js** for read-only Python code display
- **Blockly 11** (loaded from CDN) for the visual code-builder sandbox
- **love-is-love-spinners** — the author's own npm package, live-demoed on the Projects page
- **Google Analytics** via `vue-gtag`
- **Husky** + **lint-staged** for pre-commit ESLint + Prettier

## Pages

| Path               | Page                                                                               |
| ------------------ | ---------------------------------------------------------------------------------- |
| `/`                | Home — name, photo, professional intro, CTAs                                       |
| `/about`           | About — bio, education, certifications, work history, military service             |
| `/resume`          | Resume — full professional summary, skills, experience, selected projects          |
| `/portfolio`       | Projects — card grid of live products, open-source packages, and sandboxes         |
| `/python`          | Python — card grid of Python coursework (calculator, games, turtle, pygame)        |
| `/data`            | Data Analysis — card grid (word count, image clustering, random forest classifier) |
| `/contact`         | Contact — email, GitHub, LinkedIn, location                                        |
| `/:pathMatch(.*)*` | 404 — friendly catch-all with CTAs back into the site                              |

### Swap pattern

The Projects, Python, and Data Analysis pages show a grid of cards. Clicking a card swaps the view to that project's full content with a floating "Back" button. State is driven by the route query (`?project=blockly`) so the browser back button works naturally.

The Blockly sandbox renders in place, the Python and Data Analysis subpages share the `ProjectShell.vue` 7+5 split layout, and the "Paint that Breathes" project iframes a separately-built WebGL bundle from `public/breathing-painting/`.

## Design System

The site eats its own dog food. Page chrome (navbar, footer, theme picker), interactive primitives (buttons, badges, cards, accordion, spinners, selects, inputs), and layout primitives (`<mfp-container>`, `<mfp-row>`, `<mfp-col>` plus a small utility sheet) all come from `@mfp-design-system/*` — a personal design system published to npm.

A small `src/styles/app.css` shim fills the five utilities mfp deliberately doesn't ship (`text-center`, `img-fluid`, `lead`, `rounded`, `shadow`), all token-driven so they follow whatever theme is active.

## Theming

`src/themeManager.js` registers the six brand themes exported from `@mfp-design-system/tokens` (Blue, Emerald, Orange, Sand, Terracotta, **Navy** — default). The theme selector in the navbar swaps the active theme by injecting the matching tokens CSS into a single `<style>` tag and saving the choice to `localStorage`. Every component's color, focus ring, and themed state re-skin automatically because they consume `--color-brand-*` semantic tokens.

## Analytics

Google Analytics (GA4) is set up entirely by `vue-gtag` in `src/main.js`: it loads `gtag.js`, configures GA without the automatic page view, and sends one `page_view` on landing and on each route change. Don't add a gtag snippet to `index.html`; GA would then count the landing page twice.

## Paint that Breathes bundle

`public/breathing-painting/` is prebuilt output from the separate `paint-that-breathes` repo, copied into `docs/` unchanged by the build. To update it, rebuild in that repo and replace the folder wholesale. Don't hand-edit or reformat it; it's excluded from Prettier in `.prettierignore` for that reason.

## Project Structure

```
src/
  main.js              # App entry — Vue + router + GA + mfp design system imports
  App.vue              # Root component — <mfp-nav-bar> + <router-view> + <mfp-footer>
  themeManager.js      # Theme registration + persistence (localStorage)
  router/index.js      # Routes — all but Home use dynamic import() for code splitting
  pages/               # Page-level components (one per route + the swap-page children)
  components/
    ProjectCard.vue    # Reusable card used across portfolio / python / data pages
    ProjectShell.vue   # Shared 7+5 split layout used by all 10 Python / Data Analysis project pages
    CodeBlock.vue      # Read-only highlighted code display
    BlocklyHeader.vue  # Blockly sandbox chrome
    BlocklyWorkspace.vue
    CodePanel.vue
  blockly/             # Blockly config (custom blocks, toolbox)
  styles/
    app.css            # Token-driven utility classes mfp doesn't ship
  assets/              # Images used by pages
public/
  favicon.ico
  og-image.jpg                 # 1200x630 social-share preview image
  breathing-painting/          # Pre-built WebGL bundle iframed by the Paint that Breathes page
docs/                          # Production build output (committed; served by GitHub Pages)
```

## Setup

This project uses **npm** only (pinned via `packageManager` in `package.json`).

```bash
npm ci
```

### Development

```bash
npm run dev
```

### Production Build

Builds to `docs/` for GitHub Pages:

```bash
npm run build
npm run preview    # Serve the built docs/ at http://localhost:4173 to check it before pushing
```

### Lint & Format

```bash
npm run lint           # ESLint check and auto-fix
npm run format         # Prettier format all source files
npm run format:check   # Prettier check only, no writes
```

Pre-commit hooks run ESLint + Prettier on staged files via Husky and lint-staged.

There is no test suite. Verify a change with `npm run lint`, `npm run build`, and a look in the browser (`npm run dev` or `npm run preview`).

## Deployment

GitHub Pages serves `docs/` from the `main` branch. Pushing to `main` triggers GitHub's built-in "pages build and deployment" workflow, which publishes `docs/` exactly as committed. It does **not** run a build, so always rebuild and commit `src/` and `docs/` together:

```bash
npm run build
git add src docs
git commit -m "your message"
git push
```

Every page chunk references the main bundle by its hashed filename, so a change to `App.vue` or `main.js` renames most files in `docs/assets/`. That churn is expected.
