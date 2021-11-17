<template>
  <div class="flaskRecently">

    <table class = "table" v-for="post in flaskTests" :key="post">
      <tb><span>{{post.SongName}}</span></tb>
      <tb><span>{{post.Artist}}</span></tb>
      <tb><span>{{post.Album}}</span></tb>

    </table>

    <ul>
      <li class="row" v-for="post in flaskTests" :key="post">
        <div class="column" >
          <span>{{post.SongName}}</span>
        </div>
        <div class="column">
          <span>{{post.Artist}}</span>
        </div>
        <div class="column">
          <span>{{post.Album}}</span>
        </div>
        <div class="column">
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "@/flask/flaskRecently";
const baseURL = "http://localhost:5000"

export default {
  name: "flaskRecently",
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


.table{
  border: 1px solid white;
  width: 80%;
  border-spacing: 0.5rem;
}
.table:after {
  content: "";
  display: table;
  clear: both;
}

.table:first-child{
  font-weight: bold;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.row {
  border-top: 0.1em solid white;
  border-bottom: 0.1em solid white;
}

.row:first-child{
font-weight: bold;
}

.row:last-child{
  border-bottom: 0.1em solid white;
}

.column{
  float: left;
  width: 23%;
  padding:1% ;
  border-left: 0.1em solid white;
  border-right: 0.1em solid white;
}

.column:first-child{
  border-left: none;
}
.column:last-child{
  border-right: none;
width: 3%;
}


.column1{
  float: left;
  width: 23%;
  padding: 1%;

}
.column2{
  float: left;
  width: 23%;
  padding: 1%;
}
.column3{
  float: left;
  width: 24%;
  padding: 1%;
}

li{
  list-style-type: none;

}


</style>
