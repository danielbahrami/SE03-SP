<template>
  <div class="sidebar">
    <div class="title">Menu</div>
    <div class="div1-sidebar">
      <router-link
        active-class="active"
        class="side-btn"
        exact
        tag="button"
        to="/"
      >
        <div class="link-container">
          <Home class="white" />
          Home
        </div>
      </router-link>
    </div>
    <div class="div2-sidebar">
      <router-link
        active-class="active"
        class="side-btn"
        exact
        tag="button"
        to="/playlist"
      >
        <div class="link-container">
          <Headphones class="white" />
          Playlists
        </div>
      </router-link>
    </div>
    <div class="div3-sidebar">
      <router-link
        active-class="active"
        class="side-btn"
        exact
        tag="button"
        to="/hitlists"
      >
        <div class="link-container">
          <Trophy class="white" />
          Hitlists
        </div>
      </router-link>
    </div>
    <div class="div4-sidebar">
      <router-link
        active-class="active"
        class="side-btn"
        exact
        tag="button"
        to="/genres"
      >
        <div class="link-container">
          <MusicNote class="white" />
          Genres
        </div>
      </router-link>
    </div>
    <div class="div5-sidebar">
      <router-link
        active-class="active"
        class="side-btn"
        exact
        tag="button"
        to="/recently"
      >
        <div class="link-container">
          <Clock class="white" />
          Recently
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import MusicNote from "vue-material-design-icons/Music.vue";
import Clock from "vue-material-design-icons/ClockOutline.vue";
import Trophy from "vue-material-design-icons/TrophyOutline.vue";
import Headphones from "vue-material-design-icons/Headphones.vue";
import Home from "vue-material-design-icons/HomeOutline.vue";
export default {
  components: {
    Clock,
    MusicNote,
    Trophy,
    Headphones,
    Home,
  },
};
</script>

<style scoped>
.link-container {
  display: flex;
}
.white {
  color: white;
}
.sidebar {
  background: rgb(30, 30, 30); /* TODO: Change to correct color */
  position: fixed; /* Fixed to the screen; always on the side */
  z-index: 10; /* Z-index to pull it on top */
  left: 0;
  top: 4.25em;
  bottom: 15em;
  width: 18%;

  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: scroll;

  /* Parent create grid */
  display: grid;
  /* 1 column with space of 1fr */
  grid-template-columns: 1fr;
  /* Make 6 rows with 1fr space */
  grid-template-rows: repeat(6, 1fr);
  /* No gaps between columns or rows */
  grid-column-gap: 0em;
  grid-row-gap: 0em;
}
/* Belonging to parent display:grid. grid-area means Row start, column start, row end, column end */
.title {
  grid-area: 1 / 1 / 2 / 2;
}
.div1-sidebar {
  grid-area: 2 / 1 / 3 / 2;
}
.div2-sidebar {
  grid-area: 3 / 1 / 4 / 2;
}
.div3-sidebar {
  grid-area: 4 / 1 / 5 / 2;
}
.div4-sidebar {
  grid-area: 5 / 1 / 6 / 2;
}
.div5-sidebar {
  grid-area: 6 / 1 / 7 / 2;
}

/* TYPOGRAPHY */
.title {
  text-align: left;
  color: #d6cd81;
  font-size: 38px;
  font-family: Ag header;
  font-weight: bolder;
  border-bottom: 0.1em solid #323232;
  padding-left: 0.5em;
}

/* BUTTONS */
.side-btn {
  font-family: "Work Sans";
  font-weight: normal;
  border: none;
  padding: 16px 0px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: grey;
  background-color: transparent;
  margin: unset;
  float: left;
  padding-left: 1em;
}

.side-btn:focus {
  outline: none;
}

.side-btn.active {
  position: relative;
  color: #d6cd81;
  font-weight: 600;
  margin-left: 0px;
}
</style>
