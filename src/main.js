import * as mdbvue from "mdbvue";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/lib/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import VueGtag from 'vue-gtag';
import router from "./router";
import Vue from 'vue';
import App from './App.vue'

for (const component in mdbvue) {
  Vue.component(component, mdbvue[component]);
}

Vue.config.productionTip = false;

Vue.use(VueGtag, {
  config: {
    id: 'G-ZP2LCLVZ2X',
    params: {
      send_page_view: false
    }
  }
}, router)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


