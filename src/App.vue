<template>
  <div id="app">
    <img class="logo" alt="logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Spotify"/>
    <br>
    <Login></Login>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Login from "@/components/Login";

export default {
  name: 'App',
  components: {
    Login,
    HelloWorld
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
  background-color: gray;
}

.logo {
  height: 100px;
  width: 100px;
}
</style>
