<template>
    <div class="h-100 m-0 p-0">
        <nav class="navbar navbar-expand-lg navbar-dark sticky-top" style="background-color: #1a2744">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/">Melissa Freundschuh-Pula</router-link>
                <button
                    class="navbar-toggler"
                    type="button"
                    @click="collapse = !collapse"
                    aria-label="Toggle navigation"
                >
                    <i class="fas fa-bars" style="color: white; font-size: 1.25rem"></i>
                </button>
                <div class="collapse navbar-collapse" :class="{ show: collapse }">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link" @click="closeAll">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/about" class="nav-link" @click="closeAll">About</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/resume" class="nav-link" @click="closeAll">Resume</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/portfolio" class="nav-link" @click="closeAll">Projects</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/python" class="nav-link" @click="closeAll">Python</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/data" class="nav-link" @click="closeAll">Data Analysis</router-link>
                        </li>
                    </ul>
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <router-link to="/contact" class="nav-link" @click="closeAll">Contact</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <router-view v-slot="{ Component }">
            <Transition name="fade" mode="out-in">
                <Suspense>
                    <component :is="Component" />
                    <template #fallback>
                        <div class="route-loading">
                            <mfp-spinner size="lg" label="Loading page"></mfp-spinner>
                        </div>
                    </template>
                </Suspense>
            </Transition>
        </router-view>
        <footer class="site-footer">
            <div class="container-fluid d-flex flex-wrap justify-content-between align-items-center px-4">
                <span class="footer-copy">&copy; {{ currentYear }} Melissa Freundschuh-Pula</span>
                <div class="footer-links">
                    <a
                        href="https://github.com/melissapula"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <i class="fab fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/melissa-pula-833748172"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="mailto:melissa_m_24@yahoo.com" aria-label="Email">
                        <i class="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                collapse: false,
                currentYear: new Date().getFullYear()
            };
        },
        methods: {
            closeAll() {
                this.collapse = false;
            }
        }
    };
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

    html,
    body {
        margin: 0;
        padding: 0;
        min-height: 100vh;
        height: 100%;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 14px;
        line-height: 1.42857143;
    }
    .white-text {
        color: white !important;
    }
    .navbar-toggler {
        border-color: rgba(255, 255, 255, 0.5);
    }
    .site-footer {
        background-color: #1a2744;
        color: rgba(255, 255, 255, 0.85);
        padding: 14px 0;
        font-size: 13px;
    }
    .site-footer .footer-copy {
        letter-spacing: 0.3px;
    }
    .site-footer .footer-links a {
        color: rgba(255, 255, 255, 0.85);
        margin-left: 16px;
        font-size: 18px;
        transition: color 0.15s ease;
    }
    .site-footer .footer-links a:hover {
        color: #fff;
    }

    /* Route fade transition */
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.2s ease;
    }
    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

    /* Loading state for lazy route chunks */
    .route-loading {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: calc(100vh - 56px);
        background-color: #f0f2f5;
        color: #1a2744;
    }

    /* Print styles — hide chrome, drop backgrounds */
    @media print {
        .navbar,
        .site-footer,
        .back-button {
            display: none !important;
        }
        body {
            background: white !important;
            color: black !important;
        }
        .fade-enter-active,
        .fade-leave-active {
            transition: none !important;
        }
        a {
            color: black !important;
            text-decoration: none !important;
        }
    }
</style>
