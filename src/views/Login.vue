<template>
  <div class="login">
    <img class="logo" src="@/assets/logo.png">
    <h1>Welcome to Spotify</h1>
    <br>
    <loginFields></loginFields>
  </div>
</template>

<script>

import loginFields from "@/components/Login";

export default {
  name: 'loginPage',
  components: {
    loginFields,
  }

}

</script>

<style>

.logo {
  height: 100px;
  width: 100px;
}

</style>
