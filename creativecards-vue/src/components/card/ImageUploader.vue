<template lang="pug">
div(class="row")
    div(class="col-sm-12")
        h5 Uploade Image:
        div(class="form-group")
            input(type="file" class="form-control-file" id="fileUpload" @change="uploadFile")
        br
        img(id="image")
        button(class="btn btn-dark" id="setImageButton") Set Image
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
        }
    }
}
</script>

<style>
.row {
    /* margin: 20px 0; */
}
button {
    height: 35px;
    width: 100px;
}
</style>
