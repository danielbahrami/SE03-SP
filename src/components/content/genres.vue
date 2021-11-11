<template>
  <div class="genres">
    <h1 class="title">Genres</h1>
    <ul class="container">
      <li><a href="#"> <img alt="" height="175" src="../../assets/Genres/Jazz.png" width="175"/>Genre 1</a></li>

      <li><a href="#"> <img alt="" height="175"  src="../../assets/Genres/Rock.png" width="175"/>Genre 2</a></li>

      <li> <a href="#"> <img alt="" height="175" src="../../assets/Genres/Pop.png" width="175"/>Genre 3</a><li>

      <li> <a href="#"> <img alt="" height="175" src="../../assets/Genres/Classic.png" width="175"/>Genre 4 </a></li>

      <li> <a href="#"> <img alt="" height="175" src="../../assets/Genres/Country.png" width="175"/>Genre 5 </a></li>

      <li> <a href="#"> <img alt="" height="175" src="../../assets/Genres/Blues.png" width="175"/>Genre 6</a></li>

      <li> <a href="#"> <img alt="" height="175" src="../../assets/Genres/Soul.png" width="175"/>Genre 7</a></li>

      <li> <a href="#"> <img alt="" height="175" src="../../assets/Genres/Dance.png" width="175"/>Genre 8</a></li>

      <li> <a href="#"> <img alt="" height="175" src="../../assets/Genres/HipHop.png" width="175"/>Genre 9</a></li>

      <li> <a href="#"> <img alt="" height="175" src="../../assets/Genres/Kpop.png" width="175"/>Genre 10</a></li>

      <li> <a href="#"> <img alt="" height="175" src="../../assets/Genres/Rap.png" width="175"/>Genre 11</a></li>

      <li> <a href="#"> <img alt="" height="175" src="../../assets/Genres/LiveMusic.png" width="175"/>Genre 12</a></li>

      <li> <a href="#"> <img alt="" height="175" src="../../assets/Genres/RnB.png" width="175"/>Genre 13</a></li>

      <li> <a href="#"> <img alt="" height="175" src="../../assets/Genres/Metal.png" width="175"/>Genre 14</a></li>

      <li> <a href="#"> <img alt="" height="175" src="../../assets/Genres/Reggae.png" width="175"/>Genre 15</a></li>

      <li> <a href="#"> <img alt="" height="175" src="../../assets/Genres/Folk.png" width="175"/>Genre 16</a></li>


    </ul>
    <br><br>
  </div>
</template>

<script>

export default {}
</script>

<style scoped>

.genres {
  position: relative;
  top: 4.25em;
  right: 0;
  left: 18%;
  bottom: 2em;
  width: 82%;

  overflow: hidden;

  font-size: 15px;
  text-align: center;
  color: white;

  display: grid;

}

.title {
  text-align: left;
  margin-left: 100px;
  color: #D6CD81;
}

.container {
  overflow: hidden;
  list-style: none;
}

.container li {
  list-style-type: none;
  float: left;
  text-align: center;
  margin-left: 4em;
  font-size: medium;
  color: white;
  font-weight: bolder;
}

.container1 li {
  list-style-type: none;
  float: left;
  text-align: center;
  margin-left: 4em;
  font-size: medium;
  color: white;
  font-weight: bolder;
  width: auto;
}

.container img {
  display: block;
}
</style>