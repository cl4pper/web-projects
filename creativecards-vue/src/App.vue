<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <Topbar @pageWasChanged="currentPage = $event"></Topbar>
        <p v-if="currentPage === null"></p>
        <!-- <p v-else>{{ currentPage }</p> -->
        <!-- <Cardfront></Cardfront> -->
      </div>
    </div>
    <Footer>
      <keep-alive>
        <!-- component - indica a utilizacao de um componente especifico(determinado pelo is) -->
        <component :is="currentPage"></component>
      </keep-alive>
    </Footer>
  </div>
</template>

<script>
import FirebaseConfig from './firebaseConfig.js'
import Topbar from './components/Topbar.vue'
import Footer from './components/Footer.vue'
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
    Cardback: Cardback,
    Footer: Footer,
  }
}
</script>

<style>
</style>
