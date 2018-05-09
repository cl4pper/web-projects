<template>
  <div>
    <h1 class="text-center">Creative Cards</h1>
    <ul class="nav justify-content-center">
      <li class="nav-item" @click="changeToFront">Front</li>
      <li class="nav-item" @click="changeToBack">Back</li>
      <li class="nav-item" @click="changeToRight">Right</li>
      <li class="nav-item" @click="changeToLeft">Left</li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      pageSelected: "",
    }
  },
  methods: {
    changeToFront: function() {
      this.pageSelected = "front"
      console.log(this.pageSelected)
    },
    changeToBack: function() {
      this.pageSelected = "back"
      console.log(this.pageSelected)
    },
    changeToRight: function() {
      this.pageSelected = "right"
      console.log(this.pageSelected)
    },
    changeToLeft: function() {
      this.pageSelected = "left"
      console.log(this.pageSelected)
    },
  }
}
</script>

<style>
h1 {
  margin-top: 20px;
}
.nav-item {
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
}
.nav-item:hover {
  /* font-size: 20px; */
  color: #ff00ff;
}
</style>
