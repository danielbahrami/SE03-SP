<template>
  <div class="app">
    <div id="Startview">
      <router-link to="/loginPage">LoginPage</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  }
}

</script>

<style>
#StartView a.router-link-exact-active
{

}
</style>
