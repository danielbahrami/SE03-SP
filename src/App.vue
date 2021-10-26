<template>

    <Homepage />



</template>
// template displayer alt på localhost porten. I.e det vi ser i browseren
<script>
import Homepage from './components/Home-page' //Henter komponenten HelloWorld.vue og tillader brugen af elementet i template

// Lader andre elementer til App.vue (eller vilkårlig komponent)
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
  background: #080808;
}
</style>


