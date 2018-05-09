<template>
  <div id="app">
    <div class="col-sm-8">
      <div class="container">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">Name</span>
          </div>
          <input type="text" class="form-control" v-model="name"/>
          <button class="btn btn-success" @click="insertName">Add</button>
        </div>
        <ul>
          <li v-for="name in dbNames" v-bind:key="name['.key']">{{ name.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { namesRef } from './firebase';

export default {
  name: 'app',
  data() {
    return {
      name: "Hello, world",
    }
  },
  firebase: {
    dbNames: namesRef,
  },
  methods: {
    showAlert: function() {
      alert(this.name)
    },
    insertName: function() {
      namesRef.push({ name: this.name })
    }
  }
}
</script>

<style>
#app {
  margin-top: 20px;
}
</style>
