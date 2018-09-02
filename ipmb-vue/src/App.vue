<template>
  <div class="app">
    <!-- the place tag where the router will be rendered -->
    <router-view></router-view>
  </div>
</template>

<script>
import Topbar from './components/Topbar/Topbar.vue';
import Jumbotron from './components/Jumbotron/Jumbotron.vue';
import Title from './components/Title/Title.vue';

export default {
  name: 'app',
  components: {
    vTopbar: Topbar,
    vJumbotron: Jumbotron,
    vTitle: Title,
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
