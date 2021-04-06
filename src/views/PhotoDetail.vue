<template>
  <div>
    <br />
    <div :style="styleDetailPhoto(photo)"></div>
    <br />
    <span>Change photo</span>
    <br />
    <input type="text" placeholder="Enter name..." v-model="name" />
    <br />
    <input type="file" ref="fileInput" @change="changePhotoHandler" />
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  name: "PhotoDetail",
  data() {
    return {
      photo: JSON.parse(this.$route.params.photo),
      name: ""
    };
  },
  methods: {
    changePhotoHandler(e) {
      const photo = e.target.files[0];
      const fd = new FormData();
      fd.append("photo", photo);
      this.$store.dispatch("changePhoto", { fd, name, id: this.photo.id });
    },
    styleDetailPhoto(photo) {
      return {
        "background-image": `url(${photo.url})`,
        "background-size": "200px",
        width: "200px",
        height: "200px"
      };
    }
  }
};
</script>

<style>
</style>
