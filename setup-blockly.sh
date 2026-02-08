#!/bin/bash
# ============================================================
# Blockly Visual Code Builder - File Generator
# Run this from inside your existing Nuxt project root
# (e.g., chrissys-website/)
#
# Usage: bash setup-blockly.sh
# ============================================================

echo "🧩 Setting up Blockly Visual Code Builder..."

# Create directory structure inside app/
mkdir -p app/plugins
mkdir -p app/blocks
mkdir -p app/config
mkdir -p app/pages

echo "📁 Created directories"

# ─── WorkspaceBlockCountBadge Plugin ─────────────────────────
cat > app/plugins/WorkspaceBlockCountBadge.js << 'ENDOFFILE'
/**
 * WorkspaceBlockCountBadge Plugin
 *
 * Adds a floating badge that shows the number of blocks in the workspace.
 * When the count exceeds maxBlocks, the badge turns red with a warning.
 *
 * Cleaned-up version from code review with fixes for:
 * - this-binding on callbacks (arrow function)
 * - badgeElement_ typo (corrected to badgeEl)
 * - innerHTML → textContent (XSS prevention)
 * - Global userSelect side effect removed
 * - Proper listener cleanup in dispose()
 * - enable()/disable() methods implemented
 * - Event filtering to only relevant events
 */

const BADGE_STYLES = {
  position: 'absolute',
  bottom: '12px',
  right: '12px',
  padding: '8px 14px',
  borderRadius: '999px',
  font: "600 13px 'DM Sans', sans-serif",
  background: '#1e293b',
  color: '#e2e8f0',
  zIndex: '9999',
  opacity: '0.9',
  userSelect: 'none',
  pointerEvents: 'none',
  transition: 'all 0.3s ease',
  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
};

const RELEVANT_EVENTS = new Set(['create', 'delete', 'move']);

export class WorkspaceBlockCountBadge {
  constructor(workspace, options = {}) {
    this.workspace = workspace;
    this.options = {
      maxBlocks: options.maxBlocks ?? Infinity,
      label: options.label ?? 'Blocks',
      debugShowBlockType: options.debugShowBlockType ?? false,
    };
    this.badgeEl = null;
    this.blockCount = 0;
    this.enabled = false;

    this.onWorkspaceChange = (event) => {
      if (!RELEVANT_EVENTS.has(event.type)) return;
      this.blockCount = this.workspace.getAllBlocks(false).length;
      let annotation;
      if (
        this.options.debugShowBlockType &&
        event.type === 'create' &&
        event.json?.type
      ) {
        annotation = event.json.type;
      }
      this.update(annotation);
      if (this._onCountChange) {
        this._onCountChange(this.blockCount);
      }
    };
  }

  onCountChange(callback) {
    this._onCountChange = callback;
  }

  init() {
    if (this.enabled) return;
    const parentSvg = this.workspace.getParentSvg();
    const container = parentSvg?.parentElement;
    if (!container) {
      console.warn('WorkspaceBlockCountBadge: could not find parent container.');
      return;
    }
    if (container.style.position === '') {
      container.style.position = 'relative';
    }
    this.badgeEl = document.createElement('div');
    Object.assign(this.badgeEl.style, BADGE_STYLES);
    container.appendChild(this.badgeEl);
    this.blockCount = this.workspace.getAllBlocks(false).length;
    this.update();
    this.workspace.addChangeListener(this.onWorkspaceChange);
    this.enabled = true;
  }

  dispose() {
    if (!this.enabled) return;
    this.workspace.removeChangeListener(this.onWorkspaceChange);
    this.badgeEl?.remove();
    this.badgeEl = null;
    this.enabled = false;
  }

  enable() {
    if (!this.enabled) this.init();
  }

  disable() {
    if (this.enabled) this.dispose();
  }

  getCount() {
    return this.blockCount;
  }

  update(annotation) {
    if (!this.badgeEl) return;
    const { maxBlocks, label } = this.options;
    const tooMany = Number.isFinite(maxBlocks) && this.blockCount > maxBlocks;
    let text = `${label}: ${this.blockCount}`;
    if (Number.isFinite(maxBlocks)) text += ` / ${maxBlocks}`;
    if (tooMany) text += ' ⚠️';
    if (annotation) text += ` (${annotation})`;
    this.badgeEl.textContent = text;
    this.badgeEl.style.background = tooMany ? '#dc2626' : '#1e293b';
    this.badgeEl.style.color = tooMany ? '#fff' : '#e2e8f0';
    this.badgeEl.style.transform = tooMany ? 'scale(1.05)' : 'scale(1)';
  }

  setMaxBlocks(newMax) {
    this.options.maxBlocks = newMax;
    this.blockCount = this.workspace.getAllBlocks(false).length;
    this.update();
  }
}
ENDOFFILE
echo "✅ WorkspaceBlockCountBadge.js"

# ─── Custom Blocks ───────────────────────────────────────────
cat > app/blocks/customBlocks.js << 'ENDOFFILE'
/**
 * Custom Blockly block definitions and their JavaScript code generators.
 */

export function defineCustomBlocks(Blockly) {
  Blockly.Blocks['print_message'] = {
    init() {
      this.appendValueInput('MESSAGE').setCheck('String').appendField('print');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
      this.setTooltip('Print a message to the console');
    },
  };

  Blockly.Blocks['wait_seconds'] = {
    init() {
      this.appendValueInput('SECONDS').setCheck('Number').appendField('wait');
      this.appendDummyInput().appendField('seconds');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
      this.setTooltip('Wait for a number of seconds');
    },
  };

  Blockly.Blocks['random_number'] = {
    init() {
      this.appendValueInput('MIN').setCheck('Number').appendField('random from');
      this.appendValueInput('MAX').setCheck('Number').appendField('to');
      this.setOutput(true, 'Number');
      this.setColour(230);
      this.setTooltip('Generate a random number between min and max');
    },
  };

  Blockly.Blocks['set_variable'] = {
    init() {
      this.appendValueInput('VALUE')
        .appendField('set')
        .appendField(new Blockly.FieldTextInput('myVar'), 'VAR')
        .appendField('to');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(330);
      this.setTooltip('Set a variable to a value');
    },
  };

  Blockly.Blocks['repeat_count'] = {
    init() {
      this.appendValueInput('TIMES').setCheck('Number').appendField('repeat');
      this.appendDummyInput().appendField('times');
      this.appendStatementInput('DO').appendField('do');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
      this.setTooltip('Repeat blocks a number of times');
    },
  };

  const generator = Blockly.JavaScript;
  if (generator.forBlock) {
    generator.forBlock['print_message'] = function (block, gen) {
      const msg = gen.valueToCode(block, 'MESSAGE', 0) || "''";
      return `console.log(${msg});\n`;
    };
    generator.forBlock['wait_seconds'] = function (block, gen) {
      const secs = gen.valueToCode(block, 'SECONDS', 0) || '1';
      return `await new Promise(r => setTimeout(r, ${secs} * 1000));\n`;
    };
    generator.forBlock['random_number'] = function (block, gen) {
      const min = gen.valueToCode(block, 'MIN', 0) || '0';
      const max = gen.valueToCode(block, 'MAX', 0) || '100';
      return [`Math.floor(Math.random() * (${max} - ${min} + 1)) + ${min}`, 0];
    };
    generator.forBlock['set_variable'] = function (block, gen) {
      const varName = block.getFieldValue('VAR');
      const value = gen.valueToCode(block, 'VALUE', 0) || '0';
      return `let ${varName} = ${value};\n`;
    };
    generator.forBlock['repeat_count'] = function (block, gen) {
      const times = gen.valueToCode(block, 'TIMES', 0) || '10';
      const branch = gen.statementToCode(block, 'DO');
      return `for (let i = 0; i < ${times}; i++) {\n${branch}}\n`;
    };
  }
}
ENDOFFILE
echo "✅ customBlocks.js"

# ─── Toolbox Config ──────────────────────────────────────────
cat > app/config/toolbox.js << 'ENDOFFILE'
export const toolbox = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category', name: 'Logic', colour: '#5C81A6',
      contents: [
        { kind: 'block', type: 'controls_if' },
        { kind: 'block', type: 'controls_ifelse' },
        { kind: 'block', type: 'logic_compare' },
        { kind: 'block', type: 'logic_operation' },
        { kind: 'block', type: 'logic_negate' },
        { kind: 'block', type: 'logic_boolean' },
      ],
    },
    {
      kind: 'category', name: 'Loops', colour: '#5CA65C',
      contents: [
        { kind: 'block', type: 'repeat_count' },
        { kind: 'block', type: 'controls_repeat_ext' },
        { kind: 'block', type: 'controls_whileUntil' },
      ],
    },
    {
      kind: 'category', name: 'Math', colour: '#5C68A6',
      contents: [
        { kind: 'block', type: 'math_number' },
        { kind: 'block', type: 'math_arithmetic' },
        { kind: 'block', type: 'random_number' },
        { kind: 'block', type: 'math_modulo' },
      ],
    },
    {
      kind: 'category', name: 'Text', colour: '#5CA68D',
      contents: [
        { kind: 'block', type: 'text' },
        { kind: 'block', type: 'text_join' },
        { kind: 'block', type: 'text_length' },
      ],
    },
    {
      kind: 'category', name: 'Actions', colour: '#A6745C',
      contents: [
        { kind: 'block', type: 'print_message' },
        { kind: 'block', type: 'wait_seconds' },
        { kind: 'block', type: 'set_variable' },
      ],
    },
  ],
};

export const starterBlocksXml = `
<xml>
  <block type="print_message" x="30" y="30">
    <value name="MESSAGE">
      <block type="text">
        <field name="TEXT">Hello from Blockly!</field>
      </block>
    </value>
    <next>
      <block type="repeat_count">
        <value name="TIMES">
          <block type="math_number">
            <field name="NUM">3</field>
          </block>
        </value>
        <statement name="DO">
          <block type="print_message">
            <value name="MESSAGE">
              <block type="text">
                <field name="TEXT">Looping...</field>
              </block>
            </value>
          </block>
        </statement>
      </block>
    </next>
  </block>
</xml>
`;
ENDOFFILE
echo "✅ toolbox.js"

# ─── BlocklyWorkspace Component ──────────────────────────────
cat > app/components/BlocklyWorkspace.vue << 'ENDOFFILE'
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
import { WorkspaceBlockCountBadge } from '~/plugins/WorkspaceBlockCountBadge';
import { defineCustomBlocks } from '~/blocks/customBlocks';
import { toolbox, starterBlocksXml } from '~/config/toolbox';

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
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

const BLOCKLY_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/blockly/11.2.1';

async function initBlockly() {
  try {
    await loadScript(`${BLOCKLY_CDN}/blockly_compressed.min.js`);
    await loadScript(`${BLOCKLY_CDN}/blocks_compressed.min.js`);
    await loadScript(`${BLOCKLY_CDN}/javascript_compressed.min.js`);
    await loadScript(`${BLOCKLY_CDN}/msg/en.min.js`);
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
        debugShowBlockType: true,
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
ENDOFFILE
echo "✅ BlocklyWorkspace.vue"

# ─── CodePanel Component ─────────────────────────────────────
cat > app/components/CodePanel.vue << 'ENDOFFILE'
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
  badgeEnabled: { type: Boolean, default: true },
});
const activeTab = ref('code');
</script>

<style scoped>
.code-panel {
  width: 420px; display: flex; flex-direction: column;
  border-left: 1px solid #334155; background: #1e293b;
}
.tabs { display: flex; border-bottom: 1px solid #334155; }
.tab-btn {
  background: none; border: none; padding: 10px 20px;
  font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500;
  cursor: pointer; letter-spacing: 0.5px; transition: all 0.2s;
  border-bottom: 2px solid transparent; color: #94a3b8;
}
.tab-btn:hover { color: #e2e8f0; }
.tab-btn.active { color: #60a5fa; border-bottom-color: #60a5fa; }
.badge {
  background: #059669; color: white; border-radius: 10px;
  padding: 1px 7px; font-size: 10px; margin-left: 6px;
}
.panel-content { flex: 1; overflow: auto; padding: 16px; }
.code-block {
  font-family: 'JetBrains Mono', monospace; font-size: 13px;
  line-height: 1.7; color: #e2e8f0; white-space: pre-wrap;
  word-break: break-all; margin: 0;
}
.empty-state { text-align: center; padding: 60px 20px; color: #475569; }
.empty-icon { font-size: 32px; margin-bottom: 12px; }
.empty-title { font-size: 14px; font-weight: 500; }
.empty-hint { font-size: 12px; margin-top: 4px; }
.console-entries { display: flex; flex-direction: column; gap: 4px; }
.console-entry {
  padding: 8px 12px; border-radius: 4px;
  font-family: 'JetBrains Mono', monospace; font-size: 13px;
}
.console-entry.log {
  background: rgba(255,255,255,0.03); border-left: 3px solid #059669; color: #e2e8f0;
}
.console-entry.error {
  background: rgba(239,68,68,0.1); border-left: 3px solid #ef4444; color: #fca5a5;
}
.plugin-status { padding: 16px; border-top: 1px solid #334155; background: #0f172a; }
.status-header { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
.status-dot { width: 8px; height: 8px; border-radius: 50%; background: #64748b; }
.status-dot.active { background: #22c55e; }
.status-label {
  font-size: 11px; font-weight: 600; color: #94a3b8;
  text-transform: uppercase; letter-spacing: 1px;
}
.status-text { font-size: 11px; color: #64748b; line-height: 1.5; }
@media (max-width: 900px) {
  .code-panel { width: 100%; max-height: 300px; border-left: none; border-top: 1px solid #334155; }
}
</style>
ENDOFFILE
echo "✅ CodePanel.vue"

# ─── BlocklyHeader Component ─────────────────────────────────
cat > app/components/BlocklyHeader.vue << 'ENDOFFILE'
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
ENDOFFILE
echo "✅ BlocklyHeader.vue"

# ─── Blockly Page ────────────────────────────────────────────
cat > app/pages/blockly.vue << 'ENDOFFILE'
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
ENDOFFILE
echo "✅ blockly.vue page"

echo ""
echo "🎉 Done! All Blockly files created."
echo ""
echo "Next steps:"
echo "  1. Add this to your nuxt.config.ts under defineNuxtConfig({}):"
echo "     routeRules: { '/blockly': { ssr: false } },"
echo ""
echo "  2. Add the font to your nuxt.config.ts head.link array:"
echo "     { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap' }"
echo ""
echo "  3. Run: npm run dev"
echo "  4. Visit: http://localhost:3000/blockly"
