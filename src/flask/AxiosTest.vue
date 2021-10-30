<template>
  <div id="axios">
    <h1>Flask Test</h1>
    <input type="text" v-model="flaskName" @keyup.enter="addFlaskTest">
    <ul>
      <li class="flaskOutput" v-for="post in flaskTests" :key="post">
        {{post.SongName}}{{post.Artist}}{{post.Album}}
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "@/flask/AxiosTest";
const baseURL = "http://localhost:5000"

export default {
  name: "AxiosTest",
  data() {
    return {
      postId:[],
      flaskName: "",
      flaskTests: []
    };
  },
  async created(){
    fetch("http://localhost:5000").then((r)=>r.json()).then((j)=>this.flaskTests=j)
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

li {

}

ul {
  padding: 0%;
  margin: 0%;
}

#axios
{
  color: white;
}

</style>