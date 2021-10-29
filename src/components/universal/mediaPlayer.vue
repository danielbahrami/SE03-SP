<template>
  <div class="parent-media">
    <div class="div1-media">
      <button aria-label="Song back" class="music__back music">
        <BackwardIcon/>
      </button>
    </div>
    <div class="div2-media">
      <button v-if="isHidden" aria-label="Song Play" class="music__play music" v-on:click="isHidden = !isHidden">
        <PlayIcon/>
      </button>
      <clip-loader v-if="!isHidden" :color="color1" :loading="loading" :size="size"></clip-loader>
    </div>
    <div class="div3-media">
      <button aria-label="Song forward" class="music__forward music">
        <ForwardIcon/>
      </button>
    </div>
    <div class="div4-media">
      <hr>
    </div>
    <!-- TODO: change to actual repeat button -->
    <div class="div5-media">
      <button aria-label="Song repeat" class="music__repeat music">
        <RepeatIcon/>
      </button>
    </div>
    <div class="div6-media">
      <button aria-label="Song shuffle" class="music__random music">
        <ShuffleIcon/>
      </button>
    </div>
    <div class="div7-media">
      <button aria-label="Add Song?" class="music__plus music">
        <AddIcon/>
      </button>
    </div>
    <div class="div8-media">
      <button aria-label="Mark as favorite" class="music__favorite music">
        <StarIcon/>
      </button>
    </div>
  </div>
</template>
<script>
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import RepeatIcon from 'vue-material-design-icons/Repeat.vue'
import BackwardIcon from 'vue-material-design-icons/SkipBackward.vue'
import PlayIcon from 'vue-material-design-icons/Play.vue'
import ForwardIcon from 'vue-material-design-icons/SkipForward.vue'
import ShuffleIcon from 'vue-material-design-icons/Shuffle.vue'
import AddIcon from 'vue-material-design-icons/Plus.vue'
import StarIcon from 'vue-material-design-icons/Star.vue'

export default {
  name: 'Mediaplayer',
  data() {
    return {
      color: '#cc181e',
      color1: '#5bc0de',
      size: '20px',
      margin: '2px',
      radius: '2px',
      isHidden: true,
    }
  },
  components: {
    ClipLoader,
    RepeatIcon,
    BackwardIcon,
    PlayIcon,
    ForwardIcon,
    ShuffleIcon,
    AddIcon,
    StarIcon
  }
}
</script>

<style scoped src="../../assets/css/Mediaplayer.css">
/* @import '../assets/css/Mediaplayer.css'; */
</style>