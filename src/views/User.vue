<template>
  <div>
    <br />
    <input type="text" placeholder="Search user..." v-model="searchUserText" />
    <br />
    <br />
    <button @click="searchUserHandler">Search</button>
    <div v-if="users">
      <div v-for="(user) in users" v-bind:key="user.id">
        <span>First name: {{user.first_name}}</span>
        <br />
        <span>Surname: {{user.surname}}</span>
        <br />
        <span>Phone: {{user.phone}}</span>
        <br />
        <button @click="shareDetailPhotoHandler(user.id)">Share Photo With {{user.first_name}}</button>
        <br />
        <br />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      users: null,
      searchUserText: ""
    };
  },
  methods: {
    async searchUserHandler() {
      if (this.searchUserText) {
        this.users = await this.$store.dispatch("searchUser", {
          text: this.searchUserText
        });
        console.log(this.users);
      }
    },
    shareDetailPhotoHandler(userId) {
      const photoId = this.$route.params.photoId;
      if (!photoId) {
        alert("Choose photo");
        this.$router.replace({ name: "Photo" });
      }
      this.$store.dispatch("shareDetailPhoto", { userId, photoId });
    }
  }
};
</script>

<style></style>
