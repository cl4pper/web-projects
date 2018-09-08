<template>
  <div class="app">
    <v-topbar></v-topbar>
    <!-- the place tag where the router will be rendered -->
    <router-view></router-view>
  </div>
</template>

<script>
import Topbar from './components/Topbar/Topbar.vue';

export default {
  name: 'app',
  components: {
    vTopbar: Topbar,
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
