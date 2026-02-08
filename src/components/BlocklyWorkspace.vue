<template>
  <div class="workspace-container" ref="container">
    <div v-if="loadError" class="workspace-overlay error">
      <span class="overlay-icon">⚠️</span>
      <span>{{ loadError }}</span>
    </div>
    <div v-else-if="!loaded" class="workspace-overlay loading">
      <div class="spinner" />
      <span>Loading Blockly...</span>
    </div>
    <div ref="blocklyDiv" class="blockly-div" />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { WorkspaceBlockCountBadge } from '@/blockly/WorkspaceBlockCountBadge';
import { defineCustomBlocks } from '@/blockly/customBlocks';
import { toolbox, starterBlocksXml } from '@/blockly/toolbox';

const props = defineProps({
  maxBlocks: { type: Number, default: 20 },
  badgeEnabled: { type: Boolean, default: true },
});

const emit = defineEmits(['code-changed', 'block-count-changed']);

const blocklyDiv = ref(null);
const container = ref(null);
const loaded = ref(false);
const loadError = ref(null);

let workspace = null;
let badge = null;

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.head.appendChild(script);
  });
}

const BLOCKLY_CDN = 'https://unpkg.com/blockly@11.2.1';

async function initBlockly() {
  try {
    await loadScript(`${BLOCKLY_CDN}/blockly_compressed.js`);
    await loadScript(`${BLOCKLY_CDN}/blocks_compressed.js`);
    await loadScript(`${BLOCKLY_CDN}/javascript_compressed.js`);
    await loadScript(`${BLOCKLY_CDN}/msg/en.js`);
    await new Promise((r) => setTimeout(r, 200));

    const Blockly = window.Blockly;
    if (!Blockly) {
      loadError.value = 'Blockly failed to load';
      return;
    }

    defineCustomBlocks(Blockly);

    if (blocklyDiv.value) {
      workspace = Blockly.inject(blocklyDiv.value, {
        toolbox,
        grid: { spacing: 20, length: 3, colour: '#e2e8f0', snap: true },
        zoom: {
          controls: true, wheel: true, startScale: 1.0,
          maxScale: 3, minScale: 0.3, scaleSpeed: 1.2,
        },
        trashcan: true,
        renderer: 'zelos',
        theme: Blockly.Theme.defineTheme('modern', {
          base: Blockly.Themes.Classic,
          fontStyle: { family: "'DM Sans', sans-serif", size: 12 },
          componentStyles: {
            workspaceBackgroundColour: '#f8fafc',
            toolboxBackgroundColour: '#1e293b',
            toolboxForegroundColour: '#e2e8f0',
            flyoutBackgroundColour: '#334155',
            flyoutForegroundColour: '#e2e8f0',
            flyoutOpacity: 0.95,
            scrollbarColour: '#64748b',
            scrollbarOpacity: 0.6,
          },
        }),
      });

      badge = new WorkspaceBlockCountBadge(workspace, {
        maxBlocks: props.maxBlocks,
        label: 'Blocks',
      });
      badge.init();
      badge.onCountChange((count) => {
        emit('block-count-changed', count);
      });

      workspace.addChangeListener(() => {
        try {
          const code = Blockly.JavaScript.workspaceToCode(workspace);
          emit('code-changed', code);
          emit('block-count-changed', workspace.getAllBlocks(false).length);
        } catch (e) {}
      });

      const dom = Blockly.utils.xml.textToDom(starterBlocksXml);
      Blockly.Xml.domToWorkspace(dom, workspace);
      loaded.value = true;
    }
  } catch (err) {
    loadError.value = `Failed to load Blockly: ${err.message}`;
  }
}

function clearWorkspace() {
  if (workspace) {
    workspace.clear();
    emit('code-changed', '');
    emit('block-count-changed', 0);
  }
}

watch(() => props.maxBlocks, (newMax) => { if (badge) badge.setMaxBlocks(newMax); });
watch(() => props.badgeEnabled, (enabled) => {
  if (badge) { if (enabled) badge.enable(); else badge.disable(); }
});

defineExpose({ clearWorkspace });
onMounted(() => { initBlockly(); });
onBeforeUnmount(() => {
  if (badge) badge.dispose();
  if (workspace) workspace.dispose();
  workspace = null;
  badge = null;
});
</script>

<style scoped>
.workspace-container { flex: 1; position: relative; overflow: hidden; }
.blockly-div { width: 100%; height: 100%; }
.workspace-overlay {
  position: absolute; inset: 0; display: flex; align-items: center;
  justify-content: center; flex-direction: column; gap: 8px;
  background: #0f172a; z-index: 10;
}
.workspace-overlay.loading { color: #64748b; }
.workspace-overlay.loading span { font-size: 13px; }
.workspace-overlay.error { color: #ef4444; }
.overlay-icon { font-size: 24px; }
.spinner {
  width: 24px; height: 24px; border: 3px solid #334155;
  border-top-color: #3b82f6; border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
</style>
