<template>
  <div class="parent">
    <h3>Subscription details</h3>
    <table>
      <thead>
        <th>Subscription</th>
        <th>Status</th>
        <th>Total</th>
        <th></th>
      </thead>
      <tbody>
        <tr>
          <td>Student</td>
          <td>Active</td>
          <td>40 DKK/month</td>
          <td><a href="#">View details</a></td>
        </tr>
        <tr>
          <td>Premium</td>
          <td>Cancelled</td>
          <td>80 DKK/month</td>
          <td><a href="#">View details</a></td>
        </tr>
      </tbody>
    </table>
    <h3>Upgrade Subscription</h3>
    <div class="section">
      <div class="article">
        <h4>Free</h4>
        <p></p>
        <p></p>
        <button class="subscription-button" @click="$vm2.open('modal-3')">
          current
        </button>
      </div>
      <div class="article">
        <h4>Premium</h4>
        <p>80 DKK/month</p>
        <p></p>
        <button class="subscription-button" @click="$vm2.open('modal-3')">
          upgrade
        </button>
      </div>
      <div class="article">
        <h4>Student</h4>
        <p>40 DKK/month</p>
        <p></p>
        <button class="subscription-button" @click="$vm2.open('modal-3')">
          upgrade
        </button>
      </div>
      <div class="article">
        <h4>Family</h4>
        <p>100 DKK/month</p>
        <p><small>combine up to 6 different accounts</small></p>
        <button class="subscription-button" @click="$vm2.open('modal-3')">
          upgrade
        </button>
      </div>
    </div>
    <modal-vue
      @on-close="$vm2.close('modal-3')"
      name="modal-3"
      darkMode
      fontDark
      modalSize="md"
    >
      <template v-slot:header>
        <exitIcon @click="close" />
      </template>
      <template v-slot:footer>
        <div class="flex">
          <button @click="close" class="btn btn-primary">Cancel</button>
          <button @click="close" class="btn btn-primary left">Confirm</button>
        </div>
      </template>
      <div class="flex flex-direction">
        <h4>Confirm upgrade</h4>
        <div class="form-box">
          <form action="">
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                class="form-control"
              />
            </div>
          </form>
        </div>
      </div>
    </modal-vue>
  </div>
</template>
<script>
import exitIcon from "vue-material-design-icons/Close.vue";
export default {
  name: "viewSubscription",
  methods: {
    close() {
      this.$vm2.close("modal-3");
    },
  },
  components: {
    exitIcon,
  },
};
</script>
<style scoped>
.parent {
  color: white;
  margin: 1.55em;
}
table {
  width: 100%;
  text-align: left;
}

table thead th {
  border-top: 2px solid grey;
  border-bottom: 2px solid grey;
  font-size: 1em;
}
table tbody tr td {
  border-top: 1px solid grey;
}
table tbody tr:last-child td {
  border-bottom: 1px solid grey;
}
table tbody tr:nth-child(1) td {
  border-top: none;
}
a {
  text-decoration: underline;
  color: white;
}
a::after {
  color: white;
}
h3 {
  font-size: 1.2em;
  color: #d6cd81;
}

.section {
  width: 38.2em;
  height: 21.95em;
  border-radius: 0.95em;
  display: flex;
  background: #3f3f3f;
}

.article {
  position: relative;
  background: #706e6b;
  border-radius: 0.95em;
  width: 8.7em;
  margin: 0.4em;
  text-align: center;
}
.article p {
  padding: 0.4em;
}
.article button {
  position: absolute;
  bottom: 1em;
  right: 3em;
  background: #d6cd81;
  color: white;
  border-radius: 100vh;
  border: none;
  cursor: pointer;
}

.vm2_wrapper.vm2__animate-opacity {
  backdrop-filter: blur(5px);
}

label {
  display: inline-block;
  margin-bottom: 0.5rem;
}
.form-group {
  margin-bottom: 1rem;
}
.form-control {
  align-self: center;
  display: block;
  width: 90%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-primary {
  color: black;
  background-color: #d6cd81;
  margin: 0.3rem;
}

.form-box {
  margin: 1rem;
}

h4 {
  color: #d6cd81;
  font-size: 1.7em;
  text-align: center;
}
.material-design-icon__svg {
  margin: 1rem;
  cursor: pointer;
}
.flex {
  margin: 0px auto;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-bottom: 1rem;
}
.flex-direction {
  flex-direction: column;
}
form {
  display: table;
  margin: 0 auto;
}
</style>
