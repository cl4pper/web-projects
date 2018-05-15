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
        this.lista.push(this.name)
        this.addedName = ""
        console.log(this.lista)
      }
    },
    getAge: function() {
      this.age = this.addedAge
    },
  }
}
</script>

<style>
.container {
  margin-top: 30px;
}

.form {
  text-align: center;
}
</style>
