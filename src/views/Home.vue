<template>
  <div class="home">
    <h1>Recommended Playlists</h1>
    <ul class="container">
      <li><img src="https://bit.ly/2ZtQVI2" width="300" height="300" alt="" />Kap Kap<p class="Author">Jan Per </p> </li>
      <li><img src="https://bit.ly/3nupEha" width="300" height="300" alt="" />Zu Zu<p class="Author">Jan Per </p></li>
      <li><img src="https://bit.ly/3GtyoNm" width="300" height="300" alt="" />Da Da<p class="Author">Jan Per </p></li>
      <li><img src="https://bit.ly/3nDyjOi" width="300" height="300" alt="" />Bum Bum<p class="Author">Jan Per </p></li>
      <li><img src="https://bit.ly/3GmRWmi" width="300" height="300" alt="" />Li Li<p class="Author">Jan Per </p></li>
      <li><img src="https://bit.ly/3ml6Z7Y" width="300" height="300" alt="" />Fr Fr<p class="Author">Jan Per </p></li>

    </ul>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.container {
  overflow:hidden;
  list-style:none;
}

.container li {
  float:left;
  text-align:center;
  margin-left:4em;
  font-size: medium;
  color: white;
  font-weight: bolder;

}
.Author{
  font-weight: normal;
  margin-top: 0;
}

.container img {
  display:block;
}
</style>