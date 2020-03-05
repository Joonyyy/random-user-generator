<template>
  <div id="app">
    <user-list/>
  </div>
</template>

<script>
import UserList from './components/user-list.vue';

export default {
  name: 'App',
  components: {
    UserList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
