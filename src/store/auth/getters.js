export default {

  /**
   *
   */
  user(state) {
    return state.auth.user
  },

  /**
   *
   */
  currentUser(state) {
    return state.auth.user
  },

  /**
   *
   */
  currentToken(state) {
    return state.auth.token
  }
}
