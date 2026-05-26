<template>
    <div class="container-fluid mt-0 pt-0">
        <div
            class="row justify-content-center align-items-center text-center"
            style="background-color: #f0f2f5; min-height: calc(100vh - var(--site-nav-height, 56px))"
        >
            <div class="col-md-8 col-lg-6">
                <h1 class="nf-code">404</h1>
                <h3 class="nf-title">Page not found</h3>
                <p class="lead mt-3" style="color: #555">
                    The page you're looking for doesn't exist or has moved. Let's get you back to somewhere useful.
                </p>
                <div class="mt-4 nf-actions">
                    <router-link to="/" custom v-slot="{ navigate }">
                        <mfp-button variant="primary" @click="navigate">Back to Home</mfp-button>
                    </router-link>
                    <router-link to="/portfolio" custom v-slot="{ navigate }">
                        <mfp-button variant="secondary" @click="navigate">See Projects</mfp-button>
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
        name: 'NotFound'
    };
</script>

<style scoped>
    .nf-code {
        color: var(--color-brand-primary, #1a2744);
        font-size: 6rem;
        font-weight: bold;
    }
    .nf-title {
        color: var(--color-brand-primary, #1a2744);
    }
    .nf-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        justify-content: center;
    }
</style>
