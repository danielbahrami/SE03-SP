<template>
  <div class="playlists">
    <h1 class="header1">SpecificPlaylist:</h1>
    <hr class="l1"><hr class="l2"><hr class="l3"><hr class="l4"><hr class="l5">
    <h2 class="name">Name</h2><h2 class="artist">Artist</h2><h2 class="album">Album</h2>
    <h3 class="s1">Song 1</h3><h3 class="s2">Song 2</h3><h3 class="s3">Song 3</h3>
    <h3 class="a1">Artist 1</h3><h3 class="a2">Artist 2</h3><h3 class="a3">Artist 3</h3>
    <h3 class="al1">Album 1</h3><h3 class="al2">Album 2</h3><h3 class="al3">Album 3</h3>
    <i  class="i1 fas fa-star"></i><i  class="i2 fas fa-star"></i><i  class="i3 fas fa-star"></i>
    <i class="i4 fas fa-plus"></i><i class="i5 fas fa-plus"></i><i class="i6 fas fa-plus"></i>
    <i class="i7 fas fa-ellipsis-v"></i><i class="i8 fas fa-ellipsis-v"></i><i class="i9 fas fa-ellipsis-v"></i>

  </div>


</template>

<script>
    export default {

    }
</script>

<style scoped>

.playlists{
  overflow:hidden;
  list-style:none;
  float:left;
  text-align:center;
  margin-left:4em;
  font-size: medium;
  color: white;
  font-weight: bolder;
}

.l1{

  position: absolute;
  width: 1148px;
  height: 0px;
  left: 307px;
  top: 165px;

  border: 2px solid #323232;
}
.l2{position: absolute;
  width: 1148px;
  height: 0px;
  left: 307px;
  top: 206px;

  border: 2px solid #323232;}
.l3{position: absolute;
  width: 1148px;
  height: 0px;
  left: 307px;
  top: 256px;

  border: 2px solid #201F1F;
  transform: rotate(-0.05deg);}
.l4{position: absolute;
  width: 1148px;
  height: 0px;
  left: 307px;
  top: 306px;

  border: 2px solid #201F1F;
  transform: rotate(-0.05deg);}
.l5{
  position: absolute;
  width: 1148px;
  height: 0px;
  left: 307px;
  top: 356px;

  border: 2px solid #201F1F;
  transform: rotate(-0.05deg);

}
.header1{
  position: absolute;
  width: 217px;
  height: 43px;
  left: 329px;
  top: 109px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #D6CD81;
}
.artist{position: absolute;
  position: absolute;
  width: 176px;
  height: 33px;
  left: 685px;
  top: 169px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #FFFFFF;}
.album{position: absolute;
  width: 113px;
  height: 23px;
  left: 1065px;
  top: 169px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;

  /* or 150% */
  letter-spacing: -0.02em;

  color: #FFFFFF;}
.name{
  position: absolute;
  width: 110px;
  height: 30px;
  left: 329px;
  top: 169px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #FFFFFF;}
.s1{position: absolute;
  width: 116px;
  height: 31px;
  left: 329px;
  top: 212px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #FFFFFF;}
.s2{position: absolute;
  width: 116px;
  height: 31px;
  left: 329px;
  top: 265px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #FFFFFF;}

.s3{position: absolute;
  width: 116px;
  height: 31px;
  left: 329px;
  top: 310px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #FFFFFF;}
.a1{position: absolute;
  width: 116px;
  height: 31px;
  left: 720px;
  top: 218px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #FFFFFF;}
.a2{position: absolute;
  width: 116px;
  height: 31px;
  left: 720px;
  top: 265px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #FFFFFF;}
.a3{
  position: absolute;
  width: 116px;
  height: 31px;
  left: 720px;
  top: 310px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #FFFFFF;
}
.al1{position: absolute;
  width: 162px;
  height: 26px;
  left: 1050px;
  top: 218px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #FFFFFF;}
.al2{position: absolute;
  width: 138px;
  height: 29px;
  left: 1065px;
  top: 265px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #FFFFFF;}
.al3{
  position: absolute;
  width: 141px;
  height: 27px;
  left: 1065px;
  top: 312px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #FFFFFF;}
.i1{
  color: #2C3539;
  position: absolute;
  left: 1333px;
  top: 245px;
  border-radius: 0px;
}
.i2{
  color: #2C3539;
  position: absolute;
  left: 1333px;
  top: 290px;
  border-radius: 0px;
}
.i3{
  color: #2C3539;
  position: absolute;
  left: 1333px;
  top: 335px;
  border-radius: 0px;
}
.i4{
  color: #FFFFFF;
  position: absolute;
  left: 1376px;
  top: 245px;
}
.i5{
  color: #FFFFFF;

  position: absolute;
  left: 1376px;
  top: 290px;
}
.i6{
  color: #FFFFFF;
  position: absolute;
  left: 1376px;
  top: 335px;
}
.i7{
  color: #FFFFFF;
  position: absolute;
  left: 1418px;
  top: 245px;
}
.i8{
  color: #FFFFFF;
  position: absolute;
  left: 1418px;
  top: 290px;
}
.i9{
  color: #FFFFFF;
  position: absolute;
  left: 1418px;
  top: 335px;
}


</style>