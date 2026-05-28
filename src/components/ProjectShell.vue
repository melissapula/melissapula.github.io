<template>
    <mfp-container size="full" class="project-shell">
        <div class="project-split" :class="centerSummary ? 'project-split--centered' : null">
            <div class="code-pane">
                <slot name="code" />
            </div>
            <div class="summary-pane flex flex-col items-center pb-lg">
                <slot name="summary" />
            </div>
        </div>
    </mfp-container>
</template>

<script>
    export default {
        name: 'ProjectShell',
        props: {
            centerSummary: { type: Boolean, default: false }
        }
    };
</script>

<style scoped>
    .project-shell {
        background-color: #f0f2f5;
        padding-top: var(--space-stack-lg);
        min-height: calc(100vh - var(--site-nav-height, 56px));
    }
    .project-split {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--space-stack-md);
        height: calc(100vh - var(--site-nav-height, 56px));
    }
    @media (min-width: 1024px) {
        .project-split {
            grid-template-columns: 7fr 5fr;
        }
    }
    .summary-pane {
        overflow-y: auto;
        height: calc(100vh - var(--site-nav-height, 56px) - 1.5rem);
    }
    .project-split--centered .summary-pane {
        justify-content: center;
    }
</style>
