<template>
  <modal-vue
    @on-close="$vm2.close('signUp')"
    name="signUp"
    darkMode
    fontDark
    noFooter
    noHeader
    modalSize="md"
  >
    <div class="signUp" id="signUp">
      <div class="close">
        <exitIcon class="floatLeft" @click="close" />
      </div>
      <div id="parent">
        <h1 class="h1">Registration</h1>
      </div>
      <div class="content">
        <label for="email">Email</label>
        <input
          type="email"
          class="input form-control"
          id="email"
          name="email"
          placeholder="Email"
        />
      </div>
      <div class="content">
        <label for="password">Password</label>
        <input
          type="password"
          class="input form-control"
          id="password"
          name="password"
          placeholder="Password"
        />
      </div>
      <button class="button">
        <slot>Sign Up</slot>
      </button>
      <br /><br />
      <a class="login" @click="$vm2.open('login'), $vm2.close('signUp')"
        >Login</a
      >
    </div>
  </modal-vue>
</template>

<script>
import exitIcon from "vue-material-design-icons/Close.vue";

export default {
  name: "signUp",
  components: {
    exitIcon,
  },
  props: {
    emailText: String,
    newPasswordText: String,
    newUsernameText: String,
  },
  methods: {
    close() {
      this.$vm2.close("signUp");
    },
  },
};
</script>

<style scoped>
#signUp {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
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
  margin-top: 1em;
}

.h1 {
  color: rgb(212, 205, 138);
}

a.login {
  color: white;
  text-decoration: underline;
  cursor: pointer;
}

#parent {
  padding-left: 10px;
}

.floatLeft {
  float: left;
  color: white;
  cursor: pointer;
}

.floatLeft > svg {
  margin-top: 1.25rem;
  margin-left: 1.25rem;
  display: flex;
}

.content {
  margin-top: 1rem;
  display: flex;
  align-content: space-around;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
}

.form-control {
  align-self: center;
  display: block;
  width: 45%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

label {
  display: inline-block;
  margin-bottom: 0.5rem;
  color: white;
}

button[data-v-a65090a4] {
  margin-top: 1rem;
}

.vm2_wrapper.vm2__animate-opacity {
  backdrop-filter: blur(5px);
}
</style>
