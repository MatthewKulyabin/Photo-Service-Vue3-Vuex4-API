<template>
  <div>
    <br />
    <input type="text" placeholder="First name" v-model="first_name" required />
    <br />
    <br />
    <input type="text" placeholder="Surname" v-model="surname" required />
    <br />
    <br />
    <input type="text" placeholder="Phone" v-model="phone" required />
    <br />
    <br />
    <input type="text" placeholder="Password" v-model="password" required />
    <br />
    <br />
    <button @click="signUpHandler">Sign up</button>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      first_name: "",
      surname: "",
      phone: "",
      password: ""
    };
  },
  methods: {
    signUpHandler() {
      if (
        this.phone.match(/^[0-9]+$/) &&
        this.phone.length === 11 &&
        this.first_name &&
        this.surname &&
        this.password
      ) {
        console.log(this.first_name, this.surname, this.phone, this.password);
        this.$store.dispatch("signup", {
          first_name: this.first_name,
          surname: this.surname,
          phone: this.phone,
          password: this.password
        });
      }
    }
  }
};
</script>
