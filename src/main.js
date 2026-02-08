import { createApp } from 'vue';
import 'mdb-vue-ui-kit/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App.vue';
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
