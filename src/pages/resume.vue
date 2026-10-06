<template>
    <div class="resume-layout">
        <aside id="pic">
            <div id="picInner">
                <div class="text-center">
                    <h1 class="mt-sm">Melissa Freundschuh-Pula</h1>
                    <h4>Full-Stack Software Engineer</h4>
                </div>
                <div class="my-md" style="flex: 1; min-height: 0; width: 80%">
                    <img
                        :src="profile"
                        alt="Portrait of Melissa Freundschuh-Pula"
                        style="
                            width: 100%;
                            height: 100%;
                            object-fit: contain;
                            object-position: top center;
                            border-radius: 8px;
                        "
                    />
                </div>
                <div class="mb-sm">
                    <p class="mb-xs">
                        <i class="fas fa-envelope mr-sm" aria-hidden="true"></i
                        ><a href="mailto:melissa_m_24@yahoo.com">melissa_m_24@yahoo.com</a>
                    </p>
                    <p class="mb-xs">
                        <i class="fab fa-github mr-sm" aria-hidden="true"></i
                        ><a href="https://github.com/melissapula" target="_blank" rel="noopener">GitHub</a>
                    </p>
                    <p class="mb-xs">
                        <i class="fab fa-linkedin mr-sm" aria-hidden="true"></i
                        ><a href="https://www.linkedin.com/in/melissa-pula-833748172" target="_blank" rel="noopener"
                            >LinkedIn</a
                        >
                    </p>
                    <p class="mb-xs"><i class="fas fa-map-marker-alt mr-sm" aria-hidden="true"></i>Bemidji, MN</p>
                </div>
            </div>
        </aside>
        <section id="experience">
            <h4 class="cyan-text mt-sm">PROFESSIONAL SUMMARY</h4>
            <p>
                Full-stack software engineer with 6+ years building production web applications for supply-chain and
                purchasing workflows: NestJS/Node.js services and API endpoints for inventory policy, SKU management,
                and planned orders, and Angular frontends with AG Grid views handling 100k+ rows. Shipped a multi-tenant
                React Native commerce app with Stripe Connect checkout on Postgres. Builds reusable components (key
                contributor to a 58-component company design system) and backs features with tests. Python (FastAPI) and
                AI-assisted development daily. M.S. Software Engineering; USMC veteran.
            </p>
            <h4 class="cyan-text mt-lg">TECHNICAL SKILLS</h4>
            <ul>
                <li><b>Languages:</b> TypeScript, JavaScript (ES6+), Python, SQL, C#, HTML, CSS/SCSS</li>
                <li>
                    <b>Frontend &amp; Mobile:</b> React Native (Expo), Angular 19 (RxJS, Signals), Vue 2/3, Web
                    Components (Stencil, Lit), Storybook, AG Grid Enterprise, Tailwind
                </li>
                <li>
                    <b>Backend &amp; APIs:</b> Node.js, NestJS, Python (FastAPI), REST API design, SSE, microservices,
                    JWT/OAuth 2.0, Socket.io, Stripe Connect
                </li>
                <li>
                    <b>Data &amp; Cloud:</b> PostgreSQL (Row-Level Security), Supabase/PostGIS, SQLite, Power BI
                    Embedded, Azure, Mapbox
                </li>
                <li><b>Testing:</b> Jest, Vitest, Cypress, Jasmine/Karma, Pact, Vue Test Utils, TDD</li>
                <li>
                    <b>Tooling &amp; CI/CD:</b> pnpm, npm publishing, Changesets, GitLab CI/CD, Docker,
                    ESLint/Stylelint, Husky, Git
                </li>
                <li>
                    <b>AI-Assisted Development:</b> Claude Code, GitHub Copilot, Anthropic API, LangGraph, MCP, LLM eval
                    harnesses, human-in-the-loop
                </li>
            </ul>
            <h4 class="cyan-text mt-lg">PROFESSIONAL EXPERIENCE</h4>
            <p class="mb-xs"><b>SOFTWARE ENGINEER, MODERN CLASSROOMS PROJECT (SEPT 2026 - OCT 2026)</b></p>
            <ul>
                <li>Built interactive, student-facing instructional tools on an Angular frontend.</li>
            </ul>
            <p class="mb-xs"><b>APPLICATION DEVELOPER, TRANSIMPACT (FEB 2020 - AUG 2026)</b></p>
            <ul>
                <li>
                    Built and tested NestJS backend services on the Avercast platform (inventory-policy, SKU-manager,
                    and firm-planned-order endpoints), pairing nearly every feature with its own test suite, behind
                    MSAL/Azure AD authentication.
                </li>
                <li>
                    Built Angular 19 features on Neo, an enterprise supply-chain planning platform of 50+ lazy-loaded
                    modules across demand planning, inventory, S&amp;OP, and forecasting: AG Grid Enterprise views
                    handling 100k+ rows with custom cell renderers and column-config persistence, RxJS/Signal-driven
                    state, and embedded Power BI dashboards with two-way filter sync.
                </li>
                <li>
                    Key contributor to the company-wide Ti design system: 58 framework-agnostic Stencil web components
                    across four packages (components, icons, styles, tokens), documented in Storybook. Led the refactor
                    removing Tailwind CSS from 45+ components, replacing it with token-driven SCSS and BEM.
                </li>
                <li>
                    Primary engineer on eAudit (2022&ndash;2023), rebuilding a legacy PHP shipping-audit app as a Vue 2
                    SPA (Vuex, Vue Router, Axios, Highcharts): a customer analytics portal with Mapbox shipping-route
                    visualizations and CSV ingestion, plus an admin suite for carrier credential management and
                    automated invoice/package reconciliation.
                </li>
                <li>
                    Hardened the design system's GitLab CI/CD pipeline: added a blocking build + lint merge-request
                    gate, a changed-files lint ratchet, pnpm caching, retries, and job timeouts, and fixed a
                    release-ordering bug.
                </li>
                <li>
                    Shipped through GitLab CI/CD with Docker: multi-stage pipelines for lint, test, scan, and image push
                    to Azure Container Registry, with environment-targeted builds across dev, QA, and production.
                </li>
                <li>
                    Maintained a pnpm workspace with Changesets-driven semver releases, automated linting (Stylelint,
                    ESLint, MegaLinter), and Husky-enforced commit standards across interdependent packages.
                </li>
                <li>
                    Built test coverage with Jasmine and Karma (Angular) and Jest (NestJS), enforcing TestBed and
                    HTTP-isolation patterns as house style, with features blocked from merge until specs passed CI.
                </li>
                <li>
                    Tuned frontend performance with route-level lazy loading, AG Grid client-side row models for
                    100k+-row datasets, signal-based change detection, and Brotli/gzip asset compression.
                </li>
                <li>
                    Reviewed merge requests for the team and authored its CLAUDE.md configuration for Claude Code,
                    adding Jira and Figma MCP integrations and documenting repo conventions; adopted by ~10 engineers.
                </li>
            </ul>
            <p class="mb-xs"><b>WEB DEVELOPER INTERN, BIG ROCK SPORTS (FEB 2018 - NOV 2018)</b></p>
            <ul>
                <li>
                    Built responsive interfaces with HTML, CSS, JavaScript, TypeScript, Angular, and Bootstrap,
                    translating designer wireframes into interactive UI features.
                </li>
                <li>
                    Managed website updates and content accuracy, and practiced Git workflows and peer code review with
                    cross-functional teams.
                </li>
            </ul>
            <h4 class="cyan-text mt-lg">SELECTED PROJECTS</h4>
            <p class="mb-xs">
                <b>Vendor Checkout &amp; Inventory App</b> —
                <a href="https://vendor-checkout-app.expo.app" target="_blank" rel="noopener"
                    >vendor-checkout-app.expo.app</a
                >
            </p>
            <ul>
                <li>
                    A multi-tenant React Native (Expo, TypeScript) app owned end to end, from design to deployment, and
                    used by real artists and vendors: barcode-scan inventory, Stripe Connect checkout, and Supabase
                    Postgres with row-level security.
                </li>
            </ul>
            <p class="mb-xs">
                <b>MFP Design System</b> —
                <a href="https://github.com/melissapula/design-system" target="_blank" rel="noopener"
                    >github.com/melissapula/design-system</a
                >
            </p>
            <ul>
                <li>
                    A published Lit-based web components monorepo: 23 npm packages under
                    <code>@mfp-design-system/*</code> and 233 releases via Changesets. Token-driven theming via CSS
                    custom properties supports six per-app brand themes and is consumed live by this portfolio's navbar,
                    footer, layout, cards, buttons, accordion, badges, spinner, select, and theme switcher.
                </li>
            </ul>
            <p class="mb-xs">
                <b>LessonForge</b> —
                <a href="https://github.com/melissapula/lessonforge" target="_blank" rel="noopener"
                    >github.com/melissapula/lessonforge</a
                >
            </p>
            <ul>
                <li>
                    An agentic lesson generator for the Modern Classrooms self-paced instructional model. A LangGraph +
                    Claude pipeline drafts a lesson and mastery check, self-evaluates against a rubric, then pauses for
                    teacher approval before anything is finalized. Built with Python, FastAPI, Pydantic, and a pinned
                    eval harness, with an Angular frontend over SSE.
                </li>
            </ul>
            <p class="mb-xs">
                <b>Frula Homes</b> —
                <a href="https://frulahomes.com" target="_blank" rel="noopener">frulahomes.com</a>
            </p>
            <ul>
                <li>
                    A for-sale-by-owner real estate platform built solo on Nuxt 4, NestJS, Supabase (PostGIS), and
                    Mapbox, deployed on Cloudflare Pages, with a custom comparable-sales engine built on public
                    geospatial data.
                </li>
            </ul>
            <p class="mb-xs">
                <b>Garage Sale Tracker</b> —
                <a href="https://garagesaletracker.app" target="_blank" rel="noopener">garagesaletracker.app</a>
            </p>
            <ul>
                <li>
                    A map-based PWA for finding and routing between local garage sales, in active use by real users.
                    Built on Nuxt 4, Vue 3, and TypeScript with Supabase (row-level security, scheduled jobs, realtime)
                    and the Mapbox Optimization API for multi-stop route planning.
                </li>
            </ul>
            <p class="mb-xs">
                <b>Four Seasons Studio</b> —
                <a href="https://fourseasonsstudio.com" target="_blank" rel="noopener">fourseasonsstudio.com</a>
            </p>
            <ul>
                <li>
                    A full-stack artist portfolio and e-commerce storefront on Nuxt 4, Sanity CMS, Stripe, and
                    Cloudinary, built so a non-technical artist can manage their own catalog independently.
                </li>
            </ul>
            <p class="mb-xs">
                <b>love-is-love-spinners</b> —
                <a href="https://www.npmjs.com/package/love-is-love-spinners" target="_blank" rel="noopener"
                    >npmjs.com/package/love-is-love-spinners</a
                >
            </p>
            <ul>
                <li>
                    A framework-agnostic TypeScript package of 32+ LGBTQ+ pride-flag CSS loading spinners, distributed
                    via npm with full type definitions.
                </li>
            </ul>
            <h4 class="cyan-text mt-lg">CERTIFICATIONS</h4>
            <ul>
                <li>Microsoft Certified: Azure Fundamentals (AZ-900) — Mar 2025</li>
                <li>PCEP – Certified Entry-Level Python Programmer, Python Institute — Apr 2025</li>
                <li>NestJS Fundamentals and Advanced Concepts — Mar 2025</li>
                <li>NestJS Architecture and Advanced Patterns — Apr 2025</li>
                <li>SQL Basics, HackerRank — Jan 2026</li>
            </ul>
            <h4 class="cyan-text mt-lg">EDUCATION</h4>
            <p class="mb-xs">M.S., Software Engineering — St. Cloud State University, 2023</p>
            <p class="mb-xs">B.S., Mathematics (Minor in Computer Science) — Bemidji State University, 2020</p>
            <p class="mb-xs">B.S., Criminal Justice — Bemidji State University, 2015</p>
            <h4 class="cyan-text mt-lg">MILITARY SERVICE</h4>
            <p>
                United States Marine Corps, 2003&ndash;2007. Small arms repairer. Two combat tours in Iraq, with service
                in Okinawa and the Philippines. Honorable discharge.
            </p>
        </section>
    </div>
</template>

<script>
    import image from '../assets/resumePhoto.jpg';
    export default {
        name: 'Resume',
        data() {
            return {
                profile: image
            };
        }
    };
</script>

<style scoped>
    .resume-layout {
        display: grid;
        grid-template-columns: 1fr;
    }
    @media (min-width: 1024px) {
        .resume-layout {
            grid-template-columns: 4fr 8fr;
        }
    }
    #pic {
        background-color: white;
        padding: 1rem 1.5rem;
    }
    #pic h1 {
        margin-bottom: 0;
    }
    #pic h4 {
        margin-top: 0.25rem;
    }
    #picInner {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #experience {
        background-color: #f0f2f5;
        color: #333;
        padding: 1rem 2rem 2rem;
        min-height: calc(100vh - var(--site-nav-height, 56px) - var(--site-footer-height, 64px));
    }
    @media (min-width: 1024px) {
        #pic {
            position: sticky;
            top: var(--site-nav-height, 56px);
            box-sizing: border-box;
            height: calc(100vh - var(--site-nav-height, 56px) - var(--site-footer-height, 64px));
            overflow: auto;
            padding: 1rem;
        }
        #picInner {
            height: 100%;
            justify-content: center;
        }
    }
    .cyan-text {
        color: #2980b9 !important;
    }

    @media print {
        #pic {
            position: static;
            width: 100%;
            height: auto;
            padding: 0 0 1rem 0;
            background-color: white !important;
            overflow: visible;
        }
        #picInner {
            display: block;
            text-align: center;
            height: auto;
        }
        #picInner img {
            max-width: 200px !important;
            height: auto !important;
        }
        #experience {
            padding: 0;
            background-color: white !important;
            color: black !important;
            min-height: 0;
        }
        .cyan-text {
            color: #1a2744 !important;
            border-bottom: 1px solid #1a2744;
            padding-bottom: 4px;
            margin-top: 1rem !important;
        }
        h1 {
            font-size: 22pt;
            margin-bottom: 4px;
        }
        h4 {
            font-size: 11pt;
        }
        p,
        li {
            font-size: 10pt;
            line-height: 1.4;
        }
        ul {
            margin-bottom: 6px;
            padding-left: 18px;
        }
        @page {
            margin: 0.5in;
        }
    }
</style>
