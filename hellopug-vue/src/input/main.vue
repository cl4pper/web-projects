<template lang="pug">
div(class="container")
  div(class="row")
    div(class="col-md-4")

    div(class="col-md-4")
      div(class="form")
        div(class="input-group mb-3")
          div(class="input-group-prepend")
            span(class="input-group-text") Name
          input(type="text" class="form-control" v-model="addedName")
          button(class="btn btn-success" @click="getName") Add

    div(class="col-md-4")

  ul
    li(v-for="item in lista") {{ item.name }} - {{ item.age }}

  hr
</template>

<script>
export default {
  name: "Input",
  data() {
    return {
      name: "",
      addedName: "",
      age: "",
      addedAge: "",
      person: {
        name: "",
        age: "",
      },
      lista: [],
    }
  },
  methods: {
    getName: function() {
      if(this.addedName.length < 1) {
        alert("Invalid Name")
      } else {
        this.name = this.addedName
        // alert("Name " + this.name + " added.")
        this.person = { name: this.name, age: "10"}
        this.lista.push(this.person)
        this.addedName = ""
      }
    },
    getAge: function() {
      this.age = this.addedAge
    },
  },
  watch: {
    lista: function() {
      alert("Lista changed.")
      // this.$emit('listChanged', this.lista)
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/input';
</style>
