<template>
<div>
    <button @click="onClick" class="btn btn-success">
        <slot></slot>
    </button>
</div>
</template>

<script>
export default {
    name: "Button",
    props: {
        onClick: {
            type: Function,
            required: true
        }
    }
}
</script>

<style lang="scss">
@import './Button.scss';
</style>
