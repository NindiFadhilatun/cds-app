import { createRouter, createWebHistory } from 'vue-router'
import BodyPage from '../components/BodyPage.vue'
import LoginPage from '../components/LoginPage.vue'

const routes = [
    {
        path: '/',
        name: "Home",
        component: BodyPage,
    },
    {
        path: '/login',
        name: "Login",
        component: LoginPage,
    }
]

const router = createRouter({history: createWebHistory(), routes})
export default router