<template>
  <div class="home">
    <h1 class="recommended">Recommended Playlists</h1>
    <ul class="container">
      <li><img alt="" height="300" src="https://bit.ly/2ZtQVI2" width="300"/>Kap Kap<p class="Author">Jan Per </p></li>
      <li><img alt="" height="300" src="https://bit.ly/3nupEha" width="300"/>Zu Zu<p class="Author">Jan Per </p></li>
      <li><img alt="" height="300" src="https://bit.ly/3GtyoNm" width="300"/>Da Da<p class="Author">Jan Per </p></li>
    </ul>
    <h1 class="workout">Workout Playlists</h1>
    <ul class="container1">
      <li><img alt="" height="300" src="https://bit.ly/3nDyjOi" width="300"/><br>Bum Bum<p class="Author">Jan Per </p>
      </li>
      <li><img alt="" height="300" src="https://bit.ly/3GmRWmi" width="300"/><br>Li Li<p class="Author">Jan Per </p>
      </li>
      <li><img alt="" height="300" src="https://bit.ly/3ml6Z7Y" width="300"/><br>Fr Fr<p class="Author">Jan Per </p>
      </li>

    </ul>
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>

.recommended {
  text-align: left;
  margin-left: 100px;
  color: #D6CD81;
}

.workout {
  text-align: left;
  margin-left: 100px;
  color: #D6CD81;
}

.container {
  overflow: hidden;
  list-style: none;
}

.container li {
  float: left;
  text-align: center;
  margin-left: 4em;
  font-size: medium;
  color: white;
  font-weight: bolder;
}

.container1 li {
  float: left;
  text-align: center;
  margin-left: 4em;
  font-size: medium;
  color: white;
  font-weight: bolder;
  width: auto;
}

.Author {
  font-weight: normal;
  margin-top: 0;
}

.container img {
  display: block;
}
</style>