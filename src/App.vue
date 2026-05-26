<template>
    <div class="h-100 m-0 p-0" :class="{ 'route-resume': $route.path === '/resume' }">
        <mfp-nav-bar ref="navBar" sticky variant="brand">
            <router-link slot="brand" to="/" class="brand-link">Melissa Freundschuh-Pula</router-link>

            <mfp-nav-item
                v-for="link in navLinks"
                :key="link.to"
                :active="$route.path === link.to"
                @click="go(link.to)"
            >
                {{ link.label }}
            </mfp-nav-item>

            <div slot="actions" class="navbar-actions">
                <mfp-nav-item :active="$route.path === '/contact'" @click="go('/contact')">Contact</mfp-nav-item>
                <label class="theme-group">
                    <span class="theme-label">Theme:</span>
                    <mfp-select
                        class="theme-switcher"
                        size="sm"
                        aria-label="Theme"
                        :value="activeTheme"
                        @change="onThemeChange"
                    >
                        <option v-for="(t, key) in themes" :key="key" :value="key">{{ t.label }}</option>
                    </mfp-select>
                </label>
            </div>
        </mfp-nav-bar>
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
        <mfp-footer variant="brand">
            <span class="footer-copy">&copy; {{ currentYear }} Melissa Freundschuh-Pula</span>
            <div class="footer-links">
                <a href="https://github.com/melissapula" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <i class="fab fa-github" aria-hidden="true"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/melissa-pula-833748172"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <i class="fab fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="mailto:melissa_m_24@yahoo.com" aria-label="Email">
                    <i class="fas fa-envelope" aria-hidden="true"></i>
                </a>
            </div>
        </mfp-footer>
    </div>
</template>

<script>
    import { THEMES, getActiveTheme, setTheme } from './themeManager';

    export default {
        name: 'App',
        data() {
            return {
                currentYear: new Date().getFullYear(),
                themes: THEMES,
                activeTheme: getActiveTheme(),
                navLinks: [
                    { to: '/', label: 'Home' },
                    { to: '/about', label: 'About' },
                    { to: '/resume', label: 'Resume' },
                    { to: '/portfolio', label: 'Projects' },
                    { to: '/python', label: 'Python' },
                    { to: '/data', label: 'Data Analysis' }
                ]
            };
        },
        methods: {
            go(path) {
                if (this.$route.path !== path) this.$router.push(path);
            },
            onThemeChange(event) {
                const value = event.detail?.value;
                if (value) {
                    setTheme(value);
                    this.activeTheme = value;
                }
            },
            syncNavHeight() {
                const h = this.$refs.navBar?.offsetHeight;
                if (h) document.documentElement.style.setProperty('--site-nav-height', `${h}px`);
            }
        },
        mounted() {
            this.syncNavHeight();
            this._navResizeObserver = new ResizeObserver(() => this.syncNavHeight());
            this._navResizeObserver.observe(this.$refs.navBar);
        },
        beforeUnmount() {
            this._navResizeObserver?.disconnect();
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
        background-color: #f0f2f5;
    }
    .white-text {
        color: white !important;
    }
    .brand-link {
        color: inherit;
        text-decoration: none;
        font-weight: 600;
    }
    .navbar-actions {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
    .theme-group {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin: 0;
    }
    .theme-label {
        font-size: 0.875rem;
        color: inherit;
        opacity: 0.85;
        white-space: nowrap;
    }
    .theme-switcher {
        min-width: 9rem;
    }
    mfp-footer {
        margin-top: 2rem;
    }
    .route-resume mfp-footer {
        margin-top: 0;
    }
    .footer-copy {
        letter-spacing: 0.3px;
        font-size: 13px;
    }
    .footer-links a {
        color: inherit;
        margin-left: 16px;
        font-size: 18px;
        opacity: 0.85;
        transition: opacity 0.15s ease;
    }
    .footer-links a:hover {
        opacity: 1;
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
        min-height: calc(100vh - var(--site-nav-height, 56px));
        background-color: #f0f2f5;
        color: #1a2744;
    }

    /* Print styles — hide chrome, drop backgrounds */
    @media print {
        mfp-nav-bar,
        mfp-footer,
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
