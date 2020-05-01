import urls  from '@/config/urls'
import oauth from '@/config/client'
import axios from 'axios'

export default {
  /**
   *
   */
  "save survey" (context, params) {
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
  "load survey" (context, params) {
    return new Promise((resolve, reject) => {
        axios.get(urls.saveSurvey, params).then(({data}) => {
            context.commit("set current user", data)
            resolve(data)
        }).catch(e => {
          console.log(e)
          reject(e)
        });
    });
  }
}
