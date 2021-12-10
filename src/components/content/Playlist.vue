<template>
  <div class="playlist">
    <h1 class="header1">Playlist</h1>
    <div class="l1">
      <table class="table" v-for="post in flaskTests" :key="post">
        <tr>
          <td>
            <span>{{ post.SongName }}</span>
          </td>
          <td>
            <span>{{ post.Artist }}</span>
          </td>
          <td>
            <span>{{ post.Album }}</span>
          </td>
          <table class="icons">
            <tr>
              <a href="#"
                ><img
                  alt=""
                  height="20"
                  src="../../assets/table-icons/favorite.png"
                  width="20"
              /></a>
              <a href="#"
                ><img
                  alt=""
                  height="20"
                  src="../../assets/table-icons/add.png"
                  width="20"
              /></a>
              <a href="#"
                ><img
                  alt=""
                  height="20"
                  src="../../assets/table-icons/edit.png"
              /></a>
            </tr>
          </table>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
const baseURL = "http://localhost:5000";

export default {
  name: "Playlist",
  data() {
    return {
      postId: [],
      flaskName: "",
      flaskTests: [],
    };
  },
  async created() {
    fetch(baseURL)
      .then((r) => r.json())
      .then((j) => (this.flaskTests = j));
  },
  async post() {
    try {
      const requestOptions = {
        method: "POST",
        headers: { SongName: "flaskTests" },
        body: JSON.stringify({ title: "vuePostExample" }),
      };
      fetch("http://localhost:5000", requestOptions)
        .then((response) => response())
        .then((data) => (this.postId = data.id));
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style scoped>
.playlist {
  overflow: hidden;

  font-size: 1em;
  text-align: center;
  color: white;
}

.header1 {
  text-align: left;
  margin-left: 1em;
  color: #d6cd81;
}

.l1 {
  overflow: hidden;
  list-style: none;
  /*grid-template-columns: repeat(4, 1fr);*/
  color: #ffffff;
  /*grid-auto-rows: minmax(2em, auto);*/
  margin-bottom: 5em;
  position: fixed;
  top: 20%;
  width: 82%;
}
.l1 li {
  position: static;
  height: auto;
  list-style-type: none;
  float: left;
  text-align: center;
  margin-left: 2em;
  margin-top: 2em;
  font-size: medium;
  color: white;
  font-weight: bolder;
  clear: left;
}

.table {
  border-collapse: collapse;
  border-style: hidden;
  width: 100%;
  margin: 0 auto;
}

.icons {
}

.icons:first-child {
  display: none;
}
.table:after {
  content: "";
  display: table;
  clear: both;
}

.table td {
  text-align: left;
  width: 30%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 3em;
  color: darkgrey;
}
.table tr {
  border: 1px solid #323232;
}

.table:first-child {
  font-weight: bold;

  border-bottom: 2px solid #323232;
  border-top: 2px solid #323232;
}
</style>
