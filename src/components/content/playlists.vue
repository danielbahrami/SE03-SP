<template>
  <div class="playlists">
    <h1 class="header1">SpecificPlaylist:</h1>
    <div class="l1">
      <flask-playlist></flask-playlist>
    </div>
  </div>
</template>

<script>
import flaskPlaylist from "@/flask/flaskPlaylist";

export default {
  components: {
    flaskPlaylist
  }
}
</script>

<style scoped>

.playlists {
  color: white;
  font-weight: bolder;
}

.l1 {
  position: absolute;
  width: 70%;
  height: 0%;
  left: 20%;
  top: 25%;
  border: 2px solid #323232;

}
.header1 {
  position: absolute;
  width: 217px;
  height: 43px;
  left: 329px;
  top: 109px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #D6CD81;


}



</style>