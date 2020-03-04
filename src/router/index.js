import Vue from 'vue'
import VueRouter from 'vue-router'
import Project from '@/views/projects/Project'
import Deploy from '@/views/deploys/Deploy'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'projects.show',
    component: Project
  },
  {
    path: '/deploy',
    name: 'projects.deploy',
    component: Deploy
  }
]

const router = new VueRouter({
  routes
})

export default router
