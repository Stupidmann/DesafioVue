import Vue from 'vue'
import App from './ChallengeTwo.vue'
import VueResource from 'vue-resource'
import VuePaginate from 'vue-paginate'

Vue.use(VueResource)
Vue.use(VuePaginate)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
