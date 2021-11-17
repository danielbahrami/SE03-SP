<template>
  <modal-vue
      @on-close="$vm2.close('login')"
      name="login"
      darkMode
      fontDark
      noFooter
      noHeader
  >
          
                <div class="login">
                  <div class="close">
                    <exitIcon class="floatLeft" @click="close"/>
                  </div>
                  <div id="parent">
                    <h1 class="h1">Register</h1>
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
                  <!-- <router-link class="link" to="/signup"> -->
                  <button @click="$vm2.open('register')"></button>
                  <!-- </router-link> -->
                  <br><br>
                </div>
            </modal-vue>
</template>

<script>

// import closeButton from "../universal/closeButton";

export default {
  name: 'signUp',
  components: {
    // closeButton
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
