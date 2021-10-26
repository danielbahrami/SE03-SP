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
  },

  //uses the router to go to a new page
  methods: {
    goToNewUserPage() {
      this.$router.push({path: "/newUser"})
    }
  }
}
</script>

<style scoped>
.forgotButton {
  margin-left: -70px;
}
.loginButton {
  margin-left: 120px;
  margin-top: -21px;
}
</style>