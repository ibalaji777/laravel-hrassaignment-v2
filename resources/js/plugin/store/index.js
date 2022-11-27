import Vue from 'vue'
import Vuex from 'vuex'
import state from '../store/state.js'
import actions from '../store/actions'
import mutations from '../store/mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
state,
actions,
mutations
})

export default store;
