<template>
    <div class="code-panel">
        <div class="tabs">
            <button :class="['tab-btn', { active: activeTab === 'code' }]" @click="activeTab = 'code'">
                Generated Code
            </button>
            <button :class="['tab-btn', { active: activeTab === 'console' }]" @click="activeTab = 'console'">
                Console
                <span v-if="consoleOutput.length > 0" class="badge">{{ consoleOutput.length }}</span>
            </button>
        </div>
        <div class="panel-content">
            <div v-if="activeTab === 'code'">
                <pre v-if="code" class="code-block">{{ code }}</pre>
                <div v-else class="empty-state">
                    <p class="empty-icon">🧩</p>
                    <p class="empty-title">No blocks yet</p>
                    <p class="empty-hint">Drag blocks from the toolbox to see generated JavaScript</p>
                </div>
            </div>
            <div v-if="activeTab === 'console'">
                <div v-if="consoleOutput.length > 0" class="console-entries">
                    <div v-for="(entry, i) in consoleOutput" :key="i" :class="['console-entry', entry.type]">
                        {{ entry.text }}
                    </div>
                </div>
                <div v-else class="empty-state">
                    <p class="empty-icon">▶</p>
                    <p class="empty-title">No output yet</p>
                    <p class="empty-hint">Click "Run Code" to execute your blocks</p>
                </div>
            </div>
        </div>
        <div class="plugin-status">
            <div class="status-header">
                <div :class="['status-dot', { active: badgeEnabled }]" />
                <span class="status-label">WorkspaceBlockCountBadge Plugin</span>
            </div>
            <p class="status-text">
                <template v-if="badgeEnabled">
                    Active — tracking {{ blockCount }} blocks with a limit of {{ maxBlocks }}.
                    <span v-if="blockCount > maxBlocks"> ⚠️ Block limit exceeded!</span>
                </template>
                <template v-else>Disabled — toggle the badge to see live block counting.</template>
            </p>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    defineProps({
        code: { type: String, default: '' },
        consoleOutput: { type: Array, default: () => [] },
        blockCount: { type: Number, default: 0 },
        maxBlocks: { type: Number, default: 20 },
        badgeEnabled: { type: Boolean, default: true }
    });
    const activeTab = ref('code');
</script>

<style scoped>
    .code-panel {
        width: 420px;
        display: flex;
        flex-direction: column;
        border-left: 1px solid #334155;
        background: #1e293b;
    }
    .tabs {
        display: flex;
        border-bottom: 1px solid #334155;
    }
    .tab-btn {
        background: none;
        border: none;
        padding: 10px 20px;
        font-family: 'DM Sans', sans-serif;
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        letter-spacing: 0.5px;
        transition: all 0.2s;
        border-bottom: 2px solid transparent;
        color: #94a3b8;
    }
    .tab-btn:hover {
        color: #e2e8f0;
    }
    .tab-btn.active {
        color: #60a5fa;
        border-bottom-color: #60a5fa;
    }
    .badge {
        background: #059669;
        color: white;
        border-radius: 10px;
        padding: 1px 7px;
        font-size: 10px;
        margin-left: 6px;
    }
    .panel-content {
        flex: 1;
        overflow: auto;
        padding: 16px;
    }
    .code-block {
        font-family: 'JetBrains Mono', monospace;
        font-size: 13px;
        line-height: 1.7;
        color: #e2e8f0;
        white-space: pre-wrap;
        word-break: break-all;
        margin: 0;
    }
    .empty-state {
        text-align: center;
        padding: 60px 20px;
        color: #475569;
    }
    .empty-icon {
        font-size: 32px;
        margin-bottom: 12px;
    }
    .empty-title {
        font-size: 14px;
        font-weight: 500;
    }
    .empty-hint {
        font-size: 12px;
        margin-top: 4px;
    }
    .console-entries {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
    .console-entry {
        padding: 8px 12px;
        border-radius: 4px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 13px;
    }
    .console-entry.log {
        background: rgba(255, 255, 255, 0.03);
        border-left: 3px solid #059669;
        color: #e2e8f0;
    }
    .console-entry.error {
        background: rgba(239, 68, 68, 0.1);
        border-left: 3px solid #ef4444;
        color: #fca5a5;
    }
    .plugin-status {
        padding: 16px;
        border-top: 1px solid #334155;
        background: #0f172a;
    }
    .status-header {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
    }
    .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #64748b;
    }
    .status-dot.active {
        background: #22c55e;
    }
    .status-label {
        font-size: 11px;
        font-weight: 600;
        color: #94a3b8;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    .status-text {
        font-size: 11px;
        color: #64748b;
        line-height: 1.5;
    }
    @media (max-width: 900px) {
        .code-panel {
            width: 100%;
            max-height: 300px;
            border-left: none;
            border-top: 1px solid #334155;
        }
    }
</style>
