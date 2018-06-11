<template>
    <div>
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    name: 'header',
    props: {
        title: {
            type: String,
            required: false,
            default: "Title"
        }
    }
}
</script>

<style lang="scss">
@import './Header.scss';
</style>
