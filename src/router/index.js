import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/rechargeForm'
    },
    {
        path: '/rechargeForm',
        component: () => import('../views/RechargeForm')
    }
]

export default new VueRouter({routes})
