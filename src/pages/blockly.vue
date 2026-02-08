<template>
  <div class="blockly-layout">
    <BlocklyHeader
      :block-count="blockCount"
      :max-blocks="maxBlocks"
      :badge-enabled="badgeEnabled"
      @update:max-blocks="maxBlocks = $event"
      @update:badge-enabled="badgeEnabled = $event"
      @clear="handleClear"
      @run="runCode"
    />
    <div class="main-content">
      <BlocklyWorkspace
        ref="workspaceRef"
        :max-blocks="maxBlocks"
        :badge-enabled="badgeEnabled"
        @code-changed="generatedCode = $event"
        @block-count-changed="blockCount = $event"
      />
      <CodePanel
        :code="generatedCode"
        :console-output="consoleOutput"
        :block-count="blockCount"
        :max-blocks="maxBlocks"
        :badge-enabled="badgeEnabled"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BlocklyHeader from '@/components/BlocklyHeader.vue';
import BlocklyWorkspace from '@/components/BlocklyWorkspace.vue';
import CodePanel from '@/components/CodePanel.vue';

const workspaceRef = ref(null);
const generatedCode = ref('');
const blockCount = ref(0);
const maxBlocks = ref(20);
const badgeEnabled = ref(true);
const consoleOutput = ref([]);

function handleClear() {
  workspaceRef.value?.clearWorkspace();
  consoleOutput.value = [];
}

function runCode() {
  consoleOutput.value = [];
  const logs = [];
  const fakeConsole = {
    log: (...args) => {
      logs.push({ type: 'log', text: args.join(' '), time: Date.now() });
      consoleOutput.value = [...logs];
    },
  };
  try {
    const wrappedCode = `
      (async function() {
        const console = fakeConsole;
        ${generatedCode.value}
      })()
    `;
    const fn = new Function('fakeConsole', wrappedCode);
    fn(fakeConsole);
  } catch (err) {
    logs.push({ type: 'error', text: `Error: ${err.message}`, time: Date.now() });
    consoleOutput.value = [...logs];
  }
}
</script>

<style scoped>
.blockly-layout {
  width: 100%; height: 100vh; display: flex; flex-direction: column;
  background: #0f172a; font-family: 'DM Sans', sans-serif;
}
.main-content { flex: 1; display: flex; overflow: hidden; }
@media (max-width: 900px) { .main-content { flex-direction: column; } }
</style>
