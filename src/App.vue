<template>
  <div class="app">
    <topbar/>
    <sidebar/>
    <album-art/>
    <div class="contentFitter">
      <router-view/>
    </div>
    <soundAndQueue/>
    <!-- The slideout need to be outside of all the containers so it can fill the entire screen -->
    <slide-out dock="right" :visible.sync="visible" title="Queue">
      <p>Some song</p>
    </slide-out>
    <!-- Button to activate slideout -->
     <button class="Queue" @click="visible = !visible">Show</button>
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

import SlideOut from '@hyjiacan/vue-slideout'
import '@hyjiacan/vue-slideout/lib/slideout.css'



export default {
  name: 'App',
  components: {
    mediaPlayer,
    topbar,
    sidebar,
    albumArt,
    soundAndQueue,
    SlideOut
  },
  data() {
    return {
      // this is to set the slideout visibility
      visible: false,
    }
  },
  methods: {
    onClosing (e) {
      // prevent close and wait
      e.pause = true
      // close after 3 seconds
      setTimeout(() => {
        // assign true to close, do nothing or assign false to cancel close.
        e.resume = true
      }, 3000)
    }
  },
}

</script>

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

/* position button for slideout so it is where it should be according to design */
.Queue {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1000;

  background: none;
  color: inherit;
  border: none;
}


</style>


