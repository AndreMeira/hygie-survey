export default {

  /**
   *
   */
  "set current user" (state, user) {
    state.auth.user = user;
  },

  /**
   *
   */
  "set current token" (state, token) {
    state.auth.token = token;
  },

  /**
   *
   */
  "set current register error" (state, error) {
    state.register.error = error
  }
}
