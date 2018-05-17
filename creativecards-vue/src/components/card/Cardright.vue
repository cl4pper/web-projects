<template lang="pug">
div(class="row")
  div(class="col-sm-6 card edit-area")
    p Right
    Textinput(@textAreaDisplay="textBoxFirst = $event")
    Textinput(@textAreaDisplay="textBoxSecond = $event")

  div(class="col-sm-6 card card-display")
    Textoutput(:displayText="textBoxFirst")
    Textoutput(:displayText="textBoxSecond")
</template>

<script>
import TextInput from '../TextInput.vue';
import TextOutput from '../TextOutput.vue';

export default {
  data() {
    return {
      textBoxFirst: "",
      textBoxSecond: "",
    }
  },
  components: {
    Textinput: TextInput,
    Textoutput: TextOutput
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/card';
</style>
