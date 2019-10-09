import Vue from 'vue'
import Router from 'vue-router'
import CSS from '@/components/css'
import JS from '@/components/js'
import getBoundingClientRect from '@/pages/getBoundingClientRect'
import debounceThrottle from '@/pages/debounceThrottle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CSS',
      component: CSS
    },
    {
      path: '/js',
      name: 'JS',
      component: JS
    },
    {
      path: '/getBoundingClientRect',
      name: 'getBoundingClientRect',
      component: getBoundingClientRect
    },
    {
      path: '/debounceThrottle',
      name: 'debounceThrottle',
      component: debounceThrottle
    }
  ]
})
