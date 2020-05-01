import Vue from 'vue'
import VueRouter from 'vue-router'
import Home      from '../views/Home.vue'
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
    path: '/etat-de-sante',
    name: 'healthSurvey',
    component: Question
  },
  {
    path: '/alimentation',
    name: 'foodSurvey',
    component: Question
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
