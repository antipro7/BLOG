// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import utils from './utils/index'
import { currency } from './utils/util'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.use(utils)
Vue.filter('currency', currency)

// build/webpack.base.conf.js 文件里注入了element的模块名 ‘ELEMENT’
// Vue.use(ELEMENT)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
