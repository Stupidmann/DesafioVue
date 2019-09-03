import Vue from 'vue'
import App from './ChallengeTwo.vue'
import VueResource from 'vue-resource'
import VuePaginate from 'vue-paginate'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios' //  error 404 al llamar a axios

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.use(VuePaginate)
Vue.use(axios)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
