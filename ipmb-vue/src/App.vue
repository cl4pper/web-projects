<template>
  <div class="app">
    <v-topbar></v-topbar>
    <!-- the place tag where the router will be rendered -->
    <v-togglemenu></v-togglemenu>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Topbar from './components/Topbar/Topbar.vue';
import ToggleMenu from './components/ToggleMenu/ToggleMenu.vue';
import Footer from './components/Footer/Footer.vue';

export default {
  name: 'app',
  components: {
    vTopbar: Topbar,
    vTogglemenu: ToggleMenu,
    vFooter: Footer,
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
