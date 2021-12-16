<template>
  <div class="app">
    <topbar />
    <sidebar />
    <album-art />
    <div class="contentFitter">
      <router-view />
    </div>
    <soundAndQueue />
    <!-- 
        The slideout need to be outside of all the containers so it can fill the entire screen
        *******Works with pressing escape 
    -->
    <slide-out
      dock="right"
      :visible.sync="visible"
      title="Queue"
      size="20%"
      customClass="slideOut"
    >
      <section>
        <div class="queueImageHolder">
          <img src="./assets/album-arts/Ariana.png" />
        </div>
        <div class="queueTextHolder">
          <p class="songAndArtist">
            <strong> Song Name </strong> <br />
            Artist
          </p>
        </div>
      </section>

      <section>
        <div class="queueImageHolder">
          <img src="./assets/album-arts/Genesis.png" />
        </div>
        <div class="queueTextHolder">
          <p class="songAndArtist">
            <strong> Song Name </strong> <br />
            Artist
          </p>
        </div>
      </section>
    </slide-out>
    <!-- Button to activate slideout -->
    <button class="Queue" @click="visible = true"><List /></button>
    <media-player />
  </div>
</template>
<!--template displayer alt på localhost porten. I.e det vi ser i browseren-->

<script>
//Retrieves the implied component and allow the use of said component in template
// Import <name of the import> from <path to the import>
// Import becomes tags available for use in template

// Allow App.vue access to other components
import mediaPlayer from "./components/universal/MediaPlayer";
import topbar from "./components/universal/Topbar";
import sidebar from "./components/universal/Sidebar";
import albumArt from "./components/universal/AlbumArt";
import soundAndQueue from "./components/universal/SoundAndQueue.vue";

//Import icon for slideout activation button
import List from "vue-material-design-icons/FormatListBulleted.vue";

//Import the slideout component and css
import SlideOut from "@hyjiacan/vue-slideout";
import "@hyjiacan/vue-slideout/lib/slideout.css";

export default {
  name: "App",
  components: {
    mediaPlayer,
    topbar,
    sidebar,
    albumArt,
    soundAndQueue,
    SlideOut,
    List,
  },
  data() {
    return {
      // this is to set the slideout visibility
      visible: false,
    };
  },
  methods: {
    onClosing(e) {
      // prevent close and wait
      e.pause = true;
      // close after 3 seconds
      setTimeout(() => {
        // assign true to close, do nothing or assign false to cancel close.
        e.resume = true;
      }, 3000);
    },
  },
};
</script>

<style>
@import url("fonts/work-sans/stylesheet.css");
@import url("fonts/roboto/stylesheet.css");

* {
  font-family: "work_sansregular" !important;
}

app {
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
.contentFitter {
  position: relative;
  top: 4.25em;
  right: 0;
  left: 18%;
  bottom: 2em;
  width: 82%; /* 100% - sidebar@width */
}

/* position button for slideout so it is where it should be according to design */
.Queue {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 10;

  background: none;
  color: inherit;
  border: none;
}

/* Styling for slideout */
.slideOut .vue-slideout-layout .vue-slideout-header {
  border-top: none;
  border-bottom: 2px solid black;
}
.slideOut .vue-slideout-layout .vue-slideout-header .vue-slideout-title-text {
  /* font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */
  font-weight: 700;
  color: #d6cd81;
  font-size: 2.125em;
}
.slideOut > .vue-slideout-layout {
  background-color: rgb(30, 30, 30);
  color: white;
}
.slideOut section {
  display: flex;
  height: 4.6875em;
  margin: 1em;
}
.slideOut section .queueImageHolder {
  width: 4.6875em;
  height: 4.6875em;
}
.slideOut section .queueTextHolder {
  height: 4.6875em;
  margin-left: 0.5em;
  color: rgba(203, 203, 203, 80);
}
.slideOut section .queueTextHolder p {
  margin: unset;
  font-size: 0.9em;
}
.slideOut section .queueTextHolder p strong {
  font-size: 1.25em;
}
.slideOut section .queueImageHolder img {
  float: right;
  max-width: 4.6875em;
  max-height: 4.6875em;
}

.slideOut .vue-slideout-btn-close svg {
  fill: white;
}
</style>
