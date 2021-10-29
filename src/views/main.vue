<template>
  <div class="canvas">
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>

// import home from "../components/content/home";

export default {
  name: 'canvas',

  components: {

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
  margin: unset;
}
</style>