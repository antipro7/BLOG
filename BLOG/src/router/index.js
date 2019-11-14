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
      path: '/js/getBoundingClientRect',
      name: 'getBoundingClientRect',
      component: () => import('@/pages/JS/getBoundingClientRect')
    },
    {
      path: '/js/debounceThrottle',
      name: 'debounceThrottle',
      component: () => import('@/pages/JS/debounceThrottle')
    },
    {
      path: '/vue/vuexShoppingCart',
      name: 'vuexShoppingCart',
      component: () => import('@/pages/VUE/vuex-shoppingCart/index')
    },
    {
      path: '/js/functionPro',
      name: 'functionPro',
      component: () => import('@/pages/JS/functionPro')
    },
    {
      path: '/css/loading',
      name: 'loading',
      component: () => import('@/pages/CSS/loading')
    },
    {
      path: '/js/virtualList',
      name: 'virtualList',
      component: () => import('@/pages/JS/virtual-list/index')
    },
    {
      path: '/vue/mvvm',
      name: 'mvvm',
      component: () => import('@/pages/VUE/MVVM/index')
    }
  ]
})
