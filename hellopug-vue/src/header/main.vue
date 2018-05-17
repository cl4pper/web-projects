<template lang="pug">
  div(class='container')
    div(class="title")
      h3 Hello, Pug
      button(class="btn btn-success" @click="sayingHello") {{ btnText }}
    hr
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      btnText: "Say hello"
    }
  },
  methods: {
    sayingHello: function() {
      alert("Hello, mate.")
    }
  }
}
</script>

<style>
@import '../assets/scss/header';
</style>
