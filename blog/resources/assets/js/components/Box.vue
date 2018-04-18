<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            {{ title }} <i v-bind:class="setSportIcon"></i>
        </div>
        <div class="panel-body">
            <slot></slot>
        </div>
        <div class="panel-footer">
            {{ footer }} <i class="fa fa-arrow-circle-right"></i>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title', 'sportIcon' ,'footer', 'txtColor', 'bgColor'],
    }
</script>

<style media="screen">
    .panel {
        background-color: #edeeef;
    }
    .panel > .panel-heading {
        color: #ffffff;
        background-color: #000000;
        cursor: pointer;
    }
</style>
