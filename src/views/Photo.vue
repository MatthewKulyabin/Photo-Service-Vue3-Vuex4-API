<template>
  <div>
    <br />
    <button v-if="showed" @click="getPhotoHandler">Show photos</button>
    <ul>
      <div v-for="arr in photos" v-bind:key="arr.id">
        <img
          v-for="photo in arr"
          v-bind:key="photo.id"
          :style="photoStyle(photo)"
          @click="goToDetail(photo)"
        />
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Photo",
  data() {
    return {
      photos: null,
      showed: true
    };
  },
  methods: {
    async getPhotoHandler() {
      this.photos = await this.$store.dispatch("getPhoto");
      console.log(this.photos);
    },
    photoStyle(photo) {
      this.showed = false;
      return {
        "background-image": `url(${photo.url})`,
        "background-size": "100px",
        "background-repeat": "no-repeat",
        width: "100px",
        height: "100px"
      };
    },
    goToDetail(photo) {
      this.$router.push({
        name: "PhotoDetail",
        params: { photo: JSON.stringify(photo) }
      });
    }
  }
};
</script>

<style></style>
