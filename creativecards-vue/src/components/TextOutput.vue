<template lang="pug">
div(class="major")
    p(@mouseover="mouseOver" v-show="!active") Boooom
    p(@mouseleave="mouseOut" v-show="active") Nada
    p(:style="contHeightStyle")
    span(class="out") {{ displayText }}
</template>

<script>
export default {
  props: {
    displayText: [String],
    containerHeight: {
      type: Number,
      // default: 50,
      required: true,
    }
  },
  data() {
      return {
          active: false
      }
  },
  methods: {
      mouseOver: function() {
          this.active = true
      },
      mouseOut: function() {
          this.active = false
      }
  },
  computed: {
    contHeightStyle: function() {
      return {
        height: this.containerHeight + "px"
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/textoutput';
</style>
