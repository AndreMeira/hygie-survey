import urls from '@/config/urls'
import oauth from '@/config/client'
import axios from 'axios'

export default {
  /**
   *
   */
  "authenticate user" (context, credentials) {

    return new Promise((resolve, reject) => {
        window.localStorage.removeItem('token');

        const data = {...credentials, ...oauth}
        axios.post(urls.auth, data).then(({data}) => {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.access_token

            context.dispatch("load current user").then(user => {
              window.localStorage.setItem('token', data.access_token);
              context.commit("set current token", data.access_token);
              resolve(user);
            }).catch(e => reject(e))
        }).catch(e => {
          console.log(e)
          reject(e)
        });
    });
  },


  /**
   *
   */
  "load current user" (context) {
    return new Promise((resolve, reject) => {
        if (context.getters.currentUser) {
            resolve(context.getters.currentUser);
        }

        axios.get(urls.me).then(({data}) => {
            context.commit("set current user", data);
            resolve(data);
        }).catch((e) => {
          window.localStorage.removeItem('token');
          reject(e)
        });
    });
  },

  "logout user" (context) {
    return new Promise((resolve, reject) => {
        window.localStorage.removeItem('token');

        axios.post(urls.logout).then(({data}) => {
            context.commit("set current user", {});
            resolve(data);
        });
    });
  },
  /**
   *
   */
  "register user" (context, data) {
    return new Promise((resolve, reject) => {
        axios.post(urls.register, data).then(({data}) => {
            resolve(data.user)
        }).catch(({response}) => {
          reject(response.data)
        });
    });
  }
}
