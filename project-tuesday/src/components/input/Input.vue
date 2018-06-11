<template>
    <div>
        <div class="input-group mb-3">
            <input type="text" class="form-control" :placeholder="placeHolder" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'input',
    props: {
        placeHolder: {
            type: String,
            required: false,
            default: "Input here..."
        }
    }
}
</script>

<style lang="scss">
@import './Input.scss';
</style>
