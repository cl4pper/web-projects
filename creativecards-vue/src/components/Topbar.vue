<template lang="pug">
div(class="header-body")
  h1(class="text-center") Creative Cards
  ul(class="nav justify-content-center")
    li(class="nav-item" @click="changeToFront")
      a Front
    li(class="nav-item" @click="changeToBack")
      a Back
    li(class="nav-item" @click="changeToRight")
      a Right
    li(class="nav-item" @click="changeToLeft")
      a Left
</template>

<script>
export default {
  data: function() {
    return {
      pageSelected: "Front",
    }
  },
  methods: {
    changeToFront: function() {
      this.pageSelected = "Cardfront"
      // console.log(this.pageSelected)
    },
    changeToBack: function() {
      this.pageSelected = "Cardback"
      // console.log(this.pageSelected)
    },
    changeToRight: function() {
      this.pageSelected = "Cardright"
      // console.log(this.pageSelected)
    },
    changeToLeft: function() {
      this.pageSelected = "Cardleft"
      // console.log(this.pageSelected)
    },
  },
  watch: {
    pageSelected: function() {
      // console.log(this.pageSelected)
      this.$emit('pageWasChanged', this.pageSelected)
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/topbar';
</style>
