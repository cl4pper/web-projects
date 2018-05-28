<template lang="pug">
div(class="container")
    Title
    div(class="input-group mb-3")
        div(input-group-prepend)
            div(class="input-group-text") Title
        input(type="text" class="form-control")
    div(class="input-group mb-3")
        textarea(class="form-control" rows="3" placeholder="Content...")

    div(class="input-group mb-3")
        div(input-group-prepend)
            div(class="input-group-text") Link
        input(type="text" class="form-control")
    button(class="btn btn-dark") Add
</template>

<script>
import Title from './title.vue';

export default {
    name: "Input",
    components: {
        Title: Title,
    }
}
</script>

<style>
button {
    width: 100%;
}
</style>
