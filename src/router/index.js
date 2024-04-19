import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Jobs from '../views/jobs/JobsView.vue'
import JobDetails from '../views/jobs/JobDetail.vue'
import NotFound from '../views/NotFound.vue'
import Employer from '../views/Employer.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component:About

  },
  {
    path:'/jobs',
    name:'jobs',
    component:Jobs
  },
  {
    path:'/employer',
    name:'employer',
    component:Employer

  },
  {
    path:'/jobs/:id',
    name:'JobDetails',
    component:JobDetails,
    props:true
  },

  //if user enters path  all-jobs redirect to page jobs
  {
    path:'/all-jobs',
    redirect:'/jobs'
  },

  
  //all 404
  {
    path:'/:catchAll(.*)',
    name:'NotFound',
    component:NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
