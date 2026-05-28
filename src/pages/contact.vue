<template>
    <mfp-container size="sm" class="contact-page">
        <mfp-card class="contact-card" variant="elevated" padding="roomy">
            <h2 slot="header" class="contact-heading">Get In Touch</h2>
            <div class="contact-items">
                <div class="contact-item">
                    <i class="fas fa-envelope contact-icon" aria-hidden="true"></i>
                    <a href="mailto:melissa_m_24@yahoo.com">melissa_m_24@yahoo.com</a>
                </div>
                <div class="contact-item">
                    <i class="fab fa-github contact-icon" aria-hidden="true"></i>
                    <a href="https://github.com/melissapula" target="_blank" rel="noopener">GitHub</a>
                </div>
                <div class="contact-item">
                    <i class="fab fa-linkedin contact-icon" aria-hidden="true"></i>
                    <a href="https://www.linkedin.com/in/melissa-pula-833748172" target="_blank" rel="noopener"
                        >LinkedIn</a
                    >
                </div>
                <div class="contact-item">
                    <i class="fas fa-map-marker-alt contact-icon" aria-hidden="true"></i>
                    <span>Bemidji, MN</span>
                </div>
            </div>
        </mfp-card>
    </mfp-container>
</template>

<script>
    export default {
        name: 'Contact'
    };
</script>

<style scoped>
    .contact-page {
        background-color: #f0f2f5;
        min-height: calc(100vh - var(--site-nav-height, 56px));
        display: flex;
        align-items: center;
    }
    .contact-card {
        text-align: center;
    }
    .contact-heading {
        color: var(--color-brand-primary, #1a2744);
        font-weight: bold;
        margin: 0;
    }
    .contact-items {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }
    .contact-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 1.1rem;
        color: #333;
    }
    .contact-icon {
        width: 24px;
        text-align: center;
        color: #2980b9;
        font-size: 1.2rem;
    }
    .contact-item a {
        color: #2980b9;
        text-decoration: none;
    }
    .contact-item a:hover {
        text-decoration: underline;
    }
</style>
