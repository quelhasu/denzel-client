import Vue from 'vue'
import App from './App.vue'
import VueScrollReveal from 'vue-scroll-reveal';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(VueScrollReveal);