<template>
    <MDBContainer class="mt-0 pt-0" fluid>
        <MDBRow>
            <MDBCol lg="4" sm="12" id="pic">
                <div id="picInner">
                    <MDBRow class="text-center">
                        <MDBCol col="12">
                            <h1>Melissa Freundschuh-Pula</h1>
                            <h4>Software Engineer</h4>
                        </MDBCol>
                    </MDBRow>
                    <div class="my-3" style="flex: 1; min-height: 0; width: 80%">
                        <img
                            :src="profile"
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
                        <p class="mb-1"><MDBIcon icon="phone" class="me-2" />218-209-5056</p>
                        <p class="mb-1"><MDBIcon icon="envelope" class="me-2" />melissa_m_24@yahoo.com</p>
                        <p class="mb-1">
                            <MDBIcon iconStyle="fab" icon="github" class="me-2" /><a
                                href="https://github.com/melissapula"
                                >github.com/melissapula</a
                            >
                        </p>
                        <p class="mb-1">
                            <MDBIcon iconStyle="fab" icon="linkedin" class="me-2" /><a
                                href="https://www.linkedin.com/in/melissa-pula-833748172"
                                >LinkedIn</a
                            >
                        </p>
                        <p class="mb-1"><MDBIcon icon="map-marker-alt" class="me-2" />Bemidji, MN</p>
                    </div>
                </div>
            </MDBCol>
            <MDBCol lg="8" sm="12" id="experience">
                <h4 class="cyan-text mt-2">PROFESSIONAL SUMMARY</h4>
                <p>
                    Full-Stack Software Engineer and Marine Corps veteran with 6+ years building and maintaining web
                    libraries and enterprise applications. Expert in design systems, build tooling, and developer
                    experience. Architected a 50+ component library with comprehensive documentation, CI/CD pipelines
                    for automated publishing, and cross-browser compatibility testing. Passionate about creating tools
                    that improve developer productivity. M.S. in Software Engineering.
                </p>
                <h4 class="cyan-text mt-4">TECHNICAL EXPERTISE</h4>
                <ul>
                    <li>
                        <b>Languages &amp; Frameworks:</b> TypeScript, JavaScript (ES6+), Angular, StencilJS, Vue.js,
                        Node.js, NestJS
                    </li>
                    <li>
                        <b>Library Development:</b> Web Components, Storybook, npm package publishing, semantic
                        versioning, API design
                    </li>
                    <li>
                        <b>Build Tools &amp; Bundlers:</b> Webpack, Vite, Rollup, pnpm monorepos, tree-shaking, code
                        splitting
                    </li>
                    <li>
                        <b>CI/CD &amp; Release:</b> GitLab CI/CD, Docker, automated testing pipelines, GitOps,
                        zero-downtime deployments
                    </li>
                    <li>
                        <b>Testing &amp; Quality:</b> Jest, Vitest, Pact (contract testing), cross-browser testing,
                        MegaLinter, ESLint
                    </li>
                    <li>
                        <b>Documentation:</b> Storybook, MDX, OpenAPI/Swagger, technical writing for developer audiences
                    </li>
                </ul>
                <h4 class="cyan-text mt-4">PROFESSIONAL EXPERIENCE</h4>
                <p class="mb-1"><b>SOFTWARE ENGINEER, TRANSIMPACT (FEB 2020 - PRESENT)</b></p>
                <ul>
                    <li>
                        Built and maintained a Stencil-based design system library with 50+ reusable Web Components,
                        managing semantic versioning, backwards compatibility, and breaking change documentation
                    </li>
                    <li>
                        Created comprehensive Storybook documentation with interactive examples and usage guidelines,
                        reducing developer onboarding time and support requests across consuming teams
                    </li>
                    <li>
                        Configured Webpack and build pipelines for library bundling, tree-shaking, and multiple output
                        formats (ESM, CommonJS, UMD) to support diverse consumer environments
                    </li>
                    <li>
                        Architected pnpm monorepo managing 15+ packages with shared tooling, improving build times by
                        35% and enabling consistent versioning across interdependent libraries
                    </li>
                    <li>
                        Developed GitLab CI/CD pipelines for automated testing, linting, and npm publishing,
                        accelerating release cycles from weekly to daily deployments
                    </li>
                    <li>
                        Resolved cross-browser compatibility issues across Chrome, Firefox, Safari, and Edge, ensuring
                        consistent behavior for library consumers on multiple platforms
                    </li>
                    <li>
                        Provided technical support to internal development teams adopting the design system, triaging
                        issues, debugging integration problems, and contributing fixes
                    </li>
                    <li>
                        Achieved 85% code coverage through Jest and Vitest unit tests plus Pact contract testing,
                        reducing production defects by 60%
                    </li>
                    <li>
                        Integrated ag-Grid Enterprise with custom TypeScript cell renderers and complex state management
                        patterns for data visualization dashboards
                    </li>
                </ul>
                <p class="mb-1"><b>WEB DEVELOPER INTERN, BIG ROCK SPORTS (FEB 2018 - NOV 2018)</b></p>
                <ul>
                    <li>
                        Built responsive Angular interfaces following WCAG accessibility standards, collaborating with
                        designers and backend teams
                    </li>
                    <li>
                        Practiced Git workflows, code review, and documentation standards contributing to team knowledge
                        sharing
                    </li>
                </ul>
                <h4 class="cyan-text mt-4">MILITARY SERVICE</h4>
                <p class="mb-1"><b>UNITED STATES MARINE CORPS — VETERAN</b></p>
                <ul>
                    <li>
                        Completed two combat deployments to Iraq with additional service in Okinawa, Japan and the
                        Philippines
                    </li>
                    <li>
                        Developed discipline, adaptability, and clear communication through mission-focused leadership
                        in high-pressure environments
                    </li>
                </ul>
                <h4 class="cyan-text mt-4">EDUCATION</h4>
                <p class="mb-1">M.S., Software Engineering — St. Cloud State University, 2023</p>
                <p class="mb-1">B.S., Mathematics; Minor in Computer Science — Bemidji State University, 2020</p>
                <h4 class="cyan-text mt-4">CERTIFICATIONS</h4>
                <ul>
                    <li>PCEP Certified Python Programmer</li>
                    <li>Microsoft Azure Fundamentals</li>
                    <li>NestJS Certified: Fundamentals, Advanced Concepts, and Architecture Patterns</li>
                </ul>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
</template>

<script>
    import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-vue-ui-kit';
    import image from '../assets/resumePhoto.jpg';
    export default {
        name: 'Resume',
        components: {
            MDBContainer,
            MDBRow,
            MDBCol,
            MDBIcon
        },
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
