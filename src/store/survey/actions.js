import urls   from '@/config/urls'
import oauth  from '@/config/client'
import axios  from 'axios'


import user   from '@/data/user'
import profile from '@/data/profile-one'
// import health from '@/data/survey-health'

const TOKEN_GENERATOR = (function () {
  let incr = 0;
  return function (generate = true) {
    if (generate) incr++
    return incr
  }
})()

export default {

  /**
   *
   */
  "set question number" ({commit, getters}, number) {
    return new Promise((resolve, reject) => {
        commit("set question number", number)
        resolve({})
    });
  },

  /**
   *
   */
  "next question" ({commit, getters}, params) {
    return new Promise((resolve, reject) => {
        commit("increment question", getters.currentSurvey)
        resolve({})
    });
  },

  /**
   *
   */
  "previous question" ({commit, getters}, params) {
    return new Promise((resolve, reject) => {
        commit("decrement question", getters.currentSurvey)
        resolve({})
    });

  },

  /**
   *
   */
  "save survey" (context, params) {

      // return new Promise((resolve, reject) => {
      //     axios.post(urls.saveSurvey, params).then(({data}) => {
      //         context.commit("add result", data)
      //         context.commit("set current result", data)
      //         resolve(data)
      //     }).catch(e => {
      //       console.log(e)
      //       reject(e)
      //     });
      // });
  },

  /**
   *
   */
  "reset answers" (context) {
    return new Promise((resolve, reject) => {
      context.commit("reset answers")
    });
  },

  /**
   *
   */
  "save answer" (context, { currentQuestion, answers, comment }) {
    return new Promise((resolve, reject) => {
      context.commit("save answer", {
        question:currentQuestion,
        answers,
        comment
      })
    });
  },

  "load previous answers" (context, id) {
    // return new Promise((resolve, reject) => {
    //     axios.get(urls.loadPreviousAnswers(id)).then(({data}) => {
    //         resolve(data)
    //     }).catch(e => {
    //       console.log(e)
    //       reject(e)
    //     });
    // });
  },

  /**
   *
   */
  "load survey as current" (context, {category, page}) {

    return new Promise((resolve, reject) => {
      context.commit("set current survey", profile)
      context.commit("set question number", page ? page - 1 : 0)
      resolve(profile);
    })
  }
}
