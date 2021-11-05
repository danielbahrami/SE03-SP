<template>
  <div class="recently">
    <h1 class="title">Recently played</h1>

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
</style>