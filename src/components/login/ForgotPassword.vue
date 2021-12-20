<template>
  <modal-vue
    @on-close="$vm2.close('forgotPassword')"
    name="forgotPassword"
    darkMode
    fontDark
    noFooter
    noHeader
    modalSize="md"
  >
    <div class="forgotPassword">
      <div class="close">
        <exitIcon class="floatLeft" @click="close" />
      </div>
      <div id="parent">
        <h1 class="h1">Forgot password</h1>
      </div>
      <div class="content">
        <label for="email">Email</label>
        <input
          class="input form-control"
          id="email"
          name="email"
          placeholder="Email"
        />
      </div>
      <button class="button">Send email</button>
      <br /><br />
      <a class="link" @click="$vm2.open('login'), $vm2.close('forgotPassword')"
        >Back to login</a
      >
      <br /><br />
    </div>
  </modal-vue>
</template>

<script scoped>
import exitIcon from "vue-material-design-icons/Close.vue";

export default {
  name: "forgotPassword",
  components: {
    exitIcon,
  },
  methods: {
    close() {
      this.$vm2.close("forgotPassword");
    },
  },
};
</script>

<style scoped>
.forgotPassword {
  text-align: center;
  border: 5px solid rgb(30, 30, 30);
  background-color: rgb(30, 30, 30);
}

.h1 {
  color: rgb(212, 205, 138);
  margin-right: 40px;
}

.input {
  background-color: white;
}

.button {
  border: none;
  color: black;
  text-align: center;
  font-size: 16px;
  background-color: rgb(212, 205, 138);
  border-radius: 0.6rem;
  margin-top: 4.1rem;
  margin-bottom: 4.1rem;
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
  margin-top: 1.5rem;
  margin-left: 1.25rem;
  display: flex;
}

.content {
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
.vm2_wrapper.vm2__animate-opacity {
  backdrop-filter: blur(5px);
}
</style>
