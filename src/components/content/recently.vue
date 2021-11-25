<template>
  <div class="recently">
    <h1 class="header1">Recently Played</h1>
    <div class="l1">
      <flask-recently></flask-recently>
    </div>
  </div>
</template>

<script>
import flaskRecently from "@/flask/flaskRecently";

export default {
  components: {
    flaskRecently
  }
}
</script>

<style scoped>

.recently {
  position: relative;
  top: 4.25em;
  right: 0;
  left: 18%;
  bottom: 2em;
  width: 82%; /* 100% - sidebar@width */
  overflow: hidden;
  font-size: 1em;
  text-align: left;
  color: white;
}
.l1 {
  overflow: hidden;
  list-style: none;
  /*grid-template-columns: repeat(4, 1fr);*/
color: #FFFFFF;
  /*grid-auto-rows: minmax(2em, auto);*/
  margin-bottom: 5em;
position: fixed;
  top: 20%;
width: 82%;
}
.l1 li{
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
  margin-left: 100px;
  color: #D6CD81;

}





</style>