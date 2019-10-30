<template>
  <div>
    <section>
      <h2>API</h2>
      <ol>
        <li @click="$go('getBoundingClientRect')">getBoundingClientRect</li>
        <li @click="$go('debounceThrottle')">防抖与节流</li>
        <li @click="$go('functionPro')">函数式编程</li>
      </ol>
    </section>
  </div>
</template>

<script>
export default {
  name: 'JS',
  methods: {
  }
}
</script>

<style lang="less" scoped>
li {
  margin: 10px;
  cursor: pointer;
  transition: all .2s ease-in-out;
  &:hover {
    color: #ff4a3c;
  }
}
</style>
