import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'
import  emprole from '../../Pages/emprole.vue'
import  login from '../../Pages/login.vue'
import  HRDashboard from '../../Pages/HRdashboard.vue'
import  SuperVisorDashboard from '../../Pages/SuperVisorDashboard.vue'
import  EmpDashboard from '../../Pages/EmpDashboard.vue'


Vue.use(VueRouter)

const routes = [
    { path: '/',name:'index', component: emprole },
    { path: '/emprole', name:'emprole', component: emprole },
    { path: '/login',name:'login',component: login },
    { path: '/hr-dashboard',name:'hr-dashboard', component: HRDashboard , meta: { requiresAuth: true }},
    { path: '/supervisor-dashboard',name:'supervisor-dashboard', component: SuperVisorDashboard, meta: { requiresAuth: true } },
    { path: '/emp-dashboard',name:'emp-dashboard', component: EmpDashboard , meta: { requiresAuth: true }},

  ]

  const router = new VueRouter({
    routes
  })

function  isLoggedIn(){
return store.state.logged.id!='';
  }
  router.beforeEach((to, from,next) => {
    if (to.meta.requiresAuth&&!isLoggedIn()) {
   next('/emprole')
    }

    if(to.name=='index'){

        if(store.state.logged.role=='STAFF')
        {
        next('/emp-dashboard')
        }

        if(store.state.logged.role=='SUPPERVISOR')
        {
        next('/supervisor-dashboard')
        }

        if(store.state.logged.role=='HR')
        {
        next('/hr-dashboard')

        }
        else{
            next('/emprole')

        }


    }
    next()

  })

  export default router;
