<template>
  <div class="genres">
    <ul class="container">
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
  top: 1em;
  right: 10%;
  left: 10%;
  width: 90%;
  margin-bottom: 10%;

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


</style>