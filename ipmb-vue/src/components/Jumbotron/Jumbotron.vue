<template>
  <div class="jumbotron">
    <!-- <img src="../../assets/images/wallpaper-1.jpg" /> -->
    <div class="wallpaper">
      <slot name="jumbotron-title">
        <h1>Page Title</h1>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jumbotron',
}
</script>

<style lang="scss">
@import './style.scss';
</style>
