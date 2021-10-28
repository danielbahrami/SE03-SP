<template>
  <div class="sidebar">
    <div class="title">
      Menu
    </div>
    <div class="menu-items">
      <router-link to="/" active-class="active" tag="button" exact class="side-btn">
        <div class="link-container">
          Home
        </div>
      </router-link>
      <router-link to="/playlists" active-class="active" tag="button" exact class="side-btn">
        <div class="link-container">
          Playlists
        </div>
      </router-link>
      <router-link to="/hitlists" active-class="active" tag="button" exact class="side-btn">
        <div class="link-container">
          Hitlists
        </div>
      </router-link>
      <router-link to="/genres" active-class="active" tag="button" exact class="side-btn">
        <div class="link-container">
          Genres
        </div>
      </router-link>
      <router-link to="/recently" active-class="active" tag="button" exact class="side-btn">
        <div class="link-container">
          Recently
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.title {
  color: #D6CD81;
  font-size: 38px;
  font-family: Ag header 1;
  font-weight: bolder;
  margin: 0px 0px 5px 10px;
}

.menu-items {
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  margin-left: 6px;
}

.menu-items > * {
  margin-top: 30px;
}
.side-btn {
  font-family: "Work Sans";
  font-weight: normal;
  border: none;
  padding: 16px 0px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: grey;
  background-color: transparent;
}
.side-btn:focus {
  outline: none;
}
.side-btn.active {
  position: relative;
  background-color: white;
  color: #D6CD81;
  font-weight: 600;
  margin-left: 0px;
}

</style>