<template>
    <div>
        <mfp-container v-if="!selectedProject" size="2xl" class="swap-page">
            <h2 class="page-heading text-center mb-lg">Python Project</h2>
            <div class="cards-grid">
                <ProjectCard
                    v-for="project in projects"
                    :key="project.key"
                    :title="project.title"
                    :description="project.description"
                    :tags="project.tags"
                    cta-text="View Project"
                    @select="selectedProject = project.key"
                >
                    <template #preview>
                        <div class="project-preview" :class="project.previewClass">
                            <div class="preview-content">
                                <span class="preview-title">{{ project.title }}</span>
                                <span class="preview-subtitle">{{ project.subtitle }}</span>
                            </div>
                        </div>
                    </template>
                </ProjectCard>
            </div>
        </mfp-container>
        <div v-else class="project-view">
            <mfp-button class="back-button" variant="secondary" @click="selectedProject = null">
                <i class="fas fa-arrow-left mr-sm" aria-hidden="true"></i>Back to Python Project
            </mfp-button>
            <component :is="projectComponents[selectedProject]" />
        </div>
    </div>
</template>

<script>
    import Calculator from './calculator.vue';
    import Macbeth from './macbeth.vue';
    import ProjectCard from '@/components/ProjectCard.vue';
    import BullsCows from './bullsCows.vue';
    import Sticks from './sticks.vue';
    import Pig from './pig.vue';
    import Turtle from './turtle.vue';
    import Pygame from './pygame.vue';

    export default {
        name: 'PythonCode',
        components: {
            Calculator,
            Macbeth,
            BullsCows,
            Sticks,
            Pig,
            Turtle,
            Pygame,
            ProjectCard
        },
        computed: {
            selectedProject: {
                get() {
                    const q = this.$route.query.project;
                    return q && this.projectComponents[q] ? q : null;
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
        data() {
            return {
                projectComponents: {
                    calculator: 'Calculator',
                    macbeth: 'Macbeth',
                    bullsCows: 'BullsCows',
                    sticks: 'Sticks',
                    pig: 'Pig',
                    turtle: 'Turtle',
                    pygame: 'Pygame'
                },
                projects: [
                    {
                        key: 'calculator',
                        title: 'Calculator',
                        subtitle: 'Tkinter grid layout',
                        description:
                            'A four-function calculator built with Python and Tkinter, demonstrating grid-based widget layout and event handling.',
                        tags: ['Python', 'Tkinter', 'GUI'],
                        previewClass: 'preview-blue'
                    },
                    {
                        key: 'macbeth',
                        title: 'Macbeth Game',
                        subtitle: 'Text-based adventure',
                        description:
                            "A text-based adventure game set in the world of Shakespeare's Macbeth, with map navigation between locations.",
                        tags: ['Python', 'Game', 'CLI'],
                        previewClass: 'preview-burgundy'
                    },
                    {
                        key: 'bullsCows',
                        title: 'Bulls and Cows',
                        subtitle: 'Number-guessing game',
                        description:
                            "A classic deduction game — guess the computer's four-digit secret number using feedback on how many digits are correct and in the right position.",
                        tags: ['Python', 'Game', 'Logic'],
                        previewClass: 'preview-amber'
                    },
                    {
                        key: 'sticks',
                        title: 'Game of Sticks',
                        subtitle: 'Two-player strategy',
                        description:
                            'A two-player turn-based game starting with 10–100 sticks. Each player removes 1–3 per turn; whoever takes the last stick loses.',
                        tags: ['Python', 'Game', 'Strategy'],
                        previewClass: 'preview-green'
                    },
                    {
                        key: 'pig',
                        title: 'Game of Pig',
                        subtitle: 'Push-your-luck dice',
                        description:
                            "A push-your-luck dice game. Roll to rack up points, but rolling a 1 wipes the turn's score. First to the target total wins.",
                        tags: ['Python', 'Game', 'Dice'],
                        previewClass: 'preview-purple'
                    },
                    {
                        key: 'turtle',
                        title: 'Turtle Graphics',
                        subtitle: 'Generative drawing',
                        description:
                            "A generative graphics program built on Python's Turtle library, producing a layered geometric drawing from primitive turtle commands.",
                        tags: ['Python', 'Turtle', 'Graphics'],
                        previewClass: 'preview-teal'
                    },
                    {
                        key: 'pygame',
                        title: 'Pygame',
                        subtitle: 'Interactive game loop',
                        description:
                            'An interactive Pygame demo showing sprite rendering, the event loop, and frame-based animation patterns.',
                        tags: ['Python', 'Pygame', 'Game'],
                        previewClass: 'preview-orange'
                    }
                ]
            };
        }
    };
</script>

<style scoped>
    .swap-page {
        background-color: #f0f2f5;
        min-height: calc(100vh - var(--site-nav-height, 56px));
        padding-top: var(--space-stack-xl);
    }
    .page-heading {
        color: var(--color-brand-primary, #1a2744);
        font-weight: bold;
        text-align: center;
    }
    .project-preview {
        height: 160px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .preview-content {
        text-align: center;
        padding: 0 1rem;
    }
    .preview-title {
        display: block;
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 22px;
        color: #fff;
        letter-spacing: 2px;
    }
    .preview-subtitle {
        display: block;
        font-size: 13px;
        color: rgba(255, 255, 255, 0.85);
        margin-top: 8px;
        letter-spacing: 0.5px;
    }
    .preview-blue {
        background: linear-gradient(135deg, #1a2744 0%, #2c4068 100%);
    }
    .preview-burgundy {
        background: linear-gradient(135deg, #5b1a1a 0%, #8b2c2c 100%);
    }
    .preview-amber {
        background: linear-gradient(135deg, #92400e 0%, #d97706 100%);
    }
    .preview-green {
        background: linear-gradient(135deg, #065f46 0%, #10b981 100%);
    }
    .preview-purple {
        background: linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%);
    }
    .preview-teal {
        background: linear-gradient(135deg, #134e4a 0%, #14b8a6 100%);
    }
    .preview-orange {
        background: linear-gradient(135deg, #9a3412 0%, #ea580c 100%);
    }
    .project-view {
        background-color: #f0f2f5;
        padding-top: 56px;
    }
    .back-button {
        position: fixed;
        top: calc(var(--site-nav-height, 56px) + 16px);
        left: 16px;
        z-index: 100;
    }
    .back-button::part(button) {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
</style>

<style>
    /*
     * Grid layout for the Python Project card grid.
     * Non-scoped because the rules need to target ProjectCard's component
     * root, which uses <component :is>; Vue's scoped-CSS hash propagation
     * isn't reliable in that case. The .swap-page parent class is shared
     * with Data Analysis, but its 3 cards (1 full row) fall through the
     * orphan rules unaffected.
     */
    .swap-page .cards-grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: 1fr;
        gap: var(--space-stack-lg);
    }
    .swap-page .cards-grid > * {
        min-width: 0;
    }
    @media (min-width: 768px) {
        .swap-page .cards-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (min-width: 1024px) {
        .swap-page .cards-grid {
            grid-template-columns: repeat(6, 1fr);
        }
        .swap-page .cards-grid > * {
            grid-column: span 2;
        }
        .swap-page .cards-grid > :nth-last-child(2):nth-child(3n + 1) {
            grid-column: 2 / span 2;
        }
        .swap-page .cards-grid > :nth-last-child(1):nth-child(3n + 1) {
            grid-column: 3 / span 2;
        }
    }
</style>
