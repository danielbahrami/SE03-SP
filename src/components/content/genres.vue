<template>
  <div class="genres">
    <ul class="container">
      <li>
        <router-link to="/genres/jazz">
          <img
            alt=""
            height="220"
            src="../../assets/Genres/Jazz.png"
            width="200"
          />
        </router-link>
      </li>

      <li>
        <router-link to="/genres/rock">
          <img
            alt=""
            height="220"
            src="../../assets/Genres/Rock.png"
            width="200"
          />
        </router-link>
      </li>

      <li>
        <router-link to="/genres/pop">
          <img
            alt=""
            height="220"
            src="../../assets/Genres/Pop.png"
            width="200"
          />
        </router-link>
      </li>

      <li>
        <router-link to="/genres/classic">
          <img
            alt=""
            height="220"
            src="../../assets/Genres/Classic.png"
            width="200"
          />
        </router-link>
      </li>

      <li>
        <router-link to="/genres/country">
          <img
            alt=""
            height="220"
            src="../../assets/Genres/Country.png"
            width="200"
          />
        </router-link>
      </li>

      <li>
        <router-link to="/genres/blues">
          <img
            alt=""
            height="220"
            src="../../assets/Genres/Blues.png"
            width="200"
          />
        </router-link>
      </li>

      <li>
        <router-link to="/genres/soul">
          <img
            alt=""
            height="220"
            src="../../assets/Genres/Soul.png"
            width="200"
          />
        </router-link>
      </li>

      <li>
        <router-link to="/genres/dance">
          <img
            alt=""
            height="220"
            src="../../assets/Genres/Dance.png"
            width="200"
          />
        </router-link>
      </li>

      <li>
        <router-link to="/genres/hiphop">
          <img
            alt=""
            height="220"
            src="../../assets/Genres/HipHop.png"
            width="200"
          />
        </router-link>
      </li>

      <li>
        <router-link to="/genres/kpop">
          <img
            alt=""
            height="220"
            src="../../assets/Genres/Kpop.png"
            width="200"
          />
        </router-link>
      </li>

      <li>
        <router-link to="/genres/rap">
          <img
            alt=""
            height="220"
            src="../../assets/Genres/Rap.png"
            width="200"
          />
        </router-link>
      </li>

      <li>
        <router-link to="/genres/livemusic">
          <img
            alt=""
            height="220"
            src="../../assets/Genres/LiveMusic.png"
            width="200"
          />
        </router-link>
      </li>

      <li>
        <router-link to="/genres/rnb">
          <img
            alt=""
            height="220"
            src="../../assets/Genres/RnB.png"
            width="200"
          />
        </router-link>
      </li>

      <li>
        <router-link to="/genres/metal">
          <img
            alt=""
            height="220"
            src="../../assets/Genres/Metal.png"
            width="200"
          />
        </router-link>
      </li>

      <li>
        <router-link to="/genres/reggae">
          <img
            alt=""
            height="220"
            src="../../assets/Genres/Reggae.png"
            width="200"
          />
        </router-link>
      </li>

      <li>
        <router-link to="/genres/folk">
          <img
            alt=""
            height="220"
            src="../../assets/Genres/Folk.png"
            width="200"
          />
        </router-link>
      </li>
    </ul>
    <br /><br />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.genres {
  overflow: hidden;
  font-size: 1em;
  text-align: center;
  color: white;
}

.container {
  overflow: hidden;
  list-style: none;
  display: block;
  margin-left: 2em;
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
