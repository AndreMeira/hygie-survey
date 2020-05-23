export default {

  "set current survey" (state, survey) {
    state.currentSurvey = survey
  },

  "set question number" (state, number) {
    state.currentSurvey.currentQuestion = number
  },

  "increment question" (state, currentSurvey) {
    currentSurvey.currentQuestion = currentSurvey.currentQuestion + 1
    state.currentSurvey = currentSurvey
  },

  "decrement question" (state, currentSurvey) {
    currentSurvey.currentQuestion = currentSurvey.currentQuestion - 1
    state.currentSurvey = currentSurvey
  },

  "save answer" (state, {question, answers, comment = ""}) {
    question.response = answers
    question.comment = comment
  }
}
