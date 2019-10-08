import Vue from 'vue'
import Router from 'vue-router'
import CSS from '@/pages/css'
import JS from '@/pages/js'

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
    }
  ]
})
