<template>
  <div id="signUp">
    <h2>Registration</h2>
      <div class="registrationAreas">
        <h3>Username</h3>
        <input placeholder="Username">
        <h3>Password</h3>
        <input placeholder="password">
        <h3>Email</h3>
        <input placeholder="Email">
      </div>
    <div class="SignUp">
      <button class="button"><slot>Sign Up</slot></button>
    </div>
    <a class="Login" href="/Login">Login</a>
  </div>
</template>

<script>
export default {
  name: 'signUp',
  components: {
     },
  props: {
    emailText: String,
    newPasswordText: String,
    newUsernameText: String
  }
}
</script>

<style>
#signUp {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: gray;
}
.SignUp{
  margin-top: 30px;
}

.userInformation {
  margin-top: 200px;
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

</style>
