export default {

  "add result" (state, result) {
    let results = state.auth.user.results;
    results.push(result)
    state.auth.user.results = results
  },

  "set current result" (state, result) {
    state.auth.currentResult = result
  },

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
