<template>
  <modal-vue
    @on-close="$vm2.close('login')"
    name="login"
    darkMode
    fontDark
    noFooter
    noHeader
    modalSize="md"
  >
    <div class="login">
      <div class="close">
        <exitIcon class="floatLeft" @click="close" />
      </div>
      <div id="parent">
        <h1 class="h1">Login</h1>
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
      <router-link to="/profile">
        <button class="button" @click="$vm2.close('login')">
          <slot>Login</slot>
        </button>
      </router-link>
      <br /><br />
      <a class="link" @click="$vm2.open('forgotPassword'), $vm2.close('login')"
        >Forgot password?</a
      >
      <br /><br />
      <a class="link" @click="$vm2.open('signUp'), $vm2.close('login')"
        >Sign up</a
      >
      <br /><br />
    </div>
  </modal-vue>
</template>

<script scoped>
import exitIcon from "vue-material-design-icons/Close.vue";

export default {
  props: {
    username: String,
    password: String,
  },
  methods: {
    close() {
      this.$vm2.close("login");
    },
  },
  components: {
    exitIcon,
  },
};
</script>

<style>
.login {
  text-align: center;
  background-color: rgb(30, 30, 30);
}

.h1 {
  color: rgb(212, 205, 138);
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
  background-color: rgb(212, 205, 138);
  border-radius: 12px;
}

.floatLeft {
  float: left;
  color: white;
  cursor: pointer;
}

.floatLeft > svg {
  margin-top: 1.5rem;
  margin-left: 1.25rem;
  display: flex;
}

.close {
  height: 2rem;
}

.link {
  color: white;
  text-decoration: underline;
  cursor: pointer;
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

a[data-v-11fe6c4e] > button {
  margin-top: 1rem;
}

.vm2_wrapper.vm2__animate-opacity {
  backdrop-filter: blur(5px);
}
</style>
