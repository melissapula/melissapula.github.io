<template>
    <div class="painting-frame">
        <iframe
            src="/breathing-painting/index.html"
            title="Paint that Breathes — a living painting by Christine Freundschuh-Pula"
        ></iframe>
    </div>
</template>

<script>
    export default {
        name: 'BreathingPainting'
    };
</script>

<style scoped>
    .painting-frame {
        width: 100%;
        height: calc(100vh - var(--site-nav-height, 56px));
        background-color: #000;
    }
    .painting-frame iframe {
        display: block;
        width: 100%;
        height: 100%;
        border: 0;
    }
</style>
