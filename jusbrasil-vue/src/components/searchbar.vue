<template lang="pug">
div(class="container")
  Title
  div(class="input-group mb-3")
    div(class="input-group-prepend")
      span(class="input-group-text") Search
    input(class="form-control")
  Button(buttonText="...and destroy.")
</template>

<script>
import Title from './title.vue';
import Button from './button.vue';

export default {
  name: "Searchbar",
  data() {
    return {
      searchInput: "",
    }
  },
  components: {
    Title: Title,
    Button: Button,
  },
}
</script>

<style></style>
