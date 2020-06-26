import Vue from 'vue'
import VueRouter from 'vue-router'
import Home      from '../views/Home.vue'
import Result    from '../views/Result.vue'
import List      from '../views/ResultsList.vue'
import Question  from '../views/Question.vue'
import Login     from '../views/Login.vue'
import Signup    from '../views/Signup.vue'
import PreviousAnswers from '../views/PreviousAnswers.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/question',
    name: 'Question',
    component: Question
  },
  {
    path: '/question/etat-de-sante',
    name: 'healthSurveySimple',
    component: Question,
    props: { category: "health" }
  },
  {
    path: '/question/etat-de-sante/:page',
    name: 'healthSurvey',
    component: Question,
    props: { category: "health" }
  },
  {
    path: '/question/alimentation',
    name: 'foodSurveySimple',
    component: Question,
    props: { category: "food" }
  },
  {
    path: '/question/alimentation/:page',
    name: 'foodSurvey',
    component: Question,
    props: { category: "food" }
  },
  {
    path: '/resultat/alimentation/:id',
    name: 'foodResult',
    component: PreviousAnswers,
    props: { category: "food" }
  },
  {
    path: '/resultat/etat-de-sante/:id',
    name: 'healthResult',
    component: PreviousAnswers,
    props: { category: "health" }
  },
  {
    path: '/resultats/:cat',
    name: 'resultList',
    component: List
  },
  {
    path: '/response-precedente/:id',
    name: 'PreviousAnswers',
    component: PreviousAnswers
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
  if (!['Login', 'Signup'].includes(to.name) && !token) {
      next({ name: 'Login' })
      console.log("not logged caught router", to.name)
  } else if (['Login', 'Signup'].includes(to.name) && token) {
    next({ name: 'Home' })
    console.log("route logged caught router", to.name)
  } else {
    next()
  }
})

export default router
