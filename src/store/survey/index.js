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
    currentSurvey:null,
    surveys:[]
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
