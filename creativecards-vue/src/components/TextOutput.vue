<template lang="pug">
div(class="major")
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
