<template>
  <div id="app">
    <div class="col-sm-5">
      <div class="container">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">Name</span>
          </div>
          <input type="text" class="form-control" />
          <button class="btn btn-success" @click="showAlert">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    showAlert: function() {
      alert("Button clicked!")
    }
  }
}
</script>

<style>
#app {
  margin-top: 20px;
}
</style>
