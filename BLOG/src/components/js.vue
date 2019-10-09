<template>
  <div>
    <section>
      <h2>API</h2>
      <ol>
        <li @click="goContent('getBoundingClientRect')">getBoundingClientRect</li>
        <li @click="goContent('debounceThrottle')">防抖与节流</li>
      </ol>
    </section>
  </div>
</template>

<script>
export default {
  name: 'JS',
  methods: {
    goContent (url) {
      this.$router.push(url)
    }
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
