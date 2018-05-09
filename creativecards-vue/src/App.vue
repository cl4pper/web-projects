<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <Topbar></Topbar>
        <Cardfront></Cardfront>
      </div>
    </div>
  </div>
</template>

<script>
import Topbar from './components/Topbar.vue'
import Cardfront from './components/card/Cardfront.vue'

export default {
  components: {
    Topbar: Topbar,
    Cardfront: Cardfront
  }
}
</script>

<style>
</style>
