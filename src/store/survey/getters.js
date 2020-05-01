export default {

  /**
   *
   */
  userHealth(state, getters) {
    return getters.user ? getters.user.results.find((e) => {
      return e.category === "health"
    })
  },

  /**
   *
   */
  userFood(state, getters) {
    return getters.user ? getters.user.results.find((e) => {
      return e.category === "food"
    })
  },

  result: (state) => (category) => {
    return state.surveys.find(e => e.category === category)
  }

  surveyHealth(state) {
    return state.surveys.find(e => e.category === "health")
  },

  surveyFood(state) {
    return state.surveys.find(e => e.category === "food")
  },
}
