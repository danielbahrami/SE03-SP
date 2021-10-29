import Vue from "vue";
import VueRouter from "vue-router";
import App from "@/App";
import signUp from "@/components/signUp";
import forgotPassword from "@/components/forgotPassword";
import canvas from "@/views/Canvas";

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
        name: "canvas",
        component: canvas
    },
    {
        path: "/password-reset",
        name: "forgotPassword",
        component: forgotPassword
    }
];

// DO NOT TOUCH!
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});
//Redirects the app to load a view from the start TODO change this to HOME
router.replace({path: "/app", redirect: "login"}).then(() => "/login")
export default router;
