<template>
  <div class="login">
    <div id="parent">
      <close-button class="Close_Button"></close-button>
      <h1 class="h1">Login</h1>
    </div>
    <h2 class="h2">Email</h2>
    <input class="input" placeholder="Email">
    <h2 class="h2">Password</h2>
    <input class="input" placeholder="Password">
    <br><br>
    <button class="button">
      <slot>Login</slot>
    </button>
    <br><br>
    <router-link class="link" to="/password-reset">Forgot password?</router-link>
    <br><br>
    <router-link class="link" to="/signup">Sign up</router-link>
    <br><br>
  </div>
</template>

<script>

import closeButton from "@/components/closeButton";

export default {
  props: {
    username: String,
    password: String
  },
  methods: {
    goToNewUserPage() {
      this.$route
    }
  },
  components: {
    closeButton
  }
}
</script>

<style>

.login {
  text-align: center;
  width: 350px;
  border: 5px solid rgb(30, 30, 30);
  background-color: rgb(30, 30, 30);
}

.h1 {
  color: rgb(212, 205, 138);
  margin-right: 40px;

}

.h2 {
  color: white;
}

.input {
  background-color: white;
}

.button {
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  font-family: "Arial";
  background-color: rgb(212, 205, 138);
  border-radius: 12px;
}

.link {
  color: white;
}

.Close_Button {
  float: left;
}

#parent {
  padding-left: 10px;
}

</style>
