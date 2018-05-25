<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <Topbar @pageWasChanged="currentPage = $event"></Topbar>
        <p v-if="currentPage === null"></p>
        <!-- <p v-else>{{ currentPage }</p> -->
        <!-- <Cardfront></Cardfront> -->
        <keep-alive>
          <component :is="currentPage"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Topbar from './components/Topbar.vue'
import Cardfront from './components/card/Cardfront.vue'
import Cardleft from './components/card/Cardleft.vue'
import Cardright from './components/card/Cardright.vue'
import Cardback from './components/card/Cardback.vue'

export default {
  data: function() {
    return {
      currentPage: ""
    }
  },
  components: {
    Topbar: Topbar,
    Cardfront: Cardfront,
    Cardleft: Cardleft,
    Cardright: Cardright,
    Cardback: Cardback
  }
}
</script>

<style>
</style>
