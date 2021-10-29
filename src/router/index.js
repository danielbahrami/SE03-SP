import Vue from 'vue'
import VueRouter from 'vue-router'
import canvas from '../views/Canvas'

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        component: canvas,
        children: [
            {
                path: '',
                component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
            },
            {
                path: 'playlists',
                component: () => import(/* webpackChunkName: "Playlists" */ '../views/Playlists.vue')
            },
            {
                path: 'hitlists',
                component: () => import(/* webpackChunkName: "hitlists" */ '../views/Hitlists.vue')
            },
            {
                path: 'genres',
                component: () => import(/* webpackChunkName: "genres" */ '../views/Genres.vue')
            },
            {
                path: 'recently',
                component: () => import(/* webpackChunkName: "recently" */ '../views/Recently.vue')
            },
            {
                path: 'profileEdit',
                component: () => import(/* webpackChunkName: "recently" */ '../views/profileEdit.vue')
            },
            {
                path: 'profile',
                component: () => import(/* webpackChunkName: "recently" */ '../views/profile.vue')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
