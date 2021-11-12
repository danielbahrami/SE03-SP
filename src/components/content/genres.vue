<template>
  <div class="genres">
    <h1 class="title">Genres</h1>
    <ul class="container">
      <div class="l1"></div>
      <li><a href="#"> <img alt="" height="200" src="../../assets/Genres/Jazz.png" width="200"/></a></li>

      <li><a href="#"> <img alt="" height="200"  src="../../assets/Genres/Rock.png" width="200"/></a></li>

      <li> <a href="#"> <img alt="" height="200" src="../../assets/Genres/Pop.png" width="200"/></a></li>

      <li> <a href="#"> <img alt="" height="200" src="../../assets/Genres/Classic.png" width="200"/></a></li>

      <li> <a href="#"> <img alt="" height="200" src="../../assets/Genres/Country.png" width="200"/></a></li>

      <li> <a href="#"> <img alt="" height="200" src="../../assets/Genres/Blues.png" width="200"/></a></li>

      <li> <a href="#"> <img alt="" height="200" src="../../assets/Genres/Soul.png" width="200"/></a></li>

      <li> <a href="#"> <img alt="" height="200" src="../../assets/Genres/Dance.png" width="200"/></a></li>

      <li> <a href="#"> <img alt="" height="200" src="../../assets/Genres/HipHop.png" width="200"/></a></li>

      <li> <a href="#"> <img alt="" height="200" src="../../assets/Genres/Kpop.png" width="200"/></a></li>

      <li> <a href="#"> <img alt="" height="200" src="../../assets/Genres/Rap.png" width="200"/></a></li>

      <li> <a href="#"> <img alt="" height="200" src="../../assets/Genres/LiveMusic.png" width="200"/></a></li>

      <li> <a href="#"> <img alt="" height="200" src="../../assets/Genres/RnB.png" width="200"/></a></li>

      <li> <a href="#"> <img alt="" height="200" src="../../assets/Genres/Metal.png" width="200"/></a></li>

      <li> <a href="#"> <img alt="" height="200" src="../../assets/Genres/Reggae.png" width="200"/></a></li>

      <li> <a href="#"> <img alt="" height="200" src="../../assets/Genres/Folk.png" width="200"/></a></li>


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

.title {
  text-align: left;
  margin-left: 100px;
  color: #D6CD81;
}

.container {
  overflow: hidden;
  list-style: none;
  /*grid-template-columns: repeat(4, 1fr);*/
  display: block;
  /*grid-auto-rows: minmax(2em, auto);*/

}

.container li {
  list-style-type: none;
  float: left;
  text-align: center;
  margin-left: 2em;
  margin-top: 2em;
  font-size: medium;
  color: white;
  font-weight: bolder;


}


.container img {
  display: block;
  border-radius: 0.4em;
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