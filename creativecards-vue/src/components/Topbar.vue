<template>
  <div class="header-body">
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
      pageSelected: "Front",
    }
  },
  methods: {
    changeToFront: function() {
      this.pageSelected = "Cardfront"
      // console.log(this.pageSelected)
    },
    changeToBack: function() {
      this.pageSelected = "Cardback"
      // console.log(this.pageSelected)
    },
    changeToRight: function() {
      this.pageSelected = "Cardright"
      // console.log(this.pageSelected)
    },
    changeToLeft: function() {
      this.pageSelected = "Cardleft"
      // console.log(this.pageSelected)
    },
  },
  watch: {
    pageSelected: function() {
      // console.log(this.pageSelected)
      this.$emit('pageWasChanged', this.pageSelected)
    }
  }
}
</script>

<style>
.header-body {
  margin: 20px 0;
}

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
  /* color: #ff00ff; */
  color: #d2f9f9;
}
</style>
