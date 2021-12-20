import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import Home from "./components/content/Home";
import Playlist from "./components/content/Playlist";
import HitLists from "./components/content/HitLists";
import Genres from "./components/content/Genres";
import Recently from "./components/content/Recently";
import Favorites from "./components/content/Favorites";
import Profile from "./components/content/Profile";
import EditProfile from "./components/content/EditProfile";
import Subscription from "./components/content/Subscription";
import NotFound from "./components/errors/404";

Vue.use(VueRouter);

const routes = [
  {
    path: "/app",
    component: App,
    redirect: "/",
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/home",
    redirect: "/",
  },
  {
    path: "/hitlists",
    component: HitLists,
  },
  {
    path: "/playlist",
    component: Playlist,
  },
  {
    path: "/genres",
    component: Genres,
  },
  {
    path: "/recently",
    component: Recently,
  },
  {
    path: "/favorites",
    component: Favorites,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/profile/edit",
    component: EditProfile,
  },
  {
    path: "/profile/subscription",
    component: Subscription,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
