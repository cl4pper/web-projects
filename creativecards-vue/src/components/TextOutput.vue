<template lang="pug">
div(class="major")
  p {{ displayText }}
</template>

<script>
export default {
  props: ['displayText']
}
</script>

<style lang="scss">
@import '../assets/scss/textoutput';
</style>
