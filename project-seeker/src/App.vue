<template>
  <div id="app">
      <div class="row">
          <div class="col-md-4">
          </div>
          <div class="col-md-4">
              <Input />
          </div>
          <div class="col-md-4">
          </div>
      </div>
  </div>
</template>

<script>
import Input from './components/input.vue';

export default {
    name: "app",
    components: {
        Input: Input,
    }
}
</script>

<style>
#app {
    margin-top: 70px;
}
</style>
