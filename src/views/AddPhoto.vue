<template>
  <div>
    <br />
    <input type="file" ref="fileInput" @change="addPhotoHandler" />
  </div>
</template>

<script>
export default {
  name: "AddPhoto",
  methods: {
    async addPhotoHandler(e) {
      const photo = e.target.files[0];
      const fd = new FormData();
      fd.append("photo", photo);
      this.$store.dispatch("addPhoto", { fd });
    }
  }
};
</script>

<style></style>
