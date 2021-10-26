<template>
<div>
  <h1 class="header1">Recommended Songs</h1>

  <img class="image1" src="#" />
  <img class="image2" src="#"/>
  <img class="image3" src="#" />
  <img class="image4" src="#" />
  <img class="image5" src="#"/>
  <img class="image6" src="#" />


  <h1 class="header2"> Workout Songs</h1>
</div>

</template>



<script>
export default {
  name: 'Homepage',
  props: {
    msg: String
  }
}
</script>

<style scoped>

.header1{
  position: absolute;
  width: 527px;
  height: 44px;
  left: 379px;
  top: 106px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #D6CD81;

}

.header2{
  position: absolute;
  width: 406px;
  height: 79px;
  left: 382px;
  top: 528px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #D6CD81;

}

.image1{
  position: absolute;
  width: 300px;
  height: 300px;
  left: 379px;
  top: 165px;


}
.image2{
  position: absolute;
  width: 300px;
  height: 300px;
  left: 721px;
  top: 165px;
}
.image3{
  position: absolute;
  width: 300px;
  height: 296px;
  left: 1061px;
  top: 167px;


}
.image4{
  position: absolute;
  width: 300px;
  height: 300px;
  left: 379px;
  top: 585px;
}
.image5{position: absolute;
  width: 306px;
  height: 297px;
  left: 715px;
  top: 588px;}
.image6{position: absolute;
  width: 297px;
  height: 297px;
  left: 1064px;
  top: 585px;}


</style>