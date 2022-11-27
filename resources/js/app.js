//import vue
import Vue from 'vue';
import vuetify from './vuetify';
import store from '../js/plugin/store/index.js'
import router from '../js/plugin/router/index.js'

Vue.component('createUserDialog', require('./Pages/createUserDialog.vue').default);


const app = new Vue({
    el: '#app',
    store,
    router,
    vuetify
});
