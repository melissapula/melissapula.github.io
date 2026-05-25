import blueTheme from '@mfp-design-system/tokens/themes/blue?raw';
import warmTheme from '@mfp-design-system/tokens/themes/warm?raw';
import orangeTheme from '@mfp-design-system/tokens/themes/orange?raw';
import earthTheme from '@mfp-design-system/tokens/themes/earth?raw';
import portfolioTheme from '@mfp-design-system/tokens/themes/portfolio?raw';

const STORAGE_KEY = 'mfp-theme';
const STYLE_ID = 'mfp-active-theme';

export const THEMES = {
    blue: { label: 'Blue (default)', css: blueTheme },
    warm: { label: 'Warm', css: warmTheme },
    orange: { label: 'Orange', css: orangeTheme },
    earth: { label: 'Earth', css: earthTheme },
    portfolio: { label: 'Portfolio (navy)', css: portfolioTheme }
};

export const DEFAULT_THEME = 'portfolio';

export function getActiveTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
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
