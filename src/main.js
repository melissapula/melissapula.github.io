import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'highlight.js/styles/atom-one-dark.css';
import '@mfp-design-system/tokens/css';
import '@mfp-design-system/accordion';
import '@mfp-design-system/badge';
import '@mfp-design-system/button';
import '@mfp-design-system/card';
import '@mfp-design-system/footer';
import '@mfp-design-system/icon-button';
import '@mfp-design-system/input';
import '@mfp-design-system/nav';
import '@mfp-design-system/select';
import '@mfp-design-system/spinner';
import { initTheme } from './themeManager';
import App from './App.vue';

initTheme();
import router from './router';
import VueGtag from 'vue-gtag';

const app = createApp(App);

app.use(router);

app.use(
    VueGtag,
    {
        config: {
            id: 'G-ZP2LCLVZ2X',
            params: {
                send_page_view: false
            }
        }
    },
    router
);

app.mount('#app');
