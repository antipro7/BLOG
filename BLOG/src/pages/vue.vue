<template>
  <div>
    <section>
      <h2></h2>
      <ol>
        <li @click="$go('vue/vuexShoppingCart')">Vuex购物车实例</li>
        <li @click="$go('vue/mvvm')">浅析MVC | MVP | MVVM 模式</li>
        <li @click="$go('vue/tinymce')">富文本</li>
      </ol>
    </section>
  </div>
</template>

<script>
export default {
  name: 'VUE'
}
</script>

<style lang="less" scoped>
li {
  margin: 10px;
  cursor: pointer;
  transition: all .2s ease-in-out;
  &:hover {
    color: #3a796e;
  }
}
</style>
