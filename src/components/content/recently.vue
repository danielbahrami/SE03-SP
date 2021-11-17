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
  right: 10%;
  left: 18%;
  bottom: 2em;
  width: 82%;

  overflow: hidden;

  font-size: 15px;
  text-align: center;
  color: white;

  display: grid;
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
  text-align: left;
  margin-left: 100px;
  color: #D6CD81;


}



</style>