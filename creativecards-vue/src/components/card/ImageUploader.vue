<template lang="pug">
div(class="row")
    div(class="col-sm-12")
        h5 Uploade Image:
        div(class="form-group")
            input(type="file" class="form-control-file" id="fileUpload" @change="uploadFile")
        div
            img(id="image")
        div
            button(id="setImageButton") Set Image
</template>

<script>
import Firebase from 'firebase'

export default {
    name: "ImageUploader",
    data() {
        return {
            file: '',
        }
    },
    methods: {
        uploadFile: function(event) {
            console.log(event)
            this.file = event.target.files[0]
            // ref('VAR_NAME')
            var storageRef = Firebase.storage().ref('user_uploads/' + this.file.name)
            storageRef.put(this.file)

            // preview da imagem
            var reader = new FileReader()
            reader.readAsDataURL(this.file)

            reader.onload = function(event) {
                document.getElementById('image').src = event.target.result
            }
        }
    }
}
</script>

<style lang="scss">
@import '../../assets/scss/image';
</style>
