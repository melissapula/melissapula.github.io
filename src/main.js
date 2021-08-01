import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue'
import App from './App.vue'
import * as mdbvue from "mdbvue";

Vue.config.productionTip = false

for (const component in mdbvue) {
  Vue.component(component, mdbvue[component]);
}

new Vue({
  render: h => h(App),
}).$mount('#app')
