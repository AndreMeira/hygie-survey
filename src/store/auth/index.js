import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {

  /**
   *
   */
  state: {
    auth:{
      token:null,
      user:null,
      currentResult:null
    }
  },

  /**
   *
   */
  mutations: {
    ...mutations
  },

  /**
   *
   */
  actions: {
    ...actions
  },

  /**
   *
   */
  getters: {
    ...getters
  }
}
