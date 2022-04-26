import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/newpage',
    name: 'newpage',
    component: () => import ('../views/NewPage.vue'),
    children: [{
      path: 'a',
      component: () => import('../views/componentA.vue'),
    },{
      path: 'b',
      component: () => import('../views/componentB.vue'),
    },{
      path: 'namedview',
      component: () => import('../views/namedView.vue'),
      children: [{
        path: 'b2c',
        components: {
          left: () => import('../views/componentB'),
          right: () => import('../views/componentC'),
        }
      },{
        path: 'c2a',
        components: {
          left: () => import('../views/componentC'),
          right: () => import('../views/componentA'),
        }
      }]
    }]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
