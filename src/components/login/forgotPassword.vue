<template>
  <div class="forgotPassword">
    <div id="parent">
      <close-button class="Close_Button"></close-button>
      <h1 class="h1">Forgot Password</h1>
    </div>
    <h2 class="h2">Email</h2>
    <input class="input" placeholder="Email">
    <br><br>
    <button class="button">
      <slot>Send email</slot>
    </button>
    <br><br>
    <router-link class="link" to="/login">Back to login</router-link>
  </div>

</template>

<script>

import closeButton from "../universal/closeButton";

export default {
  name: "ForgotPassword",
  components: {
    closeButton
  }
}
</script>


<style scoped>
.forgotPassword {
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