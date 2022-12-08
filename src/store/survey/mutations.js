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

  "reset answers" (state, currentSurvey) {
    state.type = []
  },

  "save answer" (state, {question, answers, comment = ""}) {
    const type = question.answers
      .filter(e => answers.includes(e.id))
      .map(e => e.type)

    question.response = answers
    question.comment = comment
    state.type = state.type.concat(type)
    console.log("state.type", state.type, answers)
  }
}
