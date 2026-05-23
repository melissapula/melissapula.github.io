<template>
    <div class="container-fluid mt-0 pt-0">
        <div class="row">
            <div class="col-12 col-lg-4" id="pic">
                <div id="picInner">
                    <div class="row text-center">
                        <div class="col-12">
                            <h1>Melissa Freundschuh-Pula</h1>
                            <h4>Full-Stack Software Engineer</h4>
                        </div>
                    </div>
                    <div class="my-3" style="flex: 1; min-height: 0; width: 80%">
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
                    <div class="text-center mb-2">
                        <p class="mb-1">
                            <i class="fas fa-envelope me-2"></i
                            ><a href="mailto:melissa_m_24@yahoo.com">melissa_m_24@yahoo.com</a>
                        </p>
                        <p class="mb-1">
                            <i class="fab fa-github me-2"></i
                            ><a href="https://github.com/melissapula" target="_blank" rel="noopener">GitHub</a>
                        </p>
                        <p class="mb-1">
                            <i class="fab fa-linkedin me-2"></i
                            ><a href="https://www.linkedin.com/in/melissa-pula-833748172" target="_blank" rel="noopener"
                                >LinkedIn</a
                            >
                        </p>
                        <p class="mb-1"><i class="fas fa-map-marker-alt me-2"></i>Bemidji, MN</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-8" id="experience">
                <h4 class="cyan-text mt-2">PROFESSIONAL SUMMARY</h4>
                <p>
                    Full-stack software engineer with 6+ years building enterprise-scale web applications, from a
                    companywide design system of 58 Stencil components to Angular data platforms handling 100k+-row
                    datasets. Deep expertise in TypeScript, component architecture, automated testing, and
                    accessibility. Ships production software end-to-end and builds and maintains live products solo
                    outside of work.
                </p>
                <h4 class="cyan-text mt-4">TECHNICAL SKILLS</h4>
                <ul>
                    <li><b>Languages:</b> TypeScript, JavaScript, Python, C#, HTML, CSS/SCSS</li>
                    <li>
                        <b>Frontend:</b> Angular, StencilJS, Web Components, Vue, RxJS/Signals, AG Grid Enterprise,
                        Tailwind, Storybook
                    </li>
                    <li><b>Backend:</b> NestJS, Node.js, REST APIs, JWT/OAuth 2.0, Socket.io</li>
                    <li><b>Data &amp; Cloud:</b> PostgreSQL, Supabase/PostGIS, Power BI, Azure, Mapbox</li>
                    <li><b>Testing:</b> Jasmine, Karma, Jest, Vue Test Utils</li>
                    <li>
                        <b>Tooling &amp; CI/CD:</b> pnpm, Changesets, GitLab CI/CD, Docker, ESLint/Stylelint, Husky, Git
                    </li>
                    <li><b>AI Tools:</b> Claude Code, GitHub Copilot</li>
                </ul>
                <h4 class="cyan-text mt-4">PROFESSIONAL EXPERIENCE</h4>
                <p class="mb-1"><b>SOFTWARE ENGINEER, TRANSIMPACT (FEB 2020 - PRESENT)</b></p>
                <ul>
                    <li>
                        Architect and ship the company-wide Ti design system — 58 Stencil web components across four
                        packages (components, icons, styles, tokens), framework-agnostic and consumed by the Angular
                        production app, with Storybook as the single source of truth for API, theming, and usage.
                    </li>
                    <li>
                        Lead frontend on an Angular 19 enterprise supply-chain platform — 50+ lazy-loaded feature
                        modules across demand planning, inventory, S&amp;OP, and forecasting; AG Grid Enterprise with
                        custom cell renderers and column-config persistence; RxJS/Signal-driven state; MSAL/Azure AD
                        authentication and embedded Power BI reports.
                    </li>
                    <li>
                        Led the Vue rebuild of eAudit, a shipping-audit platform — modernized a legacy PHP web app into
                        a Vue 2 SPA spanning a customer-facing analytics portal (Highcharts dashboards, Mapbox
                        shipping-route visualizations, CSV ingestion) and a full admin suite (customer, process,
                        accounting, reporting, and manual-audit workflows). Primary frontend engineer through the main
                        build-out phase, 2022&ndash;2023.
                    </li>
                    <li>
                        Operate a pnpm workspace with Changesets-driven semver releases, automated linting (Stylelint,
                        ESLint, MegaLinter), and Husky-enforced commit standards across interdependent packages.
                    </li>
                    <li>
                        Ship through GitLab CI/CD with Docker — multi-stage pipelines for lint, test, scan, and image
                        push to Azure Container Registry, with environment-targeted builds across dev, QA, and
                        production.
                    </li>
                    <li>
                        Build test coverage with Jasmine and Karma (Angular) and Jest (NestJS), enforcing TestBed and
                        HTTP-isolation patterns as house style, with features blocked from merge until specs pass CI.
                    </li>
                    <li>
                        Tune frontend performance with route-level lazy loading, AG Grid client-side row models for
                        100k+-row datasets, signal-based change detection, and Brotli/gzip asset compression.
                    </li>
                    <li>
                        Integrate with a NestJS backend of 30+ microservice-style apps via JWT-authenticated REST and
                        Socket.io channels, routed through a typed HTTP service abstraction.
                    </li>
                </ul>
                <p class="mb-1"><b>WEB DEVELOPER INTERN, BIG ROCK SPORTS (FEB 2018 - NOV 2018)</b></p>
                <ul>
                    <li>
                        Built responsive interfaces with HTML, CSS, JavaScript, TypeScript, Angular, and Bootstrap,
                        translating designer wireframes into interactive UI features.
                    </li>
                    <li>
                        Managed website updates and content accuracy, and practiced Git workflows and peer code review
                        with cross-functional teams.
                    </li>
                </ul>
                <h4 class="cyan-text mt-4">SELECTED PROJECTS</h4>
                <p class="mb-1">
                    <b>Frula Homes</b> —
                    <a href="https://frulahomes.com" target="_blank" rel="noopener">frulahomes.com</a>
                </p>
                <ul>
                    <li>
                        A for-sale-by-owner real estate platform built solo on Nuxt 3, NestJS, Supabase (PostGIS), and
                        Mapbox, deployed on Cloudflare Pages, with a custom comparable-sales engine built on public
                        geospatial data.
                    </li>
                </ul>
                <p class="mb-1">
                    <b>Four Seasons Studio</b> —
                    <a href="https://fourseasonsstudio.com" target="_blank" rel="noopener">fourseasonsstudio.com</a>
                </p>
                <ul>
                    <li>
                        A full-stack artist portfolio and e-commerce storefront on Nuxt 3, Sanity CMS, Stripe, and
                        Cloudinary, built so a non-technical artist can manage their own catalog independently.
                    </li>
                </ul>
                <p class="mb-1">
                    <b>Garage Sale Tracker</b> —
                    <a href="https://garagesaletracker.app" target="_blank" rel="noopener">garagesaletracker.app</a>
                </p>
                <ul>
                    <li>
                        A map-based PWA for finding and routing between local garage sales, in active use by real users.
                        Built on Nuxt 4, Vue 3, and TypeScript with Supabase (row-level security, scheduled jobs,
                        realtime) and the Mapbox Optimization API for multi-stop route planning.
                    </li>
                </ul>
                <p class="mb-1">
                    <b>love-is-love-spinners</b> —
                    <a href="https://www.npmjs.com/package/love-is-love-spinners" target="_blank" rel="noopener"
                        >npmjs.com/package/love-is-love-spinners</a
                    >
                </p>
                <ul>
                    <li>
                        A framework-agnostic TypeScript package of 32+ LGBTQ+ pride-flag CSS loading spinners,
                        distributed via npm with full type definitions.
                    </li>
                </ul>
                <h4 class="cyan-text mt-4">CERTIFICATIONS</h4>
                <ul>
                    <li>Microsoft Certified: Azure Fundamentals (AZ-900) — Mar 2025</li>
                    <li>PCEP – Certified Entry-Level Python Programmer, Python Institute — Apr 2025</li>
                    <li>NestJS Fundamentals and Advanced Concepts — Mar 2025</li>
                    <li>NestJS Architecture and Advanced Patterns — Apr 2025</li>
                    <li>SQL Basics, HackerRank — Jan 2026</li>
                </ul>
                <h4 class="cyan-text mt-4">EDUCATION</h4>
                <p class="mb-1">M.S., Software Engineering — St. Cloud State University, 2023</p>
                <p class="mb-1">B.S., Mathematics (Minor in Computer Science) — Bemidji State University, 2020</p>
                <p class="mb-1">B.S., Criminal Justice — Bemidji State University, 2015</p>
                <h4 class="cyan-text mt-4">MILITARY SERVICE</h4>
                <p>United States Marine Corps, 2003&ndash;2007. Two deployments to Iraq. Honorable discharge.</p>
            </div>
        </div>
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
    #pic {
        background-color: white;
        position: fixed;
        top: 56px;
        left: 0;
        width: 33.333%;
        height: calc(100vh - 56px);
        overflow: hidden;
    }
    #picInner {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #experience {
        background-color: #f0f2f5;
        color: #333;
        margin-left: 33.333%;
        min-height: calc(100vh - 56px);
        padding: 1rem 2rem 2rem;
    }
    .cyan-text {
        color: #2980b9 !important;
    }
    @media (max-width: 991px) {
        #pic {
            position: relative;
            top: 0;
            width: 100%;
            height: auto;
            padding: 2rem 0;
        }
        #experience {
            margin-left: 0;
        }
    }
</style>
