import shop from '@/pages/VUE/vuex-shoppingCart/api/shop'

const state = {
  all: []
}

const getters = {}

const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit('setProducts', products)
    })
  }
}

const mutations = {
  // 保存商品信息
  setProducts (state, products) {
    state.all = products
  },

  // 减少商品数量
  decrementProductInventory (state, { id }) {
    const product = state.all.find(product => product.id === id
    )
    product.inventory--
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
