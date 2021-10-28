import Vue from "vue";
import VueRouter from "vue-router";
import App from "@/App";
import signUp from "@/components/signUp";
import loginPage from "@/views/loginPage";
import forgotPassword from "@/components/forgotPassword";

Vue.use(VueRouter);

const routes = [
    {
        path: "/app",
        name: "app",
        component: App,
        redirect: "/login"
    },
    {
        path: "/signup",
        name: "signUp",
        component: signUp
    },
    {
        path: "/login",
        name: "loginPage",
        component: loginPage
    },
    {
        path: "/password-reset",
        name: "forgotPassword",
        component: forgotPassword
    }
];


const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});
router.replace({path: "/app", redirect: "login"}).then(() => "/login")
export default router;
