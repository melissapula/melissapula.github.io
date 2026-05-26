<template>
    <div>
        <div class="container-fluid mt-0 pt-0" v-show="!selectedProject">
            <div
                class="row justify-content-center pt-5 pb-5"
                style="background-color: #f0f2f5; min-height: calc(100vh - var(--site-nav-height, 56px))"
            >
                <div class="col-lg-10 col-md-11">
                    <h2 class="text-center mb-4" style="color: #1a2744; font-weight: bold">Projects</h2>
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6 mb-4">
                            <a
                                href="https://github.com/melissapula/design-system"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="card-link"
                            >
                                <div class="project-card">
                                    <div class="project-preview ds-preview">
                                        <div class="preview-content">
                                            <span class="ds-title">MFP Design System</span>
                                            <span class="ds-subtitle">Themable Lit web components</span>
                                        </div>
                                    </div>
                                    <div class="project-info">
                                        <h4 style="color: #1a2744">MFP Design System</h4>
                                        <p>
                                            A monorepo of framework-agnostic web components built with Lit and published
                                            to npm under <code>@mfp-design-system/*</code>. Token-driven theming via CSS
                                            custom properties, Changesets-managed semver releases, full TypeScript types
                                            — and consumed live by this portfolio (navbar, footer, buttons, cards,
                                            badges, spinner, select, accordion, and the theme switcher above are all
                                            from it).
                                        </p>
                                        <div class="tech-tags mb-3">
                                            <mfp-badge>Lit</mfp-badge>
                                            <mfp-badge>Web Components</mfp-badge>
                                            <mfp-badge>TypeScript</mfp-badge>
                                            <mfp-badge>Changesets</mfp-badge>
                                        </div>
                                        <mfp-button class="card-cta" variant="primary">View on GitHub</mfp-button>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4">
                            <a
                                href="https://frulahomes.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="card-link"
                            >
                                <div class="project-card">
                                    <div class="project-preview frula-preview">
                                        <div class="preview-content">
                                            <span class="frula-title">Frula Homes</span>
                                            <span class="frula-subtitle">Sell your home. Keep the commission.</span>
                                        </div>
                                    </div>
                                    <div class="project-info">
                                        <h4 style="color: #1a2744">Frula Homes</h4>
                                        <p>
                                            A nationwide For Sale By Owner platform with map search, structured offers,
                                            buyer/seller messaging, a ZIP-level Market Snapshot from Zillow ZHVI, and a
                                            custom Dream Home Finder that match-scores listings to a buyer's wish list.
                                        </p>
                                        <div class="tech-tags mb-3">
                                            <mfp-badge>Nuxt 3</mfp-badge>
                                            <mfp-badge>NestJS</mfp-badge>
                                            <mfp-badge>Supabase</mfp-badge>
                                            <mfp-badge>PostGIS</mfp-badge>
                                            <mfp-badge>Mapbox</mfp-badge>
                                        </div>
                                        <mfp-button class="card-cta" variant="primary">Visit Site</mfp-button>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4">
                            <a
                                href="https://garagesaletracker.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="card-link"
                            >
                                <div class="project-card">
                                    <div class="project-preview gst-preview">
                                        <div class="preview-content">
                                            <span class="gst-title">Garage Sale Tracker</span>
                                            <span class="gst-subtitle">Find. Save. Route.</span>
                                        </div>
                                    </div>
                                    <div class="project-info">
                                        <h4 style="color: #1a2744">Garage Sale Tracker</h4>
                                        <p>
                                            A map-based PWA for browsing and routing between local garage sales, in
                                            active use by real users. Mapbox Optimization API plans multi-stop
                                            day-routes; Supabase handles auth, row-level security, realtime messaging,
                                            and scheduled cleanup jobs.
                                        </p>
                                        <div class="tech-tags mb-3">
                                            <mfp-badge>Nuxt 4</mfp-badge>
                                            <mfp-badge>TypeScript</mfp-badge>
                                            <mfp-badge>Supabase</mfp-badge>
                                            <mfp-badge>Mapbox</mfp-badge>
                                            <mfp-badge>Tailwind</mfp-badge>
                                        </div>
                                        <mfp-button class="card-cta" variant="primary">Visit Site</mfp-button>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4">
                            <a
                                href="https://fourseasonsstudio.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="card-link"
                            >
                                <div class="project-card">
                                    <div class="project-preview fss-preview">
                                        <div class="preview-content">
                                            <span class="preview-title">Four Seasons Studio</span>
                                            <span class="preview-subtitle">Fine Art by Christine</span>
                                        </div>
                                    </div>
                                    <div class="project-info">
                                        <h4 style="color: #1a2744">Four Seasons Studio</h4>
                                        <p>
                                            Portfolio and e-commerce site for a fine art studio, featuring original
                                            acrylic and oil landscape paintings. Sanity-powered catalog the artist
                                            manages independently, with Stripe Checkout and webhook-driven post-purchase
                                            email automation.
                                        </p>
                                        <div class="tech-tags mb-3">
                                            <mfp-badge>Nuxt 4</mfp-badge>
                                            <mfp-badge>Vue 3</mfp-badge>
                                            <mfp-badge>Sanity CMS</mfp-badge>
                                            <mfp-badge>Stripe</mfp-badge>
                                        </div>
                                        <mfp-button class="card-cta" variant="primary">Visit Site</mfp-button>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4">
                            <a
                                href="https://github.com/melissapula/lessonforge"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="card-link"
                            >
                                <div class="project-card">
                                    <div class="project-preview lf-preview">
                                        <div class="preview-content">
                                            <span class="lf-title">LessonForge</span>
                                            <span class="lf-subtitle">Human-in-the-loop lesson generation</span>
                                        </div>
                                    </div>
                                    <div class="project-info">
                                        <h4 style="color: #1a2744">LessonForge</h4>
                                        <p>
                                            An agentic, spec-driven lesson generator for the Modern Classrooms
                                            self-paced, mastery-based instructional model. A LangGraph pipeline drafts a
                                            lesson, scores its own work against a rubric, and pauses for the teacher to
                                            approve, revise, or reject before anything is finalized.
                                        </p>
                                        <div class="tech-tags mb-3">
                                            <mfp-badge>Python</mfp-badge>
                                            <mfp-badge>LangGraph</mfp-badge>
                                            <mfp-badge>Anthropic API</mfp-badge>
                                            <mfp-badge>Pydantic</mfp-badge>
                                        </div>
                                        <mfp-button class="card-cta" variant="primary">View on GitHub</mfp-button>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4">
                            <a
                                href="https://www.npmjs.com/package/love-is-love-spinners"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="card-link"
                            >
                                <div class="project-card">
                                    <div class="project-preview spinner-preview">
                                        <div ref="spinnerRef"></div>
                                    </div>
                                    <div class="project-info">
                                        <h4 style="color: #1a2744">love-is-love-spinners</h4>
                                        <p>
                                            A framework-agnostic TypeScript package of 32+ LGBTQ+ pride-flag CSS loading
                                            spinners, distributed via npm with full type definitions. Zero dependencies
                                            — each spinner pulses a flag from a dot to full size while a
                                            counter-rotating text ring cycles through built-in or custom sayings.
                                        </p>
                                        <div class="tech-tags mb-3">
                                            <mfp-badge>TypeScript</mfp-badge>
                                            <mfp-badge>npm</mfp-badge>
                                            <mfp-badge>CSS Animations</mfp-badge>
                                        </div>
                                        <mfp-button class="card-cta" variant="primary">View on npm</mfp-button>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div
                                class="project-card"
                                @click="selectedProject = 'blockly'"
                                tabindex="0"
                                role="button"
                                @keyup.enter="selectedProject = 'blockly'"
                            >
                                <div class="project-preview blockly-preview">
                                    <div class="preview-content">
                                        <span class="blockly-title">Blockly Sandbox</span>
                                        <span class="blockly-subtitle">Visual programming workspace</span>
                                    </div>
                                </div>
                                <div class="project-info">
                                    <h4 style="color: #1a2744">Blockly Sandbox</h4>
                                    <p>
                                        An interactive block-based programming workspace built on Google's Blockly
                                        library. Drag blocks to compose logic, run the generated JavaScript live, and
                                        see console output in a side panel — with configurable block limits and badge
                                        rewards.
                                    </p>
                                    <div class="tech-tags mb-3">
                                        <mfp-badge>Vue 3</mfp-badge>
                                        <mfp-badge>Blockly</mfp-badge>
                                        <mfp-badge>JavaScript</mfp-badge>
                                    </div>
                                    <mfp-button class="card-cta" variant="primary">Open Sandbox</mfp-button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div
                                class="project-card"
                                @click="selectedProject = 'fitness'"
                                tabindex="0"
                                role="button"
                                @keyup.enter="selectedProject = 'fitness'"
                            >
                                <div class="project-preview fitness-preview">
                                    <div class="preview-content">
                                        <span class="fitness-title">Fitness</span>
                                        <span class="fitness-subtitle">Believe it. Achieve it.</span>
                                    </div>
                                </div>
                                <div class="project-info">
                                    <h4 style="color: #1a2744">Fitness</h4>
                                    <p>
                                        My weekly training split, how I structure workouts across chest, back, legs,
                                        delts, and arms, and the mindset that keeps me showing up six days a week.
                                    </p>
                                    <mfp-button class="card-cta" variant="primary">Read Blog</mfp-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            v-show="selectedProject"
            :class="['project-view', selectedProject ? 'project-view--' + selectedProject : '']"
        >
            <mfp-button class="back-button" variant="secondary" @click="selectedProject = null">
                <i class="fas fa-arrow-left me-2"></i>Back to Projects
            </mfp-button>
            <FitnessBlog v-if="selectedProject === 'fitness'" />
            <Blockly v-if="selectedProject === 'blockly'" />
        </div>
    </div>
</template>

<script>
    import { createSpinner } from 'love-is-love-spinners';
    import FitnessBlog from './fitnessBlog.vue';
    import Blockly from './blockly.vue';
    export default {
        name: 'Portfolio',
        components: {
            FitnessBlog,
            Blockly
        },
        data() {
            return {
                spinner: null,
                validProjects: ['blockly', 'fitness']
            };
        },
        computed: {
            selectedProject: {
                get() {
                    const q = this.$route.query.project;
                    return this.validProjects.includes(q) ? q : null;
                },
                set(value) {
                    if (value) {
                        this.$router.push({ query: { project: value } });
                    } else {
                        this.$router.push({ query: {} });
                    }
                }
            }
        },
        mounted() {
            this.spinner = createSpinner(this.$refs.spinnerRef, {
                size: 'lg',
                speed: 5,
                ringText: 'cycle',
                ringColor: 'rainbow',
                shuffle: true
            });
        },
        beforeUnmount() {
            this.spinner?.destroy();
        }
    };
</script>

<style scoped>
    .section-label {
        color: #6c757d;
        font-weight: 500;
        letter-spacing: 3px;
        text-transform: uppercase;
        font-size: 0.85rem;
    }
    .card-link {
        text-decoration: none;
        color: inherit;
        display: block;
        height: 100%;
    }
    .project-card {
        background-color: #fff;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        height: 100%;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        transition:
            transform 0.15s ease,
            box-shadow 0.15s ease;
    }
    .project-card:hover,
    .project-card:focus,
    .card-link:hover .project-card,
    .card-link:focus .project-card {
        transform: translateY(-4px);
        box-shadow: 0 8px 28px rgba(0, 0, 0, 0.15);
        outline: none;
    }
    .project-preview {
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .preview-content {
        text-align: center;
        padding: 0 1rem;
    }
    .fss-preview {
        background: linear-gradient(135deg, #f5f0eb 0%, #e8ddd4 100%);
    }
    .ds-preview {
        background: linear-gradient(135deg, #1a2744 0%, #c4622a 50%, #f97316 100%);
    }
    .ds-title {
        display: block;
        font-family: 'DM Sans', Georgia, sans-serif;
        font-size: 22px;
        color: #fff;
        letter-spacing: 1.5px;
    }
    .ds-subtitle {
        display: block;
        font-size: 13px;
        color: #fff;
        opacity: 0.9;
        margin-top: 8px;
        letter-spacing: 0.5px;
    }
    .preview-title {
        display: block;
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 24px;
        color: #3d2e1e;
        letter-spacing: 2px;
    }
    .preview-subtitle {
        display: block;
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 14px;
        color: #7a6a5a;
        margin-top: 8px;
        letter-spacing: 1px;
    }
    .frula-preview {
        background: linear-gradient(135deg, #125f46 0%, #1d9e75 100%);
    }
    .frula-title {
        display: block;
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 24px;
        color: #fff;
        letter-spacing: 2px;
    }
    .frula-subtitle {
        display: block;
        font-size: 13px;
        color: #cbd5e1;
        margin-top: 8px;
        letter-spacing: 0.5px;
    }
    .gst-preview {
        background: linear-gradient(135deg, #fffbeb 0%, #fde8c8 100%);
    }
    .gst-title {
        display: block;
        font-family: 'Playfair Display', Georgia, serif;
        font-size: 24px;
        color: #c2410c;
        letter-spacing: 1px;
    }
    .gst-subtitle {
        display: block;
        font-size: 13px;
        color: #92400e;
        margin-top: 8px;
        letter-spacing: 0.5px;
    }
    .lf-preview {
        background: linear-gradient(135deg, #fafaf7 0%, #e5e3df 100%);
    }
    .lf-title {
        display: block;
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 24px;
        color: #2563eb;
        letter-spacing: 2px;
    }
    .lf-subtitle {
        display: block;
        font-size: 13px;
        color: #6b6963;
        margin-top: 8px;
        letter-spacing: 0.5px;
    }
    .spinner-preview {
        background: linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%);
    }
    .project-info {
        padding: 1.5rem;
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    .project-info p {
        color: #555;
        line-height: 1.6;
        flex: 1;
    }
    .tech-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }
    .card-cta {
        align-self: flex-start;
        pointer-events: none;
    }
    .fitness-preview {
        background: linear-gradient(135deg, #7f1d1d 0%, #dc2626 100%);
    }
    .fitness-title {
        display: block;
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 24px;
        color: #fff;
        letter-spacing: 2px;
    }
    .fitness-subtitle {
        display: block;
        font-size: 13px;
        color: rgba(255, 255, 255, 0.9);
        margin-top: 8px;
        letter-spacing: 0.5px;
        font-style: italic;
    }
    .blockly-preview {
        background: linear-gradient(135deg, #0f172a 0%, #334155 100%);
    }
    .blockly-title {
        display: block;
        font-family: 'DM Sans', Georgia, sans-serif;
        font-size: 22px;
        color: #fff;
        letter-spacing: 1.5px;
    }
    .blockly-subtitle {
        display: block;
        font-size: 13px;
        color: rgba(255, 255, 255, 0.85);
        margin-top: 8px;
        letter-spacing: 0.5px;
    }
    .project-view {
        padding-top: 56px;
    }
    .project-view--fitness {
        background-color: #f8f9fa;
    }
    .project-view--blockly {
        background-color: #0f172a;
        padding-top: 72px;
    }
    .project-view--blockly :deep(.blockly-layout) {
        height: calc(100vh - 128px);
    }
    .back-button {
        position: fixed;
        top: calc(var(--site-nav-height, 56px) + 16px);
        left: 16px;
        z-index: 100;
    }
    .back-button::part(button) {
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);
    }
</style>
