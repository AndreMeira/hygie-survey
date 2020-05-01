import Vue from 'vue'
import Vuex from 'vuex'
import AuthState  from '@/store/auth/index';
import BodyParams from '@/store/body/index';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    AuthState,
    BodyParams
  }
})
