<template>
  <div id="signUp">
    <div id="parent">
      <close-button class="Close_Button"></close-button>
      <h1 class="h1">Registration</h1>
    </div>
    <div class="registrationAreas">
      <h3 class="h3">Username</h3>
      <input placeholder="Username">
      <h3 class="h3">Password</h3>
      <input placeholder="password">
      <h3 class="h3">Email</h3>
      <input placeholder="Email">
    </div>
    <div class="SignUp">
      <button class="button">
        <slot>Sign Up</slot>
      </button>
    </div>
    <router-link class="Login" to="/login">Login</router-link>
  </div>
</template>

<script>

import closeButton from "../universal/closeButton";

export default {
  name: 'signUp',
  components: {
    closeButton
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
  margin-top: 0px;
  background-color: gray;
  width: 350px;
  border: 5px solid rgb(30, 30, 30);
  background-color: rgb(30, 30, 30);
}

.SignUp {
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
  background-color: rgb(102, 212, 110);
  border-radius: 12px;
}

.h1 {
  color: rgb(212, 205, 138);

}

.h3 {
  color: white;
  text-align: center;
}

.Login {
  color: white;
}

#parent {
  padding-left: 10px;
}

</style>
