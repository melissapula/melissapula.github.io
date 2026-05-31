<template>
    <div>
        <mfp-container v-show="!selectedProject" size="2xl" class="portfolio-page">
            <h2 class="page-heading text-center mb-lg">Projects</h2>
            <div class="cards-grid">
                <ProjectCard
                    href="https://github.com/melissapula/design-system"
                    title="MFP Design System"
                    description="A monorepo of framework-agnostic web components built with Lit and published to npm under @mfp-design-system/*. Token-driven theming via CSS custom properties, Changesets-managed semver releases, full TypeScript types — and consumed live by this portfolio (navbar, footer, buttons, cards, badges, spinner, select, accordion, and the theme switcher above are all from it)."
                    :tags="['Lit', 'Web Components', 'TypeScript', 'Changesets']"
                    cta-text="View on GitHub"
                >
                    <template #preview>
                        <div class="project-preview ds-preview">
                            <div class="preview-content">
                                <span class="ds-title">MFP Design System</span>
                                <span class="ds-subtitle">Themable Lit web components</span>
                            </div>
                        </div>
                    </template>
                </ProjectCard>
                <ProjectCard
                    href="https://frulahomes.com"
                    title="Frula Homes"
                    description="A nationwide For Sale By Owner platform with map search, structured offers, buyer/seller messaging, a ZIP-level Market Snapshot from Zillow ZHVI, and a custom Dream Home Finder that match-scores listings to a buyer's wish list."
                    :tags="['Nuxt 3', 'NestJS', 'Supabase', 'PostGIS', 'Mapbox']"
                    cta-text="Visit Site"
                >
                    <template #preview>
                        <div class="project-preview frula-preview">
                            <div class="preview-content">
                                <span class="frula-title">Frula Homes</span>
                                <span class="frula-subtitle">Sell your home. Keep the commission.</span>
                            </div>
                        </div>
                    </template>
                </ProjectCard>
                <ProjectCard
                    href="https://garagesaletracker.app"
                    title="Garage Sale Tracker"
                    description="A map-based PWA for browsing and routing between local garage sales, in active use by real users. Mapbox Optimization API plans multi-stop day-routes; Supabase handles auth, row-level security, realtime messaging, and scheduled cleanup jobs."
                    :tags="['Nuxt 4', 'TypeScript', 'Supabase', 'Mapbox', 'Tailwind']"
                    cta-text="Visit Site"
                >
                    <template #preview>
                        <div class="project-preview gst-preview">
                            <div class="preview-content">
                                <span class="gst-title">Garage Sale Tracker</span>
                                <span class="gst-subtitle">Find. Save. Route.</span>
                            </div>
                        </div>
                    </template>
                </ProjectCard>
                <ProjectCard
                    href="https://fourseasonsstudio.com/"
                    title="Four Seasons Studio"
                    description="Portfolio and e-commerce site for a fine art studio, featuring original acrylic and oil landscape paintings. Sanity-powered catalog the artist manages independently, with Stripe Checkout and webhook-driven post-purchase email automation."
                    :tags="['Nuxt 4', 'Vue 3', 'Sanity CMS', 'Stripe']"
                    cta-text="Visit Site"
                >
                    <template #preview>
                        <div class="project-preview fss-preview">
                            <div class="preview-content">
                                <span class="fss-title">Four Seasons Studio</span>
                                <span class="fss-subtitle">Fine Art by Christine</span>
                            </div>
                        </div>
                    </template>
                </ProjectCard>
                <ProjectCard
                    title="Paint that Breathes"
                    description="A WebGL experiment that brings one of Christine Freundschuh-Pula's paintings to life — ambient simplex-noise brushwork displacement with cursor-driven distortion, rendered through a custom GLSL shader on a full-screen Three.js plane. Move your cursor to push the paint like it's still wet."
                    :tags="['Three.js', 'GLSL', 'WebGL', 'TypeScript']"
                    cta-text="Open Painting"
                    @select="selectedProject = 'painting'"
                >
                    <template #preview>
                        <div class="project-preview painting-preview">
                            <div class="preview-content">
                                <span class="painting-title">Paint that Breathes</span>
                                <span class="painting-subtitle">A living WebGL painting</span>
                            </div>
                        </div>
                    </template>
                </ProjectCard>
                <ProjectCard
                    href="https://github.com/melissapula/lessonforge"
                    title="LessonForge"
                    description="An agentic, spec-driven lesson generator for the Modern Classrooms self-paced, mastery-based instructional model. A LangGraph pipeline drafts a lesson, scores its own work against a rubric, and pauses for the teacher to approve, revise, or reject before anything is finalized."
                    :tags="['Python', 'LangGraph', 'Anthropic API', 'Pydantic']"
                    cta-text="View on GitHub"
                >
                    <template #preview>
                        <div class="project-preview lf-preview">
                            <div class="preview-content">
                                <span class="lf-title">LessonForge</span>
                                <span class="lf-subtitle">Human-in-the-loop lesson generation</span>
                            </div>
                        </div>
                    </template>
                </ProjectCard>
                <ProjectCard
                    href="https://www.npmjs.com/package/love-is-love-spinners"
                    title="love-is-love-spinners"
                    description="A framework-agnostic TypeScript package of 32+ LGBTQ+ pride-flag CSS loading spinners, distributed via npm with full type definitions. Zero dependencies — each spinner pulses a flag from a dot to full size while a counter-rotating text ring cycles through built-in or custom sayings."
                    :tags="['TypeScript', 'npm', 'CSS Animations']"
                    cta-text="View on npm"
                >
                    <template #preview>
                        <div class="project-preview spinner-preview">
                            <div ref="spinnerRef"></div>
                        </div>
                    </template>
                </ProjectCard>
                <ProjectCard
                    title="Blockly Sandbox"
                    description="An interactive block-based programming workspace built on Google's Blockly library. Drag blocks to compose logic, run the generated JavaScript live, and see console output in a side panel — with configurable block limits and badge rewards."
                    :tags="['Vue 3', 'Blockly', 'JavaScript']"
                    cta-text="Open Sandbox"
                    @select="selectedProject = 'blockly'"
                >
                    <template #preview>
                        <div class="project-preview blockly-preview">
                            <div class="preview-content">
                                <span class="blockly-title">Blockly Sandbox</span>
                                <span class="blockly-subtitle">Visual programming workspace</span>
                            </div>
                        </div>
                    </template>
                </ProjectCard>
                <ProjectCard
                    title="Fitness"
                    description="My weekly training split, how I structure workouts across chest, back, legs, delts, and arms, and the mindset that keeps me showing up six days a week."
                    cta-text="Read Blog"
                    @select="selectedProject = 'fitness'"
                >
                    <template #preview>
                        <div class="project-preview fitness-preview">
                            <div class="preview-content">
                                <span class="fitness-title">Fitness</span>
                                <span class="fitness-subtitle">Believe it. Achieve it.</span>
                            </div>
                        </div>
                    </template>
                </ProjectCard>
            </div>
        </mfp-container>
        <div
            v-show="selectedProject"
            :class="['project-view', selectedProject ? 'project-view--' + selectedProject : '']"
        >
            <mfp-button class="back-button" variant="secondary" @click="selectedProject = null">
                <i class="fas fa-arrow-left mr-sm" aria-hidden="true"></i>Back to Projects
            </mfp-button>
            <FitnessBlog v-if="selectedProject === 'fitness'" />
            <Blockly v-if="selectedProject === 'blockly'" />
            <BreathingPainting v-if="selectedProject === 'painting'" />
        </div>
    </div>
</template>

<script>
    import { createSpinner } from 'love-is-love-spinners';
    import FitnessBlog from './fitnessBlog.vue';
    import Blockly from './blockly.vue';
    import BreathingPainting from './breathingPainting.vue';
    import ProjectCard from '@/components/ProjectCard.vue';
    export default {
        name: 'Portfolio',
        components: {
            FitnessBlog,
            Blockly,
            BreathingPainting,
            ProjectCard
        },
        data() {
            return {
                spinner: null,
                validProjects: ['blockly', 'fitness', 'painting']
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
    .portfolio-page {
        background-color: #f0f2f5;
        min-height: calc(100vh - var(--site-nav-height, 56px));
        padding-top: var(--space-stack-xl);
        padding-bottom: var(--space-stack-xl);
    }
    .page-heading {
        color: var(--color-brand-primary, #1a2744);
        font-weight: bold;
        text-align: center;
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
    .fss-title {
        display: block;
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 24px;
        color: #3d2e1e;
        letter-spacing: 2px;
    }
    .fss-subtitle {
        display: block;
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 14px;
        color: #7a6a5a;
        margin-top: 8px;
        letter-spacing: 1px;
    }
    .painting-preview {
        background:
            linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.5)),
            url('/breathing-painting/horse-painting.jpg') center / cover no-repeat;
    }
    .painting-title {
        display: block;
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 24px;
        color: #fff;
        letter-spacing: 2px;
        text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
    }
    .painting-subtitle {
        display: block;
        font-size: 13px;
        color: rgba(255, 255, 255, 0.9);
        margin-top: 8px;
        letter-spacing: 0.5px;
        text-shadow: 0 1px 6px rgba(0, 0, 0, 0.6);
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
        padding-top: 88px;
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
    .project-view--painting {
        padding-top: 0;
        background-color: #000;
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

<style>
    /*
     * Grid layout for the Projects card grid.
     * Non-scoped because the rules need to target ProjectCard's component
     * root, which uses <component :is>; Vue's scoped-CSS hash propagation
     * isn't reliable in that case. The .portfolio-page parent class makes
     * these effectively local to this page.
     */
    .portfolio-page .cards-grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: 1fr;
        gap: var(--space-stack-lg);
    }
    .portfolio-page .cards-grid > * {
        min-width: 0;
    }
    @media (min-width: 768px) {
        .portfolio-page .cards-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (min-width: 1024px) {
        .portfolio-page .cards-grid {
            grid-template-columns: repeat(6, 1fr);
        }
        .portfolio-page .cards-grid > * {
            grid-column: span 2;
        }
        .portfolio-page .cards-grid > :nth-last-child(2):nth-child(3n + 1) {
            grid-column: 2 / span 2;
        }
        .portfolio-page .cards-grid > :nth-last-child(1):nth-child(3n + 1) {
            grid-column: 3 / span 2;
        }
    }
</style>
