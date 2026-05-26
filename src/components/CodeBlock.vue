<template>
    <pre class="code-block"><code ref="codeEl" :class="languageClass">{{ code }}</code></pre>
</template>

<script>
    import hljs from 'highlight.js/lib/core';
    import python from 'highlight.js/lib/languages/python';

    hljs.registerLanguage('python', python);

    export default {
        name: 'CodeBlock',
        props: {
            code: { type: String, required: true },
            language: { type: String, default: 'python' }
        },
        computed: {
            languageClass() {
                return `language-${this.language}`;
            }
        },
        mounted() {
            this.highlight();
        },
        watch: {
            code() {
                this.$nextTick(() => this.highlight());
            }
        },
        methods: {
            highlight() {
                const el = this.$refs.codeEl;
                if (!el) return;
                delete el.dataset.highlighted;
                hljs.highlightElement(el);
            }
        }
    };
</script>

<style scoped>
    .code-block {
        margin: 0;
        max-height: calc(100vh - var(--site-nav-height, 56px) - 1.5rem);
        overflow: auto;
        border-radius: 8px;
        background: #282c34;
    }
    .code-block code {
        display: block;
        padding: 1rem 1.25rem;
        font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
        font-size: 13px;
        line-height: 1.6;
        background: transparent !important;
    }
</style>
