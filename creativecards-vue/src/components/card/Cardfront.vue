<template lang="pug">
div(class="row")
  div(class="col-sm-6 card edit-area")
    p Front
    Textinput(@textAreaDisplay="textBoxFirst = $event" title="Title")
    Textinput(@textAreaDisplay="textBoxSecond = $event")
    ImageUploader(@displayImageChanged="imageName = $event")

  div(class="col-sm-6 card card-display")
    Textoutput(:displayText="textBoxFirst" :containerHeight="50")
    Textoutput(:displayText="textBoxSecond" :containerHeight="150")
    ImageOutput(:displayImage="imageName" :containerHeight="300")
    p {{ imageName }}
</template>

<script>
import TextInput from '../TextInput.vue'
import TextOutput from '../TextOutput.vue'
import ImageUploader from './ImageUploader.vue'
import ImageOutput from './ImageOutput.vue'

export default {
  data() {
    return {
      textBoxFirst: "",
      textBoxSecond: "",
      imageName: "",
      name: this.imageName,
    }
  },
  components: {
    Textinput: TextInput,
    Textoutput: TextOutput,
    ImageUploader: ImageUploader,
    ImageOutput: ImageOutput,
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/card';
</style>
