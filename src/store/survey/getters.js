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

  currentNaturoProfile(state, getters) {
    const result = {
      "VITA": state.type.filter(e => e === "A").length,
      "SANA": state.type.filter(e => e === "B").length,
      "NOVA": state.type.filter(e => e === "C").length,
      "LUNA": state.type.filter(e => e === "D").length,
    }

    return ["VITA", "SANA", "NOVA", "LUNA"].sort((a, b) => {
      return result[a] > result[b]  ? -1 : 1
    })
  },

  primaryProfile(state, getters) {
    return getters.currentNaturoProfile[0]
  },

  secondaryProfile(state, getters) {
    return getters.currentNaturoProfile[1]
  }
}
