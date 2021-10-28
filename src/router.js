import Vue from "vue";
import VueRouter from "vue-router";
import App from "@/App";
import signUp from "@/components/signUp";
import LoginPage from "@/views/LoginPage";
import ForgotPassword from "@/components/ForgotPassword";

Vue.use(VueRouter);

const routes = [
    {
        path: "/app",
        name: "app",
        component: App,
        redirect: "/login" //TODO change to HOME
    },
    {
        path: "/signup",
        name: "signUp",
        component: signUp
    },
    {
        path: "/login",
        name: "loginPage",
        component: LoginPage
    },
    {
        path: "/password-reset",
        name: "forgotPassword",
        component: ForgotPassword
    }
];


const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});
//Redirects the app to load a view from the start TODO change this to HOME
router.replace({path: "/app", redirect: "login"}).then(() => "/login")
export default router;
