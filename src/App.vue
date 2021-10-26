<template>
<<<<<<< HEAD
  <Home-page/>
=======
  <div>
  <Canvas></Canvas>
  <Homepage></Homepage>
  </div>
>>>>>>> jaasmu
</template>
// template displayer alt på localhost porten. I.e det vi ser i browseren

<script>
import Homepage from './components/Home-page.vue'
import Canvas from "./components/Canvas"; //Retrieves the implied component and allow the use of said component in template
// Import <name of the import> from <path to the import>
// Import becomes tags available for use in template

<<<<<<< HEAD
// Lader andre elementer til App.vue (eller vilkårlig komponent)
//ændre components til indholde ønsket komponents

=======
// Allow App.vue access to other components
>>>>>>> jaasmu
export default {
  name: 'App',
  components: {
    Canvas,
    Homepage
  }
}
</script>

// bar styling
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


