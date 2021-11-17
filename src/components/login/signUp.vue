<template>
  <modal-vue
      @on-close="$vm2.close('signUp')"
      name="signUp"
      darkMode
      fontDark
      noFooter
      noHeader
  >

                <div class="signUp" id="signUp">
                  <div class="close">
                    <exitIcon class="floatLeft" @click="close"/>
                  </div>
                  <div id="parent">
                    <h1 class="h1">Registration</h1>
                  </div>
                  <h2 class="h2">Email</h2>
                  <input class="input" placeholder="Email">
                  <h2 class="h2">Password</h2>
                  <input class="input" placeholder="Password">
                  <br><br>
                  <button class="button">
                    <slot>Sign Up</slot>
                  </button>
                  <br><br>
                  <a class="login" @click="$vm2.open('login'), $vm2.close('signUp')">Login</a>
                </div>
            </modal-vue>
</template>

<script>

import exitIcon from 'vue-material-design-icons/Close.vue'

export default {
  name: 'signUp',
  components: {
    exitIcon
  },
  props: {
    emailText: String,
    newPasswordText: String,
    newUsernameText: String
  },
  methods: {
    close() {
      this.$vm2.close("signUp");
    }
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

.login {
  color: white;
  text-decoration: underline;
  cursor: pointer;
}

#parent {
  padding-left: 10px;
}

</style>
