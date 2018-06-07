<template lang="pug">
div(class="row")
    div(class="col-sm-12")
        h5 Uploade Image:
        div(class="form-group")
            input(type="file" class="form-control-file" id="fileUpload" @change="uploadFile")
        div(v-if="existImg")
            progress(value="0" max="100" id="progressBar")
        div(v-else)

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
            existImg: false,
        }
    },
    methods: {
        uploadFile: function(event) {
            console.log(event)
            this.existImg = true
            this.file = event.target.files[0]
            // ref('VAR_NAME')
            var storageRef = Firebase.storage().ref('user_uploads/' + this.file.name)
            var upload = storageRef.put(this.file)

            // preview da imagem
            var reader = new FileReader()
            reader.readAsDataURL(this.file)

            reader.onload = function(event) {
                document.getElementById('image').src = event.target.result
            }

            // preenche progressbar a medida em que a imagem esta sendo carregada para o firebase
            upload.on('state_changed', function(snapshot) {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                document.getElementById("progressBar").value = progress
            })

            // envia o nome da imagem para outro component
            this.$emit('displayImageChanged', this.file.name)
        }
    }
}
</script>

<style lang="scss">
@import '../../assets/scss/image';
</style>
