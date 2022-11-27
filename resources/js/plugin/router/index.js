import Vue from 'vue'
import VueRouter from 'vue-router'

import  emprole from '../../Pages/emprole.vue'
import  login from '../../Pages/login.vue'
import  dashboard from '../../Pages/dashboard.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: emprole },
    { path: '/emprole', name:'emprole', component: emprole },
    { path: '/login',name:'login',component: login },
    { path: '/dashboard',name:'dashboard', component: dashboard },

  ]

  const router = new VueRouter({
    routes
  })


  export default router;
