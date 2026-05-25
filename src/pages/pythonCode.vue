<template>
    <div>
        <div class="container-fluid mt-0 pt-0" v-if="!selectedProject">
            <div
                class="row justify-content-center pt-5"
                style="background-color: #f0f2f5; min-height: calc(100vh - var(--site-nav-height, 56px))"
            >
                <div class="col-lg-10 col-md-11">
                    <h2 class="text-center mb-4" style="color: #1a2744; font-weight: bold">Python Project</h2>
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6 mb-4" v-for="project in projects" :key="project.key">
                            <div
                                class="project-card"
                                @click="selectedProject = project.key"
                                tabindex="0"
                                role="button"
                                @keyup.enter="selectedProject = project.key"
                            >
                                <div class="project-preview" :class="project.previewClass">
                                    <div class="preview-content">
                                        <span class="preview-title">{{ project.title }}</span>
                                        <span class="preview-subtitle">{{ project.subtitle }}</span>
                                    </div>
                                </div>
                                <div class="project-info">
                                    <h4 style="color: #1a2744">{{ project.title }}</h4>
                                    <p>{{ project.description }}</p>
                                    <div class="tech-tags mb-3">
                                        <mfp-badge v-for="tag in project.tags" :key="tag">{{ tag }}</mfp-badge>
                                    </div>
                                    <mfp-button class="card-cta" variant="primary">View Project</mfp-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="project-view">
            <mfp-button class="back-button" variant="secondary" @click="selectedProject = null">
                <i class="fas fa-arrow-left me-2"></i>Back to Python Project
            </mfp-button>
            <component :is="projectComponents[selectedProject]" />
        </div>
    </div>
</template>

<script>
    import Calculator from './calculator.vue';
    import Macbeth from './macbeth.vue';
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
            Pygame
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
    .project-card:focus {
        transform: translateY(-4px);
        box-shadow: 0 8px 28px rgba(0, 0, 0, 0.15);
        outline: none;
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
    .project-view {
        background-color: #f0f2f5;
        padding-top: 56px;
    }
    .back-button {
        position: fixed;
        top: 72px;
        left: 16px;
        z-index: 1000;
    }
    .back-button::part(button) {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
</style>
