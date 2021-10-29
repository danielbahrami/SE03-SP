<template>
  <div class="canvas">
    <Sidebar/>
    <topbar/>
    <album-art/>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/universal/sidebar'
import topbar from "../components/universal/topbar";
import albumArt from "../components/content/albumArt";
// import home from "../components/content/home";

export default {
  name: 'canvas',

  components: {
    Sidebar,
    topbar,
    albumArt,
    // home,
  }
}
</script>

<style>
.canvas {
  display: grid;
  grid-template-columns: 1fr 5fr;
  background-color: #1e1e1e;
  height: 100vh;
  width: 100vw;
}

.content {
  background-color: black;
  margin: 0px 0px 0px 0px;
}
</style>