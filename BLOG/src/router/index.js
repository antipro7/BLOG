import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CSS',
      component: () => import('@/components/css')
    },
    {
      path: '/js',
      name: 'JS',
      component: () => import('@/components/js')
    },
    {
      path: '/vue',
      name: 'VUE',
      component: () => import('@/components/vue')
    },
    {
      path: '/getBoundingClientRect',
      name: 'getBoundingClientRect',
      component: () => import('@/pages/getBoundingClientRect')
    },
    {
      path: '/debounceThrottle',
      name: 'debounceThrottle',
      component: () => import('@/pages/debounceThrottle')
    }
  ]
})
