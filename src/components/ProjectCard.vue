<template>
    <component
        :is="href ? 'a' : 'div'"
        :href="href || undefined"
        :target="href ? '_blank' : undefined"
        :rel="href ? 'noopener noreferrer' : undefined"
        :tabindex="href ? undefined : 0"
        :role="href ? undefined : 'button'"
        class="card-link"
        @click="onActivate"
        @keyup.enter="onActivate"
    >
        <div class="project-card">
            <slot name="preview"></slot>
            <div class="project-info">
                <h4>{{ title }}</h4>
                <p>{{ description }}</p>
                <div v-if="tags && tags.length" class="tech-tags mb-3">
                    <mfp-badge v-for="tag in tags" :key="tag">{{ tag }}</mfp-badge>
                </div>
                <mfp-button class="card-cta" variant="primary">{{ ctaText }}</mfp-button>
            </div>
        </div>
    </component>
</template>

<script>
    export default {
        name: 'ProjectCard',
        props: {
            title: { type: String, required: true },
            description: { type: String, default: '' },
            tags: { type: Array, default: () => [] },
            ctaText: { type: String, default: 'View' },
            href: { type: String, default: null }
        },
        emits: ['select'],
        methods: {
            onActivate() {
                if (!this.href) this.$emit('select');
            }
        }
    };
</script>

<style scoped>
    .card-link {
        text-decoration: none;
        color: inherit;
        display: block;
        height: 100%;
    }
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
    .project-card:focus,
    .card-link:hover .project-card,
    .card-link:focus .project-card {
        transform: translateY(-4px);
        box-shadow: 0 8px 28px rgba(0, 0, 0, 0.15);
        outline: none;
    }
    .project-info {
        padding: 1.5rem;
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    .project-info h4 {
        color: var(--color-brand-primary, #1a2744);
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
    .card-cta {
        align-self: flex-start;
        pointer-events: none;
    }
</style>
