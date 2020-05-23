export default {

  /**
   *
   */
  userHealth(state, getters) {
    return getters.user ? getters.user.results.find((e) => {
      return e.category === "health"
    }) : {}
  },

  /**
   *
   */
  userFood(state, getters) {
    return getters.user ? getters.user.results.find((e) => {
      return e.category === "food"
    }) : {}
  },

  /**
   *
   */
  surveyHealth(state) {
    return state.surveys.find(e => e.category === "health")
  },

  /**
   *
   */
  surveyFood(state) {
    return state.surveys.find(e => e.category === "food")
  },

  /**
   *
   */
  currentSurvey(state) {
    return state.currentSurvey;
  },

  /**
   *
   */
  currentQuestionNumber(state, getters) {
    return getters.currentSurvey.currentQuestion
  },

  /**
   *
   */
  currentQuestion(state, getters) {
    return getters.currentSurvey.questions[
      getters.currentSurvey.currentQuestion
    ];
  },

  /**
   *
   */
  currentResponse(state, getters) {
    return getters.currentSurvey.response
  },
}
