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
  width: fit-content;
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
  width: fit-content;
  position: absolute;
  height: fit-content;
  left: 7em;
  top: 2em;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 2em;
  line-height: 1em;
  letter-spacing: -0.02em;
  color: #D6CD81;


}



</style>