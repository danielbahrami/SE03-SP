<template>
  <div id="flaskPlaylist">
    <ul>
      <li class="row" v-for="post in flaskTests" :key="post">
        <div class="column">
          <span>{{post.SongName}}</span>
        </div>
        <div class="column">
         <span>{{post.Artist}}</span>
        </div>
        <div class="column">
          <span>{{post.Album}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "@/flask/flaskPlaylist";
const baseURL = "http://localhost:5000"

export default {
  name: "flaskPlaylist",
  data() {
    return {
      postId:[],
      flaskName: "",
      flaskTests: []
    };
  },
  async created(){
    fetch(baseURL).then((r)=>r.json()).then((j)=>this.flaskTests=j)
  },  async post(){
    try {
      const requestOptions = {
        method: "POST",
        headers: {"SongName": "flaskTests"},
        body: JSON.stringify({title: "vuePostExample"})
      };
      fetch("http://localhost:5000", requestOptions)
      .then(response => response())
      .then(data => (this.postId = data.id))
    } catch (e)
    {
      console.error(e);
    }
  },
  methods: {
    async addFlaskTest()
    {
      const res = await  axios.post(baseURL, {name: this.flaskName});

      this.flaskTests = [...this.flaskTests, res.data];
      this.flaskName = "";
    }
  }
}
</script>


<style scoped>

.row:after {
  content: "";
  display: table;
  clear: both;

}

.column {
  float: left;
  width: 20%;
  padding: 5%;
  margin-bottom: -7%;

}

li{
  list-style-type: none;
}


</style>
