import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router';
// import VueFriendlyIframe from 'vue-friendly-iframe';

// Vue.use(VueFriendlyIframe);

new Vue({
  router, 
  render: (h) => h(App),
}).$mount('#app');

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
