export default {

  /**
   *
   */
  userBody(state, getters) {
    return getters.user ? getters.user.body || {} : {}
  },

  /**
   *
   */
  userBodyFat(state, getters) {
    return getters.user ? getters.user.fat || {} : {}
  },

}
