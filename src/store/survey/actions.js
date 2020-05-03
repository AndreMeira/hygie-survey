import urls   from '@/config/urls'
import oauth  from '@/config/client'
import axios  from 'axios'


import user   from '@/data/user'
import food   from '@/data/survey-food'
import health from '@/data/survey-health'

const TOKEN_GENERATOR = (function () {
  let incr = 0;
  return function (generate = true) {
    if (generate) incr++
    return incr
  }
})()

export default {

  "next question" ({context, state}, params) {
    return new Promise((resolve, reject) => {
        context.commit("increment question", state.getters.currentSurvey)
    });
  },

  /**
   *
   */
  "save survey" (context, params) {
    return new Promise((resolve, reject) => {
      resolve(user);
    })

    return new Promise((resolve, reject) => {
        axios.post(urls.saveSurvey, params).then(({data}) => {
            context.commit("set current user", data)
            resolve(data)
        }).catch(e => {
          console.log(e)
          reject(e)
        });
    });
  },

  /**
   *
   */
  "save answer" (context, { currentQuestion, answers }) {
    return new Promise((resolve, reject) => {
      context.commit("save answer", { currentQuestion, answers })
    });
  },

  /**
   *
   */
  "load survey as current" (context, category) {
    return new Promise((resolve, reject) => {
      resolve(category === "food" ? food : health);
    })
    
    const token = TOKEN_GENERATOR();

    return new Promise((resolve, reject) => {
        axios.get(urls.loadSurvey(category)).then(({data}) => {
            if (token === TOKEN_GENERATOR(false)) {
              context.commit("set current survey", data)
              resolve(data)
            }
        }).catch(e => {
          console.log(e)
          reject(e)
        });
    });
  }
}
