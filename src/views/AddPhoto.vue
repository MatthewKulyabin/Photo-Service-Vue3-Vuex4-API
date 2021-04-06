<template>
  <div>
    <br />
    <form ref="formElem">
      <input type="file" ref="fileInput" @change="addPhotoHandler" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddPhoto',
  data() {
    return {
      file: '',
    };
  },
  methods: {
    async addPhotoHandler(e) {
      const photo = this.$refs.formElem;
      // console.log(this.$refs.formElem);
      // const newPhoto = await toBase64(photo).then((data) => data);
      this.$store.dispatch('addPhoto', { photo: photo });
    },
  },
};
const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
</script>

<style></style>
