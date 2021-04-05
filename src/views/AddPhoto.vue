<template>
  <div>
    <br />
    <div @click="selectImage">YOBA</div>
    <input type="file" ref="fileInput" @change="pickFile" />
  </div>
</template>

<script>
export default {
  name: 'AddPhoto',
  data() {
    return {
      file: ''
    };
  },
  methods: {
    selectImage() {
      this.$refs.fileInput.click();
    },
    pickFile() {
      const input = this.$refs.fileInput;
      const file = input.files;
      if (file && file[0]) {
        const reader = new FileReader();
        reader.onload = e => {
          this.file = e.target.result;
        };
        reader.readAsDataURL(file[0]);
        this.$emit('input', file[0]);
        console.log(this.file);
        // this.$store.dispatch('addPhoto', { photo: this.file });
      }
    }
    // addPhotoHandler(e) {
    //   const photo = e.target.files[0];
    //   const fd = new FormData();
    //   fd.append('image', photo, photo.name);
    //   console.log(fd);
    //   this.$store.dispatch('addPhoto');
    // }
  }
};
</script>

<style></style>
