<template>
  <div class="login">
    <h2>Username</h2>
    <input class="login" v-model="username" placeholder="Username">
    <h2>Password</h2>
    <input class="login" v-model="password" placeholder="Password">
    <br><br>
    <a class="password-reset" href="/password-reset">Forgot your password?</a>
    <br><br>
      <button v-on:click="goToNewUserPage" class="button loginbutton" ><slot>Login</slot></button>
    <br><br>
     </div>
</template>

<script>
export default {
  name: "loginFields",
  props: {
    username: String,
    password: String
  },
  methods: {
    goToNewUserPage: function (){
      this.$router.push({path: "/newUser"})
    }
  }
}
</script>

<style>

.login {
  font-family: "Comic Sans MS";
}

.button {
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  font-family: "Comic Sans MS";
  background-color: rgb(102,212,110);
  border-radius: 12px;
}

.password-reset {
  color: gray;
}

</style>
