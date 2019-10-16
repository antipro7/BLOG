<template>
  <div>
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <productList/>
    <shoppingCart/>
  </div>
</template>

<script>
import productList from './components/productList'
import shoppingCart from './components/shoppingCart'

export default {
  name: 'vuexShoppingCart',
  components: {
    productList,
    shoppingCart
  }
}
</script>

<style lang="less" scoped>

</style>
