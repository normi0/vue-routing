import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobsDetails from '../views/jobs/JobsDetails.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/jobs',
      name: 'Jobs',
      component: Jobs,
    },
    {
      path: '/jobs/:id/:jobData',
      name: 'JobsDetails',
      component: JobsDetails,
      props: true,
    },
  ],
})

export default router
