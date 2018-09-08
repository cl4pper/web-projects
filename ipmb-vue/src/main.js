import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Home from './pages/Home.vue';
import Local from './pages/Local.vue';

// TO USE ROUTING
Vue.use(VueRouter);

// TO USE FONTAWESOME
library.add(faBars)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

const routes = [
  { path: '/inicio', component: Home },
  { path: '/local', component: Local },
];

const router = new VueRouter({
  routes: routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
