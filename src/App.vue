<template>
  <Homepage/>
</template>
// template displayer alt på localhost porten. I.e det vi ser i browseren

<script>
import Homepage from './components/Home-page.vue' //Henter komponenten HelloWorld.vue og tillader brugen af elementet i template
// Import <name of the import> from <path to the import>
//import bliver til tags som skal bruges i template

// Lader andre elementer til App.vue (eller vilkårlig komponent)
//ændre components til indholde ønsket komponents
export default {
  name: 'App',
  components: {
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
body{
  background: #1E1E1E;
}
</style>


