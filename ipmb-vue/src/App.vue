<template>
  <div class="app">
    <v-topbar></v-topbar>
    <v-jumbotron>
      <v-title label="IPMB" slot="jumbotron-title" fontsize=10 fontcolor="#fff"></v-title>
      <v-subtitle label="Hello world" fontcolor="#fff"></v-subtitle>
    </v-jumbotron>
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
