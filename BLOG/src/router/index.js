import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CSS',
      component: () => import('@/pages/css')
    },
    {
      path: '/js',
      name: 'JS',
      component: () => import('@/pages/js')
    },
    {
      path: '/vue',
      name: 'VUE',
      component: () => import('@/pages/vue')
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
      path: '/css/demo',
      name: 'css-demo',
      component: () => import('@/pages/CSS/demo')
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
    },
    {
      path: '/vue/tinymce',
      name: 'tinymce',
      component: () => import('@/pages/VUE/Tinymce/index')
    }
  ]
})
