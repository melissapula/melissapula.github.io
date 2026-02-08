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
        <input type="number" :value="maxBlocks"
          @input="$emit('update:maxBlocks', parseInt($event.target.value) || 20)"
          class="max-blocks-input" />
      </div>
      <button :class="['toggle-btn', badgeEnabled ? 'toggle-on' : 'toggle-off']"
        @click="$emit('update:badgeEnabled', !badgeEnabled)">
        Badge {{ badgeEnabled ? 'ON' : 'OFF' }}
      </button>
      <button class="control-btn clear-btn" @click="$emit('clear')">Clear</button>
      <button class="control-btn run-btn" @click="$emit('run')">▶ Run Code</button>
    </div>
  </header>
</template>

<script setup>
defineProps({
  blockCount: { type: Number, default: 0 },
  maxBlocks: { type: Number, default: 20 },
  badgeEnabled: { type: Boolean, default: true },
});
defineEmits(['update:maxBlocks', 'update:badgeEnabled', 'clear', 'run']);
</script>

<style scoped>
.app-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 24px; background: #1e293b; border-bottom: 1px solid #334155;
}
.header-left { display: flex; align-items: center; gap: 12px; }
.logo {
  width: 32px; height: 32px; border-radius: 8px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  display: flex; align-items: center; justify-content: center; font-size: 16px;
}
.title { font-size: 16px; font-weight: 700; color: #f1f5f9; letter-spacing: 0.5px; }
.subtitle { font-size: 11px; color: #64748b; margin-top: 1px; }
.header-controls { display: flex; align-items: center; gap: 12px; }
.max-blocks-control { display: flex; align-items: center; gap: 8px; }
.control-label {
  font-size: 11px; color: #94a3b8; font-weight: 500;
  text-transform: uppercase; letter-spacing: 1px;
}
.max-blocks-input {
  width: 60px; padding: 6px 8px; background: #0f172a;
  border: 1px solid #334155; border-radius: 6px; color: #e2e8f0;
  font-family: 'JetBrains Mono', monospace; font-size: 13px; text-align: center;
}
.max-blocks-input:focus { outline: none; border-color: #3b82f6; }
.toggle-btn {
  padding: 6px 14px; border-radius: 6px; font-family: 'DM Sans', sans-serif;
  font-size: 11px; font-weight: 600; cursor: pointer;
  letter-spacing: 0.5px; transition: all 0.2s; text-transform: uppercase;
}
.toggle-on { background: #1e40af; color: #93c5fd; border: 1px solid #2563eb; }
.toggle-off { background: #1e293b; color: #64748b; border: 1px solid #334155; }
.control-btn {
  padding: 8px 18px; border: none; border-radius: 6px;
  font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600;
  cursor: pointer; letter-spacing: 0.5px; transition: all 0.2s; text-transform: uppercase;
}
.control-btn:hover { transform: translateY(-1px); }
.clear-btn { background: #334155; color: #94a3b8; }
.clear-btn:hover { background: #475569; color: #e2e8f0; }
.run-btn { background: #059669; color: white; }
.run-btn:hover { background: #047857; }
@media (max-width: 900px) {
  .app-header { flex-direction: column; gap: 12px; padding: 12px 16px; }
  .header-controls { flex-wrap: wrap; justify-content: center; }
}
</style>
