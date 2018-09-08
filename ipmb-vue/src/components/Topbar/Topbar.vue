<template>
  <div class="topbar">

    <!-- MOBILE VIEW -->
    <div class="group-mobile">
      <div class="inline-group">
        <!-- SITE HEADER -->
        <div class="item-mobile">
          <div class="header-icon"></div>
          <div class="header-title">
            <div class="header-title-item">Igreja</div>
            <div class="header-title-item">Presbiteriana</div>
            <div class="header-title-item">Memorial da Barra</div>
          </div>
        </div>

        <!-- ICON TO OPEN TOGGLE MENU -->
        <div class="item-mobile">
          <font-awesome-icon icon="bars" />
        </div>
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
      <div class="normal-text">Mapa</div>
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
