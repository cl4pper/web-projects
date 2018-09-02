import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import Home from './pages/Home.vue';
import Local from './pages/Local.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/home', component: Home },
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
