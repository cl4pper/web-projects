<template>
  <div id="app">
    <Header></Header>
    <Input />
    <List></List>
  </div>
</template>

<script>
import header from './header/main.vue'
import input from './input/main.vue'
import list from './list/main.vue'

export default {
  name: 'app',
  components: {
    Header: header,
    Input: input,
    List: list,
  }
}
</script>

<style>
#app {
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 20px;
}
</style>
