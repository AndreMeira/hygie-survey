import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
import axios from 'axios'

Vue.config.productionTip = false

const token = window.localStorage.getItem('token')

if (!!token) {
  console.log("logged", token)
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
} else {
  console.log("not logged", token)
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
