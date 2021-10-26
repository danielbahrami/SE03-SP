<template>
  <div class="topnav">
    <img style="vertical-align: center" width="80" height="80"
         src="https://cdn.discordapp.com/attachments/779250503741079563/902135385298190357/tetete-removebg-preview.png">
    <span class="le-title">Alrakis</span>
    <input type="text" placeholder="search...">
  </div>
</template>
<script>
export default {
  name: 'Canvas'
}
</script>

<style scoped>
.topnav {
  overflow: hidden;
  background: #3F3F3F;
}

.le-title {
  font-family: Arial;
  font-size: 80px;
}

.topnav input[type=text] {
  float: right;
  padding: 7px;
  border: none;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 17px;
  display: flex;
  align-items: center;
}

body {
  background: #1E1E1E;
}
</style>