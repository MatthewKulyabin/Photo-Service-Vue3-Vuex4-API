<template>
  <div>
    <br />
    <button @click="logoutHandler">Log out</button>
  </div>
</template>

<script>
export default {
  name: "Logout",
  methods: {
    logoutHandler() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style></style>
