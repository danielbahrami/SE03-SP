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
                component: () => import(/* webpackChunkName: "Home" */ '../components/Home.vue')
            },
            {
                path: 'playlists',
                component: () => import(/* webpackChunkName: "Playlists" */ '../components/Playlists.vue')
            },
            {
                path: 'hitlists',
                component: () => import(/* webpackChunkName: "hitlists" */ '../components/Hitlists.vue')
            },
            {
                path: 'genres',
                component: () => import(/* webpackChunkName: "genres" */ '../components/Genres.vue')
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
