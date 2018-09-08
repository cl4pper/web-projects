<template>
  <div class="app">
    <v-topbar></v-topbar>
    <!-- the place tag where the router will be rendered -->
    <v-togglemenu></v-togglemenu>
    <router-view></router-view>
  </div>
</template>

<script>
import Topbar from './components/Topbar/Topbar.vue';
import ToggleMenu from './components/ToggleMenu/ToggleMenu.vue';

export default {
  name: 'app',
  components: {
    vTopbar: Topbar,
    vTogglemenu: ToggleMenu,
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
