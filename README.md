# melissapula.github.io

Personal portfolio website showcasing projects, games, data analysis work, blog posts, and a resume.

**Live site:** [melissapula.github.io](https://melissapula.github.io)

## Tech Stack

- **Vue 3** with **Vue Router 4** (hash-based routing for GitHub Pages)
- **Vite** build tool
- **MDB Vue UI Kit** (Material Design Bootstrap 5) for layout and components
- **CodeMirror** (`codemirror-editor-vue3`) for read-only Python code display
- **vue-good-table-next** for data tables
- **Font Awesome** for icons
- **Google Analytics** via `vue-gtag`

## What's Inside

- **Home, About, Resume** - personal info and background
- **Games** - Hangman, Tic Tac Toe, Bugs Bunny board game
- **Python Projects** - Turtle Graphics, Pygame, Calculator, Bulls & Cows, Sticks, Pig, Macbeth text adventure, Word Count
- **Data Analysis** - Image Clustering (KMeans/PCA), Random Forest Classifier (PySpark)
- **Web Design** - Fish Creek, Pacific Trail, JavaJam Coffee House, Veterans Home Page
- **Blog Posts** - Parenting, Fitness
- **Library Management System** - Books, Users, Checkouts, Returns (vue-good-table demo)

## Setup

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production Build

Builds to `docs/` for GitHub Pages.

```bash
npm run build
```

### Lint & Format

```bash
npm run lint
npm run format
```
