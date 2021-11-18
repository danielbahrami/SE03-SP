<template>
  <div class="flaskRecently">

    <table class = "table" v-for="post in flaskTests" :key="post" width="100%">

      <tr>
        <td><span>{{post.SongName}}</span></td>
       <td><span>{{post.Artist}}</span></td>
      <td><span>{{post.Album}}</span></td>
      <table class="icons">
          <tr>
          <a href="#"><img alt="" height="20" src="src/assets/favorit.png" width="20"/></a>
          <a href="#"><img alt="" height="20" src="src/assets/favorit.png" width="20"/></a>
          <a href="#"><img alt="" height="20" src="src/assets/favorit.png" width="20"/></a>
          </tr>
      </table>
      </tr>
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

.icons:first-child{
  display: none;
}
.table:after {
  content: "";
  display: table;
  clear: both;
}

.table:first-child{
  font-weight: bold;
}


.table td{
  width: 30%;
padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 8em;

}
.table tr{
  border: 1px solid #323232;

}

.table:first-child{

  border-bottom: 2px solid #323232;
  border-top: 2px solid #323232;

}


.row:after {
  content: "";
  display: table;
  clear: both;
}


.row {
  /*border-top: 0.1em solid white;*/
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
  /*border-left: 0.1em solid white;*/
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
