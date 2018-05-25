<template lang="pug">
div(class="major")
  p {{ displayText }}
</template>

<script>
export default {
  props: {
    displayText: [String],
    containerHeight: {
      type: Number,
      required: false,
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/textoutput';
</style>
