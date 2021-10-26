<template>
  <div id="newUser">
    <div class="userInformation"><p>{{"Create a new profile for free"}}</p>
      <p>{{"What's your email?"}}</p>
      <input v-model="emailText" placeholder="Enter your email.">
      <p>{{"Confirm your email"}}</p>
      <input v-model="secondEmailText" placeholder="Enter your email again.">
      <p>{{"Create a password"}}</p>
      <input v-model="newPasswordText" placeholder="Create a password.">
      <p>{{"What should we call you? "}}</p>
      <input v-model="newUsernameText" placeholder="Enter a profile name.">
    </div>

    <div class="SignUp">
      <button class="Button"><slot>Sign Up</slot></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newUser',
  components: {
     },
  props: {
    emailText: String,
    secondEmailText: String,
    newPasswordText: String,
    newUsernameText: String
  }
}
</script>

<style>
#newUser {
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

</style>
