<template lang="pug">
div(class="container" :style="styleObject")
    img(id="outputImage")
</template>

<script>
import Firebase from 'firebase'

export default {
    name:"ImageOutput",
    props: {
        displayImage: {
            type: String,
        },
        imageSize: {
            type: Number,
            required: false,
            default: 150,
        },
        containerHeight: {
            type: Number,
            default: 200,
        }
    },
    watch: {
        displayImage: function() {
            // retorna a imagem do storage do firebase
            var storageRef = Firebase.storage().ref('user_uploads/' + this.displayImage)
            storageRef.getDownloadURL().then(function(url) {
                var img = document.getElementById('outputImage')
                img.src = url
            })
        }
    },
    computed: {
        styleObject: function() {
            return {
                height: this.containerHeight + "px"
            }
        }
    }
}
</script>

<style lang="scss">
@import '../../assets/scss/imageoutput';
</style>
