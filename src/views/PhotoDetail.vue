<template>
  <div>
    <br />
    <button @click="getDetailPhotoHandler">Show Detail Photo</button>
    <div v-if="photo">
      <div :style="styleDetailPhoto(photo)"></div>
      <br />
      <span>Change photo</span>
      <br />
      <input type="text" placeholder="Enter name..." v-model="name" />
      <br />
      <input type="file" ref="fileInput" @change="changePhotoHandler" />
      <button @click="deleteDetailPhotoHandler">Delete Photo</button>
      <br />
      <button @click="shareDetailPhotoHandler">Share Photo</button>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  name: 'PhotoDetail',
  data() {
    return {
      photoId: null,
      photo: null,
      name: '',
    };
  },
  methods: {
    async getDetailPhotoHandler() {
      if (!this.$route.params.photo) {
        this.$router.replace({ path: '/photo' });
        return;
      }
      this.photoId = JSON.parse(this.$route.params.photo).id;
      this.photo = await this.$store.dispatch('getDetailPhoto', {
        id: this.photoId,
      });
    },
    async changePhotoHandler(e) {
      const photo = e.target.files[0];
      const fd = new FormData();
      fd.append('photo', await toBase64(photo).then((data) => data));
      fd.append('_method', 'patch');
      fd.append('name', this.name);
      await this.$store.dispatch('changePhoto', { fd, id: this.photo.id });
      this.$router.replace({ path: '/photo' });
    },
    async deleteDetailPhotoHandler() {
      await this.$store.dispatch('deleteDetailPhoto', {
        id: this.photoId,
      });
      console.log('asdasddsasad');
      this.$router.replace({ path: '/photo' });
    },
    async shareDetailPhotoHandler() {
      await this.$store.dispatch('shareDetailPhoto', {
        ids: [this.photoId],
      });
    },
    styleDetailPhoto(photo) {
      return {
        'background-image': `url(${photo.url})`,
        'background-size': '200px',
        'background-repeat': 'no-repeat',
        width: '200px',
        height: '200px',
      };
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
