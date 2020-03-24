<template>
  <div>
    <section>
      <h2>Loading加载动画</h2>
      <ol>
        <li @click="$go('css/loading')">Loaders</li>
        <li @click="$go('css/demo')">css-demo</li>
      </ol>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CSS'
}
</script>

<style lang="less" scoped>
li {
  margin: 10px;
  cursor: pointer;
  transition: all .2s ease-in-out;
  &:hover {
    color: #2e89db;
  }
}
</style>
