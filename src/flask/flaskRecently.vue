<template>
  <div class="flaskRecently">
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
                src="../assets/tableIcons/favorite.png"
                width="20"
            /></a>
            <a href="#"
              ><img
                alt=""
                height="20"
                src="../assets/tableIcons/add.png"
                width="20"
            /></a>
            <a href="#"
              ><img alt="" height="20" src="../assets/tableIcons/edit.png"
            /></a>
          </tr>
        </table>
      </tr>
    </table>
  </div>
</template>
<script>
import axios from "@/flask/flaskRecently";
const baseURL = "http://localhost:5000";

export default {
  name: "flaskRecently",
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
  methods: {
    async addFlaskTest() {
      const res = await axios.post(baseURL, { name: this.flaskName });

      this.flaskTests = [...this.flaskTests, res.data];
      this.flaskName = "";
    },
  },
};
</script>

<style scoped>
.table {
  border-collapse: collapse;
  border-style: hidden;
  width: 100%;
  margin: 0 auto;
}
/*
td {
 padding: 0.1em;
  text-align: left;
  border-bottom: 1px solid #ddd;
}*/

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
