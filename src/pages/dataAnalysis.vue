<template>
    <div>
        <mfp-container v-if="!selectedProject" size="2xl" class="swap-page">
            <h2 class="page-heading text-center mb-lg">Data Analysis</h2>
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
                <i class="fas fa-arrow-left mr-sm" aria-hidden="true"></i>Back to Data Analysis
            </mfp-button>
            <component :is="projectComponents[selectedProject]" />
        </div>
    </div>
</template>

<script>
    import WordCount from './wordcount.vue';
    import ImageClustering from './imageClustering.vue';
    import RandomForestClassifier from './randomForestClassifier.vue';
    import ProjectCard from '@/components/ProjectCard.vue';

    export default {
        name: 'DataAnalysis',
        components: {
            WordCount,
            ImageClustering,
            RandomForestClassifier,
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
                    wordcount: 'WordCount',
                    imageclustering: 'ImageClustering',
                    randomforestclassifier: 'RandomForestClassifier'
                },
                projects: [
                    {
                        key: 'wordcount',
                        title: 'Word Count',
                        subtitle: 'CSV text frequency analysis',
                        description:
                            'Loads a CSV corpus with pandas, tokenizes the text, and ranks words by frequency. Surfaces the top 20 results along with timing on the most common terms.',
                        tags: ['Python', 'Pandas', 'Text Analysis'],
                        previewClass: 'preview-indigo'
                    },
                    {
                        key: 'imageclustering',
                        title: 'Image Clustering',
                        subtitle: 'Unsupervised feature grouping',
                        description:
                            'Takes an unlabeled dataset of drone images and groups them into clusters based on extracted features. Uses PCA for dimensionality reduction with 2D and 3D scatterplots, then K-means tuned with elbow and silhouette plots.',
                        tags: ['Python', 'scikit-learn', 'PCA', 'K-means'],
                        previewClass: 'preview-cyan'
                    },
                    {
                        key: 'randomforestclassifier',
                        title: 'Random Forest Classifier',
                        subtitle: 'Predictive analysis at scale',
                        description:
                            'Ingests a 1TB dataset, cleans null values, groups and transforms features, then trains a Random Forest model and evaluates accuracy on a held-out test set.',
                        tags: ['Python', 'scikit-learn', 'Random Forest', 'Pandas'],
                        previewClass: 'preview-rose'
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
    .cards-grid {
        display: grid;
        gap: var(--space-stack-lg);
        grid-template-columns: 1fr;
        grid-auto-rows: 1fr;
    }
    @media (min-width: 768px) {
        .cards-grid {
            grid-template-columns: repeat(3, 1fr);
        }
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
    .preview-indigo {
        background: linear-gradient(135deg, #312e81 0%, #4f46e5 100%);
    }
    .preview-cyan {
        background: linear-gradient(135deg, #155e75 0%, #06b6d4 100%);
    }
    .preview-rose {
        background: linear-gradient(135deg, #881337 0%, #e11d48 100%);
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
