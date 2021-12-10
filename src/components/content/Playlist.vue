<template>
  <div class="playlists">
    <h1 class="header1">Playlist</h1>
    <div class="l1">
      <flask-playlist></flask-playlist>
    </div>
  </div>
</template>

<script>
import flaskPlaylist from "@/flask/flaskPlaylist";

export default {
  components: {
    flaskPlaylist,
  },
};
</script>

<style scoped>
.playlists {
  overflow: hidden;

  font-size: 1em;
  text-align: center;
  color: white;
}
.l1 {
  overflow: hidden;
  list-style: none;
  /*grid-template-columns: repeat(4, 1fr);*/
  color: #ffffff;
  /*grid-auto-rows: minmax(2em, auto);*/
  margin-bottom: 5em;
  position: fixed;
  top: 20%;
  width: 82%;
}
.l1 li {
  position: static;
  height: auto;
  list-style-type: none;
  float: left;
  text-align: center;
  margin-left: 2em;
  margin-top: 2em;
  font-size: medium;
  color: white;
  font-weight: bolder;
  clear: left;
}
.header1 {
  text-align: left;
  margin-left: 1em;
  color: #d6cd81;
}
</style>
