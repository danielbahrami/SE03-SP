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
        component: App
    },
    {
        path: "/signUp",
        name: "signUp",
        component: signUp
    },
    {
        path: "/loginPage",
        name: "loginPage",
        component: LoginPage
    },
    {
        path: "/forgotPassword",
        name: "forgotPassword",
        component: ForgotPassword
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;