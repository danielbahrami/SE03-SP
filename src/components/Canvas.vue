<template>
  <div class="canvas">
    <div class="topnav">
      <img class="le-icon" width="80" height="80"
           src="https://cdn.discordapp.com/attachments/897789111509844029/902849681950908446/Star.png">
      <span class="le-title" style="color: #FFFFFF">Alrakis</span>
      <input type="text" placeholder="search...">
      <div class="topIcon">
        <i class="fas fa-user" style="font-size: 40px"></i>
        <i class="fab fa-jedi-order" style="font-size: 40px"></i>
      </div>
    </div>
    <div class="sidenav">
      <a href="#" style="color: #FFFFFF">Home</a>
      <a href="#" style="color: #FFFFFF">Playlist</a>
      <a href="#" style="color: #FFFFFF">Genre</a>
      <a href="#" style="color: #FFFFFF">Recently played</a>
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
  display: flex;
  align-items: center;
}

.le-icon{
  margin-left: 10px;
}

.le-title {
  font-family: Arial;
  font-size: 80px;
  margin-left: 10px;
}

.topnav input[type=text] {
  float: right;
  padding: 7px;
  border: none;
  font-size: 17px;
  border-radius: 7px;
  margin-left: 380px;
}

.fa-jedi-order{
  margin-left: 25px;
}

.fa-user{
  margin-left: 780px;
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

.canvas{
  background-color: #1E1E1E;
}

</style>