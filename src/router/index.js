import Vue from 'vue'
import VueRouter from 'vue-router'
import Home      from '../views/Home.vue'
import Result    from '../views/Result.vue'
import Question  from '../views/Question.vue'

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
    name: 'healthSurvey',
    component: Question,
    props: { category: "health" }
  },
  {
    path: '/question/alimentation',
    name: 'foodSurvey',
    component: Question,
    props: { category: "health" }
  },
  {
    path: '/resultat/alimentation',
    name: 'resultFood',
    component: Result,
    props: { category: "food" }
  },
  {
    path: '/resultat/etat-de-sante',
    name: 'resultHealth',
    component: Result,
    props: { category: "health" }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode:"history",
  routes
})

export default router
