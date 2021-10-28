<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Top />
    <Mediaplayer />
    <AlbumArt />
  </div>
</template>

<script>
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