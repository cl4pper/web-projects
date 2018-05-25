<template lang="pug">
div(class="container")
  button(class="btn btn-success") {{ buttonText }}
</template>

<script>
export default {
  name: "Button",
  props: ['buttonText'],
}
</script>
