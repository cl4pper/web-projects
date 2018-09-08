<template>
  <div class="topbar">

    <div class="group-mobile">
      <!-- <i class="fas fa-bars"></i> -->
      <font-awesome-icon icon="bars" /> 
    </div>
    <!-- <p class="icon-open">&#9776;</p> -->
    <div class="group">
      <div class="normal-item">Missão</div>
    </div>
    
    <div class="group">
      <div class="normal-item">Quem somos</div>
    </div>
    
    <div class="group">
      <div class="main-item">IPMB</div>
    </div>

    <div class="group">
      <div class="normal-item">Local</div>
    </div>

    <div class="group">
      <!-- <div class="normal-item"><v-link fontColor="white"></v-link></div> -->
      <div class="normal-item">Horários</div>
    </div>
  </div>
</template>

<script>
import Link from '../Link/Link.vue';
export default {
  name: 'topbar',
  components: {
    vLink: Link,
  }
}
</script>

<style lang="scss">
@import './topbar.scss';
</style>
