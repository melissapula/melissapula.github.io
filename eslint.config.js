import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
    {
        ignores: ['docs/**', 'public/**']
    },
    ...pluginVue.configs['flat/essential'],
    js.configs.recommended,
    prettier,
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node
            }
        },
        rules: {
            'vue/multi-word-component-names': 'off',
            'vue/no-deprecated-slot-attribute': 'off'
        }
    }
];
