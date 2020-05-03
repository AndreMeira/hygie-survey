export default {

  "set current survey" (state, survey) {
    state.currentSurvey = survey
  },

  "increment question" (state, currentSurvey) {
    currentSurvey.currentQuestion = currentSurvey.currentQuestion + 1
    state.currentSurvey = currentSurvey
  },

  "save answer" (state, answers) {
    currentQuestion = state.getters.currentQuestion
    currentQuestion.answers = answers
  }
}
