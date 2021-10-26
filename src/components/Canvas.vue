<template>
<div class="topnav">
  <img src="#">
  <h1>Alrakis</h1>
  <input type="text" placeholder="search...">
</div>
</template>
<script>
export default {
  name: 'Canvas'
}
</script>
<style scoped>
.topnav{
  overflow: hidden;
  background: #3F3F3F;
}
.topnav input[type=text]{
  float: right;
  padding: 6px;
  border: none;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 17px;
}
body{
  background: #1E1E1E;
}
</style>