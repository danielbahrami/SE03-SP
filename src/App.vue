<template>
  <div class="app">
    <router-view/>
  </div>




  <!--
    <div>
    <Canvas></Canvas>
    <Homepage></Homepage>
   <Specificplaylist></Specificplaylist>
  </div>
  -->
</template>
// template displayer alt på localhost porten. I.e det vi ser i browseren

<script>
//import Homepage from './components/Home-page.vue'
//import Canvas from "./components/Canvas";
// import Specificplaylist from "@/components/Specific-playlist"; //Retrieves the implied component and allow the use of said component in template
// Import <name of the import> from <path to the import>
// Import becomes tags available for use in template



// Lader andre elementer til App.vue (eller vilkårlig komponent)
//ændre components til indholde ønsket komponents

// Allow App.vue access to other components

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}

</script>

// bar styling
<style>
#StartView a.router-link-exact-active
{

#app {

  font-family: Avenir, Helvetica, Arial, sans-serif, "Work Sans","Ag header 1";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 90px;

}

body{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

</style>


