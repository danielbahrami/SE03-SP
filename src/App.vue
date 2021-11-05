<template>
  <div class="app">
    <topbar/>
    <sidebar/>
    <album-art/>
    <div class="contentFitter">
      <router-view/>
    </div>
    <soundAndQueue/>
    <media-player/>
  </div>
</template>
<!--template displayer alt på localhost porten. I.e det vi ser i browseren-->

<script>
//Retrieves the implied component and allow the use of said component in template
// Import <name of the import> from <path to the import>
// Import becomes tags available for use in template

// Allow App.vue access to other components
import mediaPlayer from "./components/universal/mediaPlayer";
import topbar from "./components/universal/topbar";
import sidebar from "./components/universal/sidebar";
import albumArt from "./components/content/albumArt";
import soundAndQueue from "./components/universal/soundAndQueue.vue";


export default {
  name: 'App',
  components: {
    mediaPlayer,
    topbar,
    sidebar,
    albumArt,
    soundAndQueue
  }
}

</script>

// bar styling
<style>


#app {

  font-family: Avenir, Helvetica, Arial, sans-serif, "Work Sans", "Ag header 1";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 90px;

}

body {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

/* This is added here, so that any updated 'content' always sits within its area and doesnt go behind the menus */
.contentFitter{
  position: relative;
  top: 4.25em;
  right: 0;
  left: 18%;
  bottom: 2em;
  width: 82%; /* 100% - sidebar@width */
}


</style>


