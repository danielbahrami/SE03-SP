import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

//import all pages u want to go to
import App from "@/App";
import newUser from "@/views/signUp";

//set up the page paths
const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    {path: "/", component: App },
    {path: "/signup", component: newUser }
  ]
});

// Yes help
new Vue({
  render: h => h(App), //if this line is not there the page is white
  router,
  template: `
    <div>
      <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item"><router-link to="/" class="nav-link">App</router-link></li>
            <li class="nav-item"><router-link to="/newUser" class="nav-link">newUser</router-link></li>
          </ul>
        </div>
      </nav>
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app');