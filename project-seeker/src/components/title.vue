<template lang="pug">
div(class="container")
    h1 {{ title }}
</template>

<script>
export default {
    name: "Title",
    data() {
        return {
            title: "News Seeker",
        }
    }
}
</script>

<style>
h1 {
    text-align: center;
}
</style>
