<template lang="pug">
div(clas="row")
  div(class="col-sm-12")
    div(class="form-group")
      h5 {{ title }}:
      textarea(class="form-control" cols="50" rows="3" placeholder="Add text here..." v-model="textAreaInput" @keyup="textAreaChanged")
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: false,
            default: "Edit Text",
        }
    },
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
