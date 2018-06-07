<template lang="pug">
div(class="container")
    h5 Hello
</template>

<script>
export default {
    name:"ImageOutput",
    props: {
        displayImage: {
            type: String,
            required: false,
        },
        containerHeight: {
            type: Number,
            default: 200,
            required: false,
        }
    }
}
</script>

<style lang="scss">
@import '../../assets/scss/imageoutput';
</style>
