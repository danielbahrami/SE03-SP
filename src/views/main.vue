<template>
  <div class="canvas">
    <Sidebar/>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/universal/sidebar'

export default {
  name: 'canvas',

  components: {
    Sidebar
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