import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import home from "./components/content/home";
import hitlists from "./components/content/hitlists";
import playlists from "./components/content/playlists";
import genres from "./components/content/genres";
import recently from "./components/content/recently";
import profile from "./components/content/profile";
import profileedit from "./components/content/profileEdit";
import viewSubscription from "./components/content/viewSubscription";
import flaskPlaylist from "@/flask/flaskPlaylist";
import favorites from "./components/content/favorites";

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
    path: "/playlists",
    name: "playlists",
    component: playlists,
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
    path: "/profileedit",
    name: "profileedit",
    component: profileedit,
  },
  {
    path: "/flaskPlaylist",
    name: "flaskPlaylist",
    component: flaskPlaylist,
  },
  {
    path: "/viewSubscription",
    name: "viewSubscription",
    component: viewSubscription,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
