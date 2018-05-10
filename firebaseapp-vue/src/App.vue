<template>
  <div id="app">
    <div class="col-sm-8">
      <div class="container">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">Name</span>
          </div>
          <input type="text" class="form-control" v-model="name" placeholder="Insert a name here..."/>
          <button class="btn btn-success" @click="insertName">Add</button>
        </div>
        <p>
          <p class="instructionsTitle">Instructions:</h4>
          <p class="instructions">To ADD a name, insert in the space above and press "Add"</p>
          <p class="instructions">To REMOVE a name, press the "Remove" button</p>
          <p class="instructions">To EDIT a name, insert the new name in the space above, then press "Edit" button</p>
          <p class="instructions">Use "Copy" button to pass the name to the input box</p>
        </p>
        <hr  />
        <div v-if="dbNames.length === 0">
          <h2>Searching names...</h2>
        </div>
        <div v-else>
          <ul>
            <li :style="className" v-for="name in dbNames" v-bind:key="name['.key']">
              <button class="btn btn-danger" @click="removeName(name['.key'])">Remove</button>
              <button class="btn btn-primary" @click="editName(name['.key'])">Edit</button>
              <button class="btn btn-success" @click="copyName(name)">Copy</button>
              {{ name.name }}
            </li>
          </ul>
        </div>
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
      name: "",
      className: {
        margin: "10px 0px",
        fontSize: "20px",
      }
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
      this.name = ""
    },
    removeName: function(key) {
      // alert(this.dbNames.indexOf(name))
      namesRef.child(key).remove()
    },
    editName: function(key) {
      // alert(this.name)
      namesRef.child(key).update({name: this.name})
      this.name = ""
    },
    copyName: function(key) {
      this.name = this.dbNames[this.dbNames.indexOf(key)].name
      // console.log(this.dbNames[this.dbNames.indexOf(key)].name)
      // this.name = namesRef.child(key).name
    }
  }
}
</script>

<style>
#app {
  margin-top: 20px;
}

.instructionsTitle {
  font-weight: bold;
}

.instructions {
  font-size: 12px;
}

#app ul {
  list-style-type: none;
}

.btn {
  margin-right: 10px;
}
</style>
