module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es2022: true
    },
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'prettier'],
    rules: {
        'vue/multi-word-component-names': 'off'
    }
};
