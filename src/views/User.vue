<template>
  <div>
    <br />
    <input type="text" placeholder="Search user..." v-model="searchUserText" /><br /><br />
    <button @click="searchUserHandler">Search</button>
  </div>
</template>

<script>
export default {
  name: 'User',
  data() {
    return {
      searchUserText: '',
    };
  },
  methods: {
    searchUserHandler() {
      if (this.searchUserText) {
        console.log(this.searchUserText);
      }
    },
  },
}
</script>

<style>

</style>
