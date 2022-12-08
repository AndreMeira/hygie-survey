import Vue from 'vue'
import VueRouter from 'vue-router'
import Home      from '../views/Home.vue'
import Result    from '../views/ProfileResult.vue'
import List      from '../views/ResultsList.vue'
import Question  from '../views/Question.vue'
import Login     from '../views/Login.vue'
import Signup    from '../views/Signup.vue'
import PreviousAnswers from '../views/PreviousAnswers.vue'
import axios from 'axios'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/token/:token',
    redirect: to => {
      const { hash, params, query } = to
      const token = params.token
      window.localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
      return {name: "Home"}
    }
  },
  {
    path: '',
    name: 'Home',
    component: Home
  },
  {
    path: '/resultat',
    name: 'Result',
    component: Result
  },
  {
    path: '/question/profil',
    name: 'survey',
    component: Question
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
]

const router = new VueRouter({
  mode:"history",
  routes
})


router.beforeEach((to, from, next) => {
  const token = window.localStorage.getItem('token')

  if (['token'].includes(to.name)) {
    next()
  } else if (!token) {
      window.location.href = "https://login.hygieacademie.com/login"
      // next({ name: 'Login' })
      // console.log("not logged caught router", to.name)
  } else if (['Login', 'Signup'].includes(to.name) && token) {
    next({ name: 'Home' })
    console.log("route logged caught router", to.name)
  } else {
    next()
  }
})

export default router
