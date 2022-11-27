import Vue from 'vue'
import VueRouter from 'vue-router'
import test from '../../Pages/ExampleComponent.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: test },
  ]

  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = new VueRouter({
    routes // short for `routes: routes`
  })


  export default router;
