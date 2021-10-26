<template>
  <div class="Login">
    <p>{{"Username"}}</p>
    <input v-model="usernameText" placeholder="username">
    <p>{{"Password"}}</p>
    <input v-model="passwordText" placeholder="password">
    <p>{{""}}</p>
    <button class="Button"><slot>Forgot Password</slot></button>
    <div class="loginButton">
      <button class="Button"><slot>Login</slot></button>
    </div>

     </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    usernameText: String,
    passwordText: String
  }
}
</script>

<style scoped>
.loginButton {
  margin-left: 30%;
}
</style>