<template>
  <modal-vue
      @on-close="$vm2.close('forgotPassword')"
      name="forgotPassword"
      darkMode
      fontDark
      noFooter
      noHeader
  >

    <div class="forgotPassword">
      <div class="close">
        <exitIcon class="floatLeft" @click="close"/>
      </div>
      <div id="parent">
        <h1 class="h1">Forgot password</h1>
      </div>
      <h2 class="h2">Email</h2>
      <input class="input" placeholder="Email">
      <br><br>
      <button class="button">
        <slot>Send email</slot>
      </button>
      <br><br>
      <a class="signUp" @click="$vm2.open('login'), $vm2.close('forgotPassword')">Back to login</a>
      <br><br>
    </div>
  </modal-vue>
</template>

<script>

import exitIcon from 'vue-material-design-icons/Close.vue'

export default {
  name: "forgotPassword",
  components: {
    exitIcon
  },
  methods: {
    close() {
      this.$vm2.close("forgotPassword");
    }
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

#parent {
  padding-left: 10px;
}

</style>
