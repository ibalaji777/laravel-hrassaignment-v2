//import vue
import Vue from 'vue';
import vuetify from './vuetify';
import store from '../js/plugin/store/index.js'
import router from '../js/plugin/router/index.js'
import VueSimpleAlert from "vue-simple-alert";
Vue.use(VueSimpleAlert);

Vue.component('mainApp', require('./Pages/app.vue').default);
Vue.component('createUserDialog', require('./Pages/createUserDialog.vue').default);
Vue.component('createLeaveDialog', require('./Pages/createLeaveDialog.vue').default);
Vue.component('viewLeaveForm', require('./Pages/viewLeaveForm.vue').default);


const app = new Vue({
    el: '#app',
    store,
    router,
    vuetify
});
