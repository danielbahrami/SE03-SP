<template>
  <div>
    <div class="topnav">
      <img style="vertical-align: center" width="80" height="80"
           src="https://cdn.discordapp.com/attachments/779250503741079563/902135385298190357/tetete-removebg-preview.png">
      <span class="le-title">Alrakis</span>
      <input type="text" placeholder="search...">
    </div>
    <div class="sidenav">
      <button class="home-dropdown">Home</button>
      <button class="playlist-dropdown">Playlists</button>
      <button class="hitlist-dropdown">Hitlists</button>
      <button class="genre-dropdown">Genres</button>
      <button class="recent-dropdown">Recently played</button>
      <div class="home-container">
        <a>link #1</a>
      </div>
      <div class="playlist-container">
        <a>link #1</a>
      </div>
      <div class="hitlist-container">
        <a>link #1</a>
      </div>
      <div class="genre-container">
        <a>link #1</a>
      </div>
      <div class="recent-container">
        <a>link #1</a>
      </div>
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
  
  width: 200px;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  position: relative;
  padding-top: 5px;
  horiz-align: left;
}

</style>