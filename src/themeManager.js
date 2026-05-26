import blueTheme from '@mfp-design-system/tokens/themes/blue?raw';
import emeraldTheme from '@mfp-design-system/tokens/themes/emerald?raw';
import navyTheme from '@mfp-design-system/tokens/themes/navy?raw';
import orangeTheme from '@mfp-design-system/tokens/themes/orange?raw';
import sandTheme from '@mfp-design-system/tokens/themes/sand?raw';
import terracottaTheme from '@mfp-design-system/tokens/themes/terracotta?raw';

const STORAGE_KEY = 'mfp-theme';
const STYLE_ID = 'mfp-active-theme';

export const THEMES = {
    blue: { label: 'Blue', css: blueTheme },
    emerald: { label: 'Emerald', css: emeraldTheme },
    orange: { label: 'Orange', css: orangeTheme },
    sand: { label: 'Sand', css: sandTheme },
    terracotta: { label: 'Terracotta', css: terracottaTheme },
    navy: { label: 'Navy', css: navyTheme }
};

export const DEFAULT_THEME = 'navy';

const RENAMED = { portfolio: 'navy', warm: 'terracotta', earth: 'sand' };

export function getActiveTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && RENAMED[saved]) return RENAMED[saved];
    return saved && saved in THEMES ? saved : DEFAULT_THEME;
}

export function setTheme(name) {
    if (!(name in THEMES)) return;
    let styleEl = document.getElementById(STYLE_ID);
    if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = STYLE_ID;
        document.head.appendChild(styleEl);
    }
    styleEl.textContent = THEMES[name].css;
    localStorage.setItem(STORAGE_KEY, name);
}

export function initTheme() {
    setTheme(getActiveTheme());
}
