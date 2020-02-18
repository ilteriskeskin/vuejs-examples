<template>
  <div id="app">
    <h1> {{ message }} {{ username }} </h1>
    <h1> {{ welcomeMessage }} </h1>

    <input v-model="name" />
    <button @click="updateName">Update Name</button>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex';
  export default {
    name: 'app',
    data() {
      return {
        name: 'ilteriskeskin',
      }
    },
    computed: {
      ...mapState([
        'message',
        'username',
      ]),

      ...mapGetters([
        'welcomeMessage',
      ]),
    },
    methods: {
      ...mapActions([
        'updateUserName',
      ]),
      updateName() {
        this.updateUserName(this.name)
      },
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
