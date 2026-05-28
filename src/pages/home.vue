<template>
    <mfp-container size="xl" class="home-page">
        <div class="hero-grid">
            <div class="hero-image text-center">
                <img
                    src="../assets/Family.jpeg"
                    class="img-fluid rounded shadow"
                    style="max-height: calc(100vh - 120px); object-fit: contain"
                    alt="Melissa with her wife and four kids"
                />
            </div>
            <div class="hero-text">
                <h1 class="hero-name">Melissa Freundschuh-Pula</h1>
                <h4 class="hero-title mt-sm">Full-Stack Software Engineer</h4>
                <p class="hero-intro mt-md" style="color: #2c3e50">
                    Six-plus years building enterprise web apps by day and live products on the side. Wife, mom of four,
                    Marine Corps veteran, and a believer that the best software is shipped, not just shipped on paper.
                </p>
                <div class="mt-lg hero-actions">
                    <router-link to="/portfolio" custom v-slot="{ navigate }">
                        <mfp-button variant="primary" @click="navigate">See Projects</mfp-button>
                    </router-link>
                    <router-link to="/resume" custom v-slot="{ navigate }">
                        <mfp-button variant="secondary" @click="navigate">Resume</mfp-button>
                    </router-link>
                    <router-link to="/contact" custom v-slot="{ navigate }">
                        <mfp-button variant="secondary" @click="navigate">Get In Touch</mfp-button>
                    </router-link>
                </div>
            </div>
        </div>
    </mfp-container>
</template>

<script>
    export default {
        name: 'Home'
    };
</script>

<style scoped>
    .home-page {
        background-color: #f0f2f5;
        min-height: calc(100vh - var(--site-nav-height, 56px));
        display: flex;
        align-items: center;
        overflow: hidden;
    }
    .hero-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--space-stack-lg);
        align-items: center;
        width: 100%;
    }
    @media (min-width: 768px) {
        .hero-grid {
            grid-template-columns: 1fr 1fr;
            gap: var(--space-stack-xl);
        }
    }
    .hero-name {
        font-size: 2.5rem;
        font-weight: bold;
        line-height: 1.1;
        color: var(--color-brand-primary, #1a2744);
    }
    .hero-title {
        font-size: 1.25rem;
        font-weight: 500;
        letter-spacing: 1px;
        color: var(--color-brand-primary, #1a2744);
    }
    .hero-intro {
        font-size: 1.05rem;
        line-height: 1.6;
    }
    .hero-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
    @media (max-width: 767px) {
        .hero-name {
            font-size: 2rem;
            text-align: center;
        }
        .hero-title {
            text-align: center;
        }
        .hero-intro {
            text-align: center;
        }
        .hero-actions {
            justify-content: center;
        }
    }
</style>
