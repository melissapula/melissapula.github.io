<template>
    <MDBContainer class="mt-0 pt-0" fluid>
        <MDBRow
            style="background-color: #f0f2f5; min-height: calc(100vh - 56px)"
            class="justify-content-center pt-5"
        >
            <MDBCol md="10" lg="8">
                <h2 class="text-center mb-4" style="color: #1a2744; font-weight: bold">Portfolio</h2>
                <MDBRow class="justify-content-center">
                    <MDBCol md="6" lg="5" class="mb-4">
                        <div class="project-card">
                            <div class="project-preview">
                                <div class="preview-content">
                                    <span class="preview-title">Four Seasons Studio</span>
                                    <span class="preview-subtitle">Fine Art by Christine</span>
                                </div>
                            </div>
                            <div class="project-info">
                                <h4 style="color: #1a2744">Four Seasons Studio</h4>
                                <p>
                                    Portfolio and e-commerce site for a fine art studio, featuring original
                                    acrylic and oil landscape paintings. Built with a gallery-style design
                                    emphasizing elegant typography and a warm, neutral color palette.
                                </p>
                                <div class="tech-tags mb-3">
                                    <span class="tech-tag">Nuxt</span>
                                    <span class="tech-tag">Vue</span>
                                    <span class="tech-tag">Sanity CMS</span>
                                    <span class="tech-tag">CSS Grid</span>
                                </div>
                                <a
                                    href="https://fourseasonsstudio.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="btn btn-primary"
                                    style="background-color: #1a2744; border-color: #1a2744"
                                >
                                    Visit Site
                                </a>
                            </div>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
</template>

<script>
    import { MDBContainer, MDBRow, MDBCol } from 'mdb-vue-ui-kit';
    export default {
        name: 'Portfolio',
        components: {
            MDBContainer,
            MDBRow,
            MDBCol
        }
    };
</script>

<style scoped>
    .project-card {
        background-color: #fff;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        overflow: hidden;
    }
    .project-preview {
        background: linear-gradient(135deg, #f5f0eb 0%, #e8ddd4 100%);
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .preview-content {
        text-align: center;
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
    .project-info {
        padding: 1.5rem;
    }
    .project-info p {
        color: #555;
        line-height: 1.6;
    }
    .tech-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }
    .tech-tag {
        background-color: #e9ecef;
        color: #495057;
        padding: 4px 10px;
        border-radius: 4px;
        font-size: 12px;
    }
</style>
