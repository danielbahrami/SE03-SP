import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import signUp from "./components/login/signUp";
import forgotPassword from "./components/login/forgotPassword";
import main from "./views/main";
import hitlists from "./components/content/hitlists";
import playlists from "./components/content/playlists";
import genres from "./components/content/genres";
import recently from "./components/content/recently";
import profile from "./components/content/profile";
import profileedit from "./components/content/profileEdit";
import AxiosTest from "@/flask/AxiosTest";
Vue.use(VueRouter);

const routes = [
    {
        path: "/app",
        name: "app",
        component: App,
        redirect: "/home" //TODO change to HOME
    },
    {
        path: "/signup",
        name: "signUp",
        component: signUp
    },
    {
        path: "/home",
        name: "main",
        component: main
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
        path: "/axiosTest",
        name: "axiosTest",
        component: AxiosTest
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
