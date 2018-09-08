<template>
	<div class="footer">
    <!-- links to navigate through site -->
    <div class="footer-content">
      <div class="item">IPMB</div>
      <div class="item">Missão</div>
      <div class="item">Quem somos</div>
      <div class="item">Horários</div>
    </div>

    <!-- links to access social networks -->
    <div class="social-links">
      <div class="links-item"><i class="fab fa-facebook-f"></i></div>
      <div class="links-item"><i class="fab fa-instagram"></i></div>
      <div class="links-item"><i class="fab fa-youtube"></i></div>
      <div class="links-item"><i class="fab fa-blogger-b"></i></div>
    </div>


    <div class="footer-content"></div>
  </div>
</template>

<script>
export default {
  name: 'title',
  props: {
    label: {
      type: String,
      required: false,
      default: "Title",
    }
  }
}
</script>

<style lang="scss">
@import './footer.scss';
</style>

