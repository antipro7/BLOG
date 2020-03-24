<template>
  <div id="container">
    <h1>{{ initData }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      initData: 'Vue开发环境运行成功啦~~~'
    }
  },
}
</script>

<style lang="less" scoped>
#container {
  display: flex;
  color: red;
  span {
    cursor: not-allowed;
  }
}
</style>