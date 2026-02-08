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
