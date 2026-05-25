<template>
    <header class="app-header">
        <div class="header-left">
            <div class="logo">🧩</div>
            <div>
                <h1 class="title">Blockly Visual Code Builder</h1>
                <p class="subtitle">
                    Drag blocks to write code · {{ blockCount }} block{{ blockCount !== 1 ? 's' : '' }} in workspace
                </p>
            </div>
        </div>
        <div class="header-controls">
            <div class="max-blocks-control">
                <label class="control-label">Max blocks</label>
                <input
                    type="number"
                    :value="maxBlocks"
                    @input="$emit('update:maxBlocks', parseInt($event.target.value) || 20)"
                    class="max-blocks-input"
                />
            </div>
            <mfp-button
                :variant="badgeEnabled ? 'primary' : 'ghost'"
                size="sm"
                @click="$emit('update:badgeEnabled', !badgeEnabled)"
            >
                Badge {{ badgeEnabled ? 'ON' : 'OFF' }}
            </mfp-button>
            <mfp-button variant="secondary" size="sm" @click="$emit('clear')">Clear</mfp-button>
            <mfp-button variant="primary" size="sm" @click="$emit('run')">▶ Run Code</mfp-button>
        </div>
    </header>
</template>

<script setup>
    defineProps({
        blockCount: { type: Number, default: 0 },
        maxBlocks: { type: Number, default: 20 },
        badgeEnabled: { type: Boolean, default: true }
    });
    defineEmits(['update:maxBlocks', 'update:badgeEnabled', 'clear', 'run']);
</script>

<style scoped>
    .app-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 24px;
        background: #1e293b;
        border-bottom: 1px solid #334155;
    }
    .header-left {
        display: flex;
        align-items: center;
        gap: 12px;
    }
    .logo {
        width: 32px;
        height: 32px;
        border-radius: 8px;
        background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
    }
    .title {
        font-size: 16px;
        font-weight: 700;
        color: #f1f5f9;
        letter-spacing: 0.5px;
    }
    .subtitle {
        font-size: 11px;
        color: #64748b;
        margin-top: 1px;
    }
    .header-controls {
        display: flex;
        align-items: center;
        gap: 12px;
    }
    .max-blocks-control {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .control-label {
        font-size: 11px;
        color: #94a3b8;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    .max-blocks-input {
        width: 60px;
        padding: 6px 8px;
        background: #0f172a;
        border: 1px solid #334155;
        border-radius: 6px;
        color: #e2e8f0;
        font-family: 'JetBrains Mono', monospace;
        font-size: 13px;
        text-align: center;
    }
    .max-blocks-input:focus {
        outline: none;
        border-color: #3b82f6;
    }
    @media (max-width: 900px) {
        .app-header {
            flex-direction: column;
            gap: 12px;
            padding: 12px 16px;
        }
        .header-controls {
            flex-wrap: wrap;
            justify-content: center;
        }
    }
</style>
