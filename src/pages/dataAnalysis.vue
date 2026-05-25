<template>
    <div>
        <div class="container-fluid mt-0 pt-0" v-if="!selectedProject">
            <div
                class="row justify-content-center pt-5"
                style="background-color: #f0f2f5; min-height: calc(100vh - 56px)"
            >
                <div class="col-lg-10 col-md-11">
                    <h2 class="text-center mb-4" style="color: #1a2744; font-weight: bold">Data Analysis</h2>
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
                                    <span
                                        class="btn btn-primary"
                                        style="background-color: #1a2744; border-color: #1a2744"
                                    >
                                        View Project
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="project-view">
            <button class="back-button" @click="selectedProject = null">
                <i class="fas fa-arrow-left me-2"></i>Back to Data Analysis
            </button>
            <component :is="projectComponents[selectedProject]" />
        </div>
    </div>
</template>

<script>
    import WordCount from './wordcount.vue';
    import ImageClustering from './imageClustering.vue';
    import RandomForestClassifier from './randomForestClassifier.vue';

    export default {
        name: 'DataAnalysis',
        components: {
            WordCount,
            ImageClustering,
            RandomForestClassifier
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
    .preview-indigo {
        background: linear-gradient(135deg, #312e81 0%, #4f46e5 100%);
    }
    .preview-cyan {
        background: linear-gradient(135deg, #155e75 0%, #06b6d4 100%);
    }
    .preview-rose {
        background: linear-gradient(135deg, #881337 0%, #e11d48 100%);
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
    .btn {
        align-self: flex-start;
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
        background-color: #1a2744;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        cursor: pointer;
        transition: background-color 0.15s ease;
    }
    .back-button:hover {
        background-color: #2c4068;
    }
</style>
