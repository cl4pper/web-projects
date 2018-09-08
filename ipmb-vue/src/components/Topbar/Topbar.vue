<template>
  <div class="topbar">

    <!-- MOBILE VIEW -->
    <div class="group-mobile">
      <div class="inline-group">
        <div class="item-mobile">IPMB</div>
        <font-awesome-icon icon="bars" />
      </div>
    </div>
    
    <!-- DESKTOP VIEW -->
    <div class="group">
      <div class="normal-text">Missão</div>
    </div>
    
    <div class="group">
      <div class="normal-text">Quem somos</div>
    </div>
    
    <div class="group">
      <div class="main-text">IPMB</div>
    </div>

    <div class="group">
      <div class="normal-text">Local</div>
    </div>

    <div class="group">
      <div class="normal-text">Horários</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topbar',
}
</script>

<style lang="scss">
@import './topbar.scss';
</style>
