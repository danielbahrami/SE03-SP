<template>
  <div class="login">
    <h1 class="h1">Login</h1>
    <h2 class="h2">Email</h2>
    <input class="input" placeholder="Email">
    <h2 class="h2">Password</h2>
    <input class="input" placeholder="Password">
    <br><br>
    <button class="button" ><slot>Login</slot></button>
    <br><br>
    <a class="link" href="/password-reset">Forgot password?</a>
    <br><br>
    <a class="link" href="/signup">Sign up</a>
    <br><br>
     </div>
</template>

<script>
export default {
  props: {
    username: String,
    password: String
  },
  methods: {
    goToNewUserPage: function (){
      this.$router.push({path: "/signup"})
    }
  }
}
</script>

<style>

.login {
  text-align: center;
}


.h1 {
  color: rgb(212,205,138);
}

.h2 {
  color: white;
}

.input {
  background-color: white;
}

.login {
  background-color: rgb(30,30,30);
}

.button {
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  font-family: "Arial";
  background-color: rgb(212,205,138);
  border-radius: 12px;
}


.link {
  color: white;
}

</style>
