import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import home from "./components/content/Home";
import hitlists from "./components/content/HitLists";
import genres from "./components/content/Genres";
import recently from "./components/content/Recently";
import profile from "./components/content/Profile";
import editprofile from "./components/content/EditProfile";
import subscription from "./components/content/Subscription";
import playlist from "./components/content/Playlist";
import favorites from "./components/content/Favorites";

Vue.use(VueRouter);

const routes = [
  {
    path: "/app",
    name: "app",
    component: App,
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: home,
  },
  {
    path: "/hitlists",
    name: "hitlists",
    component: hitlists,
  },
  {
    path: "/playlist",
    name: "playlist",
    component: playlist,
  },
  {
    path: "/genres",
    name: "genres",
    component: genres,
  },
  {
    path: "/recently",
    name: "recently",
    component: recently,
  },
  {
    path: "/profile",
    name: "profile",
    component: profile,
  },
  {
    path: "/favorites",
    name: "favorites",
    component: favorites,
  },
  {
    path: "/edit-profile",
    name: "editprofile",
    component: editprofile,
  },
  {
    path: "/flaskPlaylist",
    name: "flaskPlaylist",
    component: playlist,
  },
  {
    path: "/subscription",
    name: "subscription",
    component: subscription,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
