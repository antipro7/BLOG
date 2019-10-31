<template>
  <ul>
    <li
      v-for="product in all"
      :key="product.id">
      {{ product.title }} - {{ product.price | currency }}
      <br>
      <button
        :disabled="product.inventory < 1"
        @click="cart(product)">
        Add to cart
      </button>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('products', ['all'])
  },
  methods: {
    ...mapActions({
      cart: 'cart/addProductToCart'
    })
  },
  created () {
    this.$store.dispatch('products/getAllProducts')
  }
}
</script>
