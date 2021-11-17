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
                  <a class="signUp" @click="$vm2.open('forgotPassword'), $vm2.close('login')">Forgot password?</a>
                  <br><br>
                  <a class="signUp" @click="$vm2.open('signUp'), $vm2.close('login')">Sign up</a>
                  <br><br>
                </div>
            </modal-vue>
</template>

<script>

import exitIcon from 'vue-material-design-icons/Close.vue'

export default {
  props: {
    username: String,
    password: String
  },
  methods: {
    close() {
      this.$vm2.close("login");
    }
  },
  components: {
    exitIcon,
  }
}

</script>

<style>

.login {
  text-align: center;
  width: 350px;
  background-color: rgb(30, 30, 30);
}

.h1 {
  color: rgb(212, 205, 138);

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

.floatLeft{
  float: left;
  color: white;
  cursor: pointer;
}
.close{
  height: 2rem;
}

.signUp {
  color: white;
  text-decoration: underline;
  cursor: pointer;
}

</style>
