import Vue from "vue";
import VueRouter from "vue-router";
import App from "@/App";
import signUp from "@/components/signUp";
import LoginPage from "@/views/LoginPage";

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
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;