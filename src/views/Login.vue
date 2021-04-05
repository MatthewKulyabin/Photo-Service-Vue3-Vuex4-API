<template>
  <div>
    <br />
    <input type="text" placeholder="Phone" v-model="phone" required />
    <br />
    <br />
    <input type="text" placeholder="Password" v-model="password" required />
    <br />
    <br />
    <button @click="logInHandler">Sign up</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      phone: "",
      password: ""
    };
  },
  methods: {
    logInHandler() {
      if (
        this.phone.match(/^[0-9]+$/) &&
        this.phone.length === 11 &&
        this.password
      ) {
        this.$store.dispatch("login", {
          phone: this.phone,
          password: this.password
        });
      }
    }
  }
};
</script>

<style>
</style>
