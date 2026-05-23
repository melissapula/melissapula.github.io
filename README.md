# melissapula.github.io

Personal portfolio website for Melissa Freundschuh-Pula — Full-Stack Software Engineer.

**Live site:** [melissapula.github.io](https://melissapula.github.io)

## Tech Stack

- **Vue 3.4** + **Vue Router 4** (hash-based routing for GitHub Pages)
- **Vite 5** build tool, with route-level dynamic imports for code splitting
- **Bootstrap 5** (CSS only) for layout primitives and utility classes
- **Font Awesome 7** for icons
- **CodeMirror** (`codemirror-editor-vue3`) for read-only Python code display
- **Blockly 11** (loaded from CDN) for the visual code-builder sandbox
- **love-is-love-spinners** — own npm package, live-demoed on the Projects page
- **Google Analytics** via `vue-gtag`
- **Husky** + **lint-staged** for pre-commit ESLint + Prettier

## Pages

| Path               | Page                                                                               |
| ------------------ | ---------------------------------------------------------------------------------- |
| `/`                | Home — name, photo, professional intro, CTAs                                       |
| `/about`           | About — bio, education, certifications, work history, military service             |
| `/resume`          | Resume — full professional summary, skills, experience, selected projects          |
| `/portfolio`       | Projects — card grid (Engineering + Personal sections)                             |
| `/python`          | Python — card grid of Python coursework (calculator, games, turtle, pygame)        |
| `/data`            | Data Analysis — card grid (word count, image clustering, random forest classifier) |
| `/contact`         | Contact — email, GitHub, LinkedIn, location                                        |
| `/:pathMatch(.*)*` | 404 — friendly catch-all with CTAs back into the site                              |

### Swap pattern

The Projects, Python, and Data Analysis pages show a grid of cards. Clicking a card swaps the view to that project's full content with a floating "Back" button. State is driven by the route query (`?project=blockly`) so the browser back button works naturally.

## Project Structure

```
src/
  main.js              # App entry — Vue app + router + GA + Bootstrap CSS
  App.vue              # Root component — navbar + <router-view> + footer
  router/index.js      # 8 routes; all but Home use dynamic import() for code splitting
  pages/               # Page-level components
  components/          # Shared (BlocklyHeader, BlocklyWorkspace, CodePanel)
  blockly/             # Blockly config (custom blocks, toolbox, badge plugin)
  assets/              # Images used by pages
public/
  favicon.ico
  og-image.jpg         # 1200x630 social-share preview image
docs/                  # Production build output (committed; served by GitHub Pages)
```

## Setup

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production Build

Builds to `docs/` for GitHub Pages:

```bash
npm run build
```

### Lint & Format

```bash
npm run lint       # ESLint check and auto-fix
npm run format     # Prettier format all source files
```

Pre-commit hooks run ESLint + Prettier on staged files via Husky and lint-staged.

## Deployment

GitHub Pages serves from `docs/` on the `main` branch. To deploy:

```bash
npm run build
git add -A
git commit -m "your message"
git push
```
