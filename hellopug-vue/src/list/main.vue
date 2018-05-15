<template lang="pug">
  div(class="container")
    div(class="list")
      div(class="empty-list")
        ul
          li(v-for="item in resgisterList")
</template>

<script>
import input from '../input/main.vue'

export default {
  data() {
    return {
      resgisterList: input.lista,
    }
  },
  components: {
    Input: input
  }
}
</script>

<style></style>
