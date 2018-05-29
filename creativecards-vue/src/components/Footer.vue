<template lang="pug">
div(class="container")
  slot
    p Footer
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style>
@import '../assets/scss/footer';
</style>
