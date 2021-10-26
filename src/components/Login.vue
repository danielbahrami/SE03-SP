<template>
  <div class="login">
    <p>{{"Username"}}</p>
    <input v-model="usernameText" placeholder="username">
    <p>{{"Password"}}</p>
    <input v-model="passwordText" placeholder="password">
    <br><br>
      <button class="login"><slot>Login</slot></button>
    <br><br>
    <button class="forgot_password"><slot>Forgot Password</slot></button>
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