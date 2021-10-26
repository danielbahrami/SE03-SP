<template>

  <div>
    <h1 class="header1">SpecificPlaylist:</h1>
    <hr class="line1">
    <hr class="line2">
    <hr class="line3">
    <hr class="line4">
    <hr class="line4">
    <hr class="line5">
    <hr class="line6">
    <hr class="line7">
    <h2 class="name">Name</h2>
    <h2 class="artist">Artist</h2>
    <h2 class="album">Album</h2>

  </div>




</template>

<script>
export default {
  name: "Specificplaylist"
}
</script>

<style scoped>

.header1{
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #D6CD81;
}
.line1{position: absolute;
  width: 1148px;
  height: 0px;
  left: 307px;
  top: 165px;

  border: 2px solid #323232;}
.line2{position: absolute;
  width: 1148px;
  height: 0px;
  left: 306px;
  top: 206px;

  border: 2px solid #323232;}
.line3{position: absolute;
  width: 1133px;
  height: 0px;
  left: 307px;
  top: 256px;

  border: 2px solid #201F1F;
  transform: rotate(-0.05deg);}
.line4{position: absolute;
  width: 1133px;
  height: 0px;
  left: 306px;
  top: 306px;

  border: 2px solid #201F1F;
  transform: rotate(-0.05deg);}
.line5{position: absolute;
  left: 0%;
  right: 0%;
  top: 100%;
  bottom: 0%;

  border: 2px solid #201F1F;
  transform: rotate(-0.05deg);}
.line6{position: absolute;
  left: 0%;
  right: 0%;
  top: 100%;
  bottom: 0%;
  border: 2px solid #201F1F;
  transform: rotate(-0.05deg);}
.line7{position: absolute;
  left: 0%;
  right: 0%;
  top: 100%;
  bottom: 0%;
  border: 2px solid #201F1F;
  transform: rotate(-0.05deg);}
.artist{position: absolute;
  width: 176px;
  height: 33px;
  left: 720px;
  top: 169px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #FFFFFF;}
.album{position: absolute;
  width: 113px;
  height: 23px;
  left: 1065px;
  top: 169px;

  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;

  /* or 150% */
  letter-spacing: -0.02em;

  color: #FFFFFF;}
.name{
  position: absolute;
  width: 110px;
  height: 30px;
  left: 329px;
  top: 169px;

  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;

  /* identical to box height, or 150% */
  letter-spacing: -0.02em;

  color: #FFFFFF;}





</style>