<template>
    <div class="container-fluid mt-0 pt-0">
        <div
            class="row align-items-center justify-content-center"
            style="min-height: calc(100vh - var(--site-nav-height, 56px)); background-color: #f8f9fa; overflow: hidden"
        >
            <div class="col-12 col-md-6 col-lg-5 text-center">
                <img
                    src="../assets/Family.jpeg"
                    class="img-fluid rounded shadow"
                    style="max-height: calc(100vh - 120px); object-fit: contain"
                    alt="Melissa with her wife and four kids"
                />
            </div>
            <div class="col-12 col-md-6 col-lg-5 ps-md-5 mt-4 mt-md-0">
                <h1 class="hero-name" style="color: #1a2744">Melissa Freundschuh-Pula</h1>
                <h4 class="hero-title mt-2" style="color: #1a2744">Full-Stack Software Engineer</h4>
                <p class="hero-intro mt-3" style="color: #2c3e50">
                    Six-plus years building enterprise web apps by day and live products on the side. Wife, mom of four,
                    Marine Corps veteran, and a believer that the best software is shipped, not just shipped on paper.
                </p>
                <div class="mt-4 hero-actions">
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
    </div>
</template>

<script>
    export default {
        name: 'Home'
    };
</script>

<style scoped>
    .hero-name {
        font-size: 2.5rem;
        font-weight: bold;
        line-height: 1.1;
    }
    .hero-title {
        font-size: 1.25rem;
        font-weight: 500;
        letter-spacing: 1px;
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
