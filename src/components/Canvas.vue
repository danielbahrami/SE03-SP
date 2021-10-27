<template>
  <div>
    <div class="topnav">
      <img style="vertical-align: center" width="80" height="80"
           src="https://cdn.discordapp.com/attachments/779250503741079563/902135385298190357/tetete-removebg-preview.png">
      <span class="le-title">Alrakis</span>
      <input type="text" placeholder="search...">
    </div>
    
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

.sidenav {
  height: 840px;
  width: 200px;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  position: relative;
  padding-top: 5px;
  horiz-align: left;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: #1E1E1E;
  display: block;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  outline: none;
}

</style>