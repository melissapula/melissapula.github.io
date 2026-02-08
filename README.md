# melissapula.github.io

Personal portfolio website showcasing freelance work, interactive projects, games, data analysis, blog posts, and a resume.

**Live site:** [melissapula.github.io](https://melissapula.github.io)

## Tech Stack

- **Vue 3.4** with **Vue Router 4** (hash-based routing for GitHub Pages)
- **Vite 5** build tool
- **MDB Vue UI Kit** (Material Design Bootstrap 5) for layout and components
- **Blockly 11** (loaded from CDN) for the visual code builder
- **CodeMirror** (`codemirror-editor-vue3`) for read-only Python code display
- **vue-good-table-next** for data tables in the library system demo
- **Font Awesome 7** for icons
- **Google Analytics** via `vue-gtag`
- **Husky** + **lint-staged** for pre-commit hooks (ESLint + Prettier)

## Pages

### Core

- **Home** `/` - Landing page
- **About** `/about` - Personal background and photos
- **Resume** `/resume` - Professional experience and skills
- **Freelance** `/portfolio` - Showcase of client work (Four Seasons Studio)

### Blockly Visual Code Builder

- **Blockly** `/blockly` - Drag-and-drop visual programming environment
    - Custom blocks (print, wait, random number, variables, repeat)
    - Live JavaScript code generation
    - In-browser code execution with console output
    - Block count badge with configurable limits

### Python Code Examples

Read-only CodeMirror displays of Python projects:

- **Calculator** `/calculator`
- **Macbeth Game** `/macbeth` - Text adventure game
- **Bulls and Cows** `/bullsCows`
- **Game of Sticks** `/sticks`
- **Game of Pig** `/pig`
- **Turtle Graphics** `/turtle`
- **Pygame** `/pygame`

### Data Analysis

- **Word Count** `/wordcount`
- **Image Clustering** `/imageclustering` - KMeans clustering with PCA visualization
- **Random Forest Classifier** `/randomforestclassifier` - PySpark ML pipeline

### Games

- **Hangman** `/hangman`
- **Bugs Bunny Board Game** `/bugsGame`
- **Simple Calculator** `/verify`
- **Tic Tac Toe** `/tictactoe`

### Web Design Projects

- **Fish Creek** `/fishcreek`
- **Pacific Trail** `/pacific`
- **JavaJam Coffee House** `/javaJam`
- **Veterans Home Page** `/VeteransHomePage`
- **Kids Book** `/kidsBook`
- **Training Session** `/trainingSession`
- **Midterm** `/midterm`
- **Final Practice** `/finalPractice`
- **Final** `/final`

### Blog

- **Parenting** `/parentingBlog`
- **Fitness** `/fitnessBlog`

### Library Management System

Demo app using `vue-good-table-next` for CRUD operations:

- **Home** `/libraryhome`
- **Books** `/librarybooks`
- **Users** `/libraryusers`
- **Checkouts** `/librarycheckouts`
- **Returns** `/libraryreturns`

## Project Structure

```
src/
  main.js                  # App entry point (Vue app + router + analytics)
  App.vue                  # Root component with navbar and router-view
  router/index.js          # 34 routes using createWebHashHistory
  pages/                   # 30 page-level components
  components/              # Shared components (BlocklyHeader, BlocklyWorkspace, CodePanel)
  blockly/                 # Blockly config (custom blocks, toolbox, badge plugin)
  library-management-system/  # Library demo components (5 pages)
  assets/                  # Images used by page components
docs/                      # Production build output (served by GitHub Pages)
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

A pre-commit hook automatically runs ESLint and Prettier on staged files via Husky and lint-staged.

## Deployment

The site is deployed to GitHub Pages from the `docs/` directory on the `main` branch. After making changes:

```bash
npm run build
git add -A
git commit -m "your message"
git push
```
