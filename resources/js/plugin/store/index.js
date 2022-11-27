import Vue from 'vue'
import Vuex from 'vuex'
import state from '../store/state.js'
import actions from '../store/actions'
import mutations from '../store/mutations'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    reducer:(state)=>{

    }

  })



const store = new Vuex.Store({
state,
actions,
mutations,
// plugins:[vuexLocal.plugin]
})

export default store;
