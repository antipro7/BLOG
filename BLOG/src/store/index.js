import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/vuex-shoppingCart/cart'
import products from './modules/vuex-shoppingCart/products'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    products
  }
})
