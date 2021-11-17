import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import signUp from "./components/login/signUp";
import forgotPassword from "./components/login/forgotPassword";
import home from "./components/content/home";
import hitlists from "./components/content/hitlists";
import playlists from "./components/content/playlists";
import genres from "./components/content/genres";
import recently from "./components/content/recently";
import profile from "./components/content/profile";
import profileedit from "./components/content/profileEdit";
import flaskPlaylist from "@/flask/flaskPlaylist";

Vue.use(VueRouter);

const routes = [
    {
        path: "/app",
        name: "app",
        component: App,
        redirect: "/home"
    },
    {
        path: "/signup",
        name: "signUp",
        component: signUp
    },
    {
        path: "/home",
        name: "home",
        component: home
    },
    {
        path: "/password-reset",
        name: "forgotPassword",
        component: forgotPassword
    },
    {
        path: "/hitlists",
        name: "hitlists",
        component: hitlists
    },
    {
        path: "/playlists",
        name: "playlists",
        component: playlists
    },
    {
        path: "/genres",
        name: "genres",
        component: genres
    },
    {
        path: "/recently",
        name: "recently",
        component: recently
    },
    {
        path: "/profile",
        name: "profile",
        component: profile
    },
    {
        path: "/profileedit",
        name: "profileedit",
        component: profileedit
    },
    {
        path: "/flaskPlaylist",
        name: "flaskPlaylist",
        component: flaskPlaylist
    }

]

// DO NOT TOUCH!
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});
//Redirects the app to load a view from the start TODO change this to HOME
router.replace({path: "/app", redirect: "login"}).then(() => "/login")
export default router;
