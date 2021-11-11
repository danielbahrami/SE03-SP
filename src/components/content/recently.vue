<template>
  <div class="recently">
    <h1 class="title">Recently played</h1>
    <div class="l1"></div>
  </div>
</template>

<script>

export default {
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

  font-size: 15px;
  text-align: center;
  color: white;

}
.title{
  text-align: left;
  margin-left: 100px;
  color: #D6CD81;
}

.l1{
  position: absolute;
  width: 100%;
  height: 0em;
  left: 0em;
  top: 4.5em;
  border: 2px solid #323232;
}
</style>