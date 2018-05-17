<template lang="pug">
div(clas="row")
  div(class="col-sm-12")
    div(class="form-group")
      h5 Edit Text:
      textarea(class="form-control" cols="50" rows="3" placeholder="Add text here..." v-model="textAreaInput" @keyup="textAreaChanged")
</template>

<script>
export default {
  data() {
    return {
      textAreaInput: ""
    }
  },
  methods: {
    textAreaChanged: function() {
      //$emit(NAME THE OF EVENT, VALUE TO BE SENT)
      this.$emit('textAreaDisplay', this.textAreaInput)
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/textinput';
</style>
