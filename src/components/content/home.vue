<template>
  <div class="home">
    <h1 class="recommended">Recommended Playlists</h1>
    <ul class="container">
      <li>
        <img
          alt=""
          height="300"
          src="https://exclaim.ca/images/justin-beiber-justice.jpg"
          width="300"
        />Kap Kap
        <p class="Author">Jan Per</p>
      </li>
      <li>
        <img
          alt=""
          height="300"
          src="https://1265745076.rsc.cdn77.org/1024/jpg/47466-travis-scott-astroworld-LP-5ba0adf4935c7.jpg"
          width="300"
        />Zu Zu
        <p class="Author">Jan Per</p>
      </li>
      <li>
        <img
          alt=""
          height="300"
          src="https://linkstorage.linkfire.com/medialinks/images/e28991cd-3750-4e87-9d6b-b360aecb6c67/artwork-440x440.jpg"
          width="300"
        />Da Da
        <p class="Author">Jan Per</p>
      </li>
    </ul>
    <h1 class="workout">Workout Playlists</h1>
    <ul class="container1">
      <li>
        <img
          alt=""
          height="300"
          src="https://graphicriver.img.customer.envatousercontent.com/files/322229646/archetypology-albumcover-template-preview.jpg?auto=compress,format&fit=crop&crop=top&w=590&h=590&s=f9568e3ec730fd8a51926762468c375d"
          width="300"
        /><br />Bum Bum
        <p class="Author">Jan Per</p>
      </li>
      <li>
        <img
          alt=""
          height="300"
          src="https://upload.wikimedia.org/wikipedia/en/a/a0/Ariana_Grande_-_Positions.png"
          width="300"
        /><br />Li Li
        <p class="Author">Jan Per</p>
      </li>
      <li>
        <img
          alt=""
          height="300"
          src="https://video-images.vice.com/_uncategorized/1527898271751-0bffd93463afe53e7f651f72bedfc78b1000x1000x1.jpeg"
          width="300"
        /><br />Fr Fr
        <p class="Author">Jan Per</p>
      </li>
    </ul>
    <br /><br />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home {
  overflow: hidden;
  font-size: 1em;
  text-align: center;
  color: white;

  display: grid;
}

.recommended {
  text-align: left;
  color: #d6cd81;
  margin-left: 2em;
}

.workout {
  text-align: left;
  margin-left: 2em;
  color: #d6cd81;
}

.container {
  overflow: hidden;
  list-style: none;
}

.container li {
  list-style-type: none;
  float: left;
  text-align: center;
  margin-right: 4em;
  font-size: medium;
  color: white;
  font-weight: bolder;
}

.container li:first-child {
  margin-left: 2em;
}

.container1 li {
  list-style-type: none;
  float: left;
  text-align: center;
  margin-right: 4em;
  font-size: medium;
  color: white;
  font-weight: bolder;
  width: auto;
}

.container1 li:first-child {
  margin-left: 2em;
}

.Author {
  font-weight: normal;
  margin-top: 0;
}

.container img {
  display: block;
}
</style>
