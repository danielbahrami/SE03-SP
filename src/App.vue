<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Top />
    <Mediaplayer />
    <AlbumArt />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Top from './components/Top.vue'
import Mediaplayer from './components/Mediaplayer.vue'
import AlbumArt from './components/AlbumArt.vue'

export default {
  name: 'App',
  components: {
    Top,
    Mediaplayer,
    AlbumArt
  }
}
</script>
<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css');
</style>