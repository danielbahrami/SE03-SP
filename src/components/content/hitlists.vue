<template>
  <div class="hitlists">
    <div class="classtext">
      <br><br><br>
      <h1 class="great">The greatest hits right now</h1>
      <ul class="container">
        <li><img class="prev" src="../../assets/arrow_prev.png"></li>
        <li><img height="180" src="../../assets/albumArts/Bruno.png" width="175"/>
          <p class="greatText">Bruno Mars</p></li>
        <li><img height="180" src="../../assets/albumArts/starboy.png" width="175"/>
          <p class="greatText">The Weeknd</p></li>
        <li><img height="180" src="../../assets/albumArts/suit&tie.png" width="175"/>
          <p class="greatText">Justin Timberlake</p></li>
        <li><img height="180" src="../../assets/albumArts/katy_perry.png" width="175"/>
          <p class="greatText"> Katy Perry</p></li>
        <li><img height="180" src="../../assets/albumArts/Ariana.png" width="175"/>
          <p class="greatText">Ariana Grande</p></li>
        <li><img height="180" src="../../assets/albumArts/Justin.png" width="175"/>
          <p class="greatText"> Justin Bieber</p></li>
        <li><img class="next" src="../../assets/arrow_next.png"></li>
      </ul>
      <h1 class="new">New Music</h1>
      <ul class="container">
        <li><img class="prev" src="../../assets/arrow_prev.png"></li>
        <li><img height="180" src="../../assets/albumArts/Selena.png" width="175"/>
          <p class="newText"></p>Selena Gomez
        </li>
        <li><img height="180" src="../../assets/albumArts/kygo.png" width="175"/>
          <p class="newText"></p>Kygo
        </li>
        <li><img height="180" src="../../assets/albumArts/weeknd.png" width="175"/>
          <p class="newText"></p>The Weeknd
        </li>
        <li><img height="180" src="../../assets/albumArts/DNCE.png" width="175"/>
          <p class="newText"></p>DNCE
        </li>
        <li><img height="180" src="../../assets/albumArts/Justin.png" width="175"/>
          <p class="newText"></p>Justing Bieber
        </li>
        <li><img height="180" src="../../assets/albumArts/David.png" width="175"/>
          <p class="newText"></p>David Guetta
        </li>
        <li><img class="next" src="../../assets/arrow_next.png"></li>
      </ul>
      <h1 class="Old">Old but Gold</h1>
      <ul class="container">
        <li><img class="prev" src="../../assets/arrow_prev.png"></li>
        <li><img height="180" src="../../assets/albumArts/Ricky.png" width="175"/>
          <p class="oldText">Ricky Martin</p></li>
        <li><img height="180" src="../../assets/albumArts/Michael.png" width="175"/>
          <p class="oldText">Michael Jackson</p></li>
        <li><img height="180" src="../../assets/albumArts/icecube.png" width="175"/>
          <p class="oldText">IceCube</p></li>
        <li><img height="180" src="../../assets/albumArts/Phil.png" width="175"/>
          <p class="oldText">Phil Collins</p></li>
        <li><img height="180" src="../../assets/albumArts/Genesis.png" width="175"/>
          <p class="oldText">Genesis</p></li>
        <li><img height="180" src="../../assets/albumArts/AC-DC.png" width="175"/>
          <p class="oldText">AC/DC</p></li>
        <li><img class="next" src="../../assets/arrow_next.png"></li>
      </ul>
      <br><br><br>
    </div>
  </div>
</template>
<script>

export default {
}
</script>
<style scoped>

.prev {
  margin-top: 65px;
}

.next {
  margin-top: 65px;
}

.newText {
  font-size: 15px;
  text-align: center;
}

.greatText {
  font-size: 15px;
  text-align: center;
}

.oldText {
  font-size: 15px;
  text-align: center;
}

.great {
  text-align: left;
  margin-left: 127px;
  color: #D6CD81;
}

.new {
  text-align: left;
  margin-left: 127px;
  color: #D6CD81;
}

.Old {
  text-align: left;
  margin-left: 127px;
  color: #D6CD81;
}

.container {
  overflow: hidden;
  list-style: none;
  padding-bottom: -20px;
}

.container li {
  float: left;
  text-align: center;
  margin-left: 20px;
  font-size: medium;
  color: white;
  font-weight: bolder;
}

.classtext{
  padding-left: 400px;
  margin-bottom: -60px;
}
</style>