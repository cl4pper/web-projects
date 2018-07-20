<!-- CAN CHANGE: FONT COLOR, FONT SIZE -->
<template>
  <div class="title">
    <p class="title-text" :style="setStyle">{{ label }}</p>
    <!-- <v-subtitle></v-subtitle> -->
  </div>
</template>

<script>
import Subtitle from '../Subtitle/Subtitle.vue';

export default {
  name: 'title',
  components: {
    vSubtitle: Subtitle,
  },
  props: {
    label: {
      type: String,
      default: "Page Title",
    },
    fontsize: {
      type: Number,
      required: true,
      default: 3,
    },
    fontcolor: {
      type: String,
      required: false,
      default: "#f00",
    }
  },
  computed: {
    setStyle: function() {
      return {
        fontSize: this.fontsize + "em",
        color: this.fontcolor,
      }
    }
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
