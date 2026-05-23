<template>
    <div class="container-fluid mt-0 pt-0">
        <div
            class="row justify-content-center align-items-center text-center"
            style="background-color: #f0f2f5; min-height: calc(100vh - 56px)"
        >
            <div class="col-md-8 col-lg-6">
                <h1 style="color: #1a2744; font-size: 6rem; font-weight: bold">404</h1>
                <h3 style="color: #1a2744">Page not found</h3>
                <p class="lead mt-3" style="color: #555">
                    The page you're looking for doesn't exist or has moved. Let's get you back to somewhere useful.
                </p>
                <div class="mt-4">
                    <router-link to="/" class="btn me-2 mb-2" style="background-color: #1a2744; color: white">
                        Back to Home
                    </router-link>
                    <router-link
                        to="/portfolio"
                        class="btn me-2 mb-2"
                        style="background-color: #fff; color: #1a2744; border: 2px solid #1a2744"
                    >
                        See Projects
                    </router-link>
                    <router-link
                        to="/contact"
                        class="btn mb-2"
                        style="background-color: #fff; color: #1a2744; border: 2px solid #1a2744"
                    >
                        Get In Touch
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
