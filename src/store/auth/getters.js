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
  currentResult(state) {
    return state.auth.currentResult
  },

  /**
   *
   */
  currentToken(state) {
    return state.auth.token
  },

  /**
   *
   */
  results: (state) => (category) => {
    return state.auth.user ?
      state.auth.user.results.filter(e => e.category === category)
      : null
  },

  /**
   *
   */
  scores: (state) => (category) => {
    return (state.auth.user ?
      state.auth.user.results.filter(e => e.category === category)
      : []).map(e => {
          return {
            "score":e.score,
            "date":e.completed_at
          }
        })
  },

  /**
   *
   */
  allResults (state) {
    return state.auth.user ? state.auth.user.results : null
  },

  /**
   *
   */
  resultById: (state) => (id) => {
    return state.auth.user ?
      state.auth.user.results.find(e => e.id === id)
      : null
  },
}
