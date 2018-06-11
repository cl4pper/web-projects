<template>
    <div id="app">
        <div class="container"></div>
        <div class="row">
            <div class="col-md-4">
            </div>

            <div class="col-md-4">
                <v-header title="Text Passer"></v-header>
                <v-input placeHolder="Search..."></v-input>
                <v-button :onClick="clickAlert">Botao</v-button>
            </div>

            <div class="col-md-4">
            </div>
        </div>
        <div class="container"></div>
    </div>
</template>

<script>
import Button from './components/button/Button.vue'
import Header from './components/header/Header.vue'
import Input from './components/input/Input.vue'

export default {
    name: "app",
    methods: {
        clickAlert: function() {
            alert("Clicked!!!")
        }
    },
    components: {
        vButton: Button,
        vHeader: Header,
        vInput: Input,
    }
}
</script>

<style>
.container {
    height: 150px;
}

.col-md-4 {
    text-align: center;
}
</style>
