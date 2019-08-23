import Vue from 'vue'
import App from './ChallengeTwo.vue'
import VueResource from 'vue-resource'
import VuePaginate from 'vue-paginate'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.use(VuePaginate)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
