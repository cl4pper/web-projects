import './firebase'
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueFire)
Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(App)
})
