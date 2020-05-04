import Vue from 'vue'
import Vuex from 'vuex'
import AuthState  from '@/store/auth/index';
import Survey     from '@/store/survey/index';

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
    Survey
  }
})
