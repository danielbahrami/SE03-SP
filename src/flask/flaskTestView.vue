<template>
  <div id="flaskTest">
    <li v-for="flaskTest in flaskTests" :key="flaskTest.id">
      {{flaskTests.SongName}}{{flaskTests.Artist}}{{flaskTests.Album}}
    </li>
  </div>
</template>

<script>
import {flaskTest} from "@/flask/flaskTest";

export default {
  name: 'flaskTest',
  data() {
    return {
      flaskTests: []
    };
  },
  created() {
    this.loadFlaskTests();
  },
  methods: {
    async loadFlaskTests() {
      try {
        let username = "tester";
        this.flaskTests = await flaskTest.getFlaskTest(username);
      } catch (error) {
        console.log(error.message);
      }
    }
  }
}
</script>

<style>
#flaskTest
{
  color: white;
}
</style>