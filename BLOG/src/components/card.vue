<template>
  <div class="card">
    <div class="title">
      <slot>默认名字Title</slot>
    </div>
    <slot name="intro"></slot>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.card {
  display: flex;
  flex-direction: column;
  padding: 15px;
  color: #333;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 6px 20px -6px rgba(0, 0, 0, .1);
  .title {
    font-weight: bold;
    margin-bottom: 15px;
  }
  .content {
    // flex: 1 1 auto;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 15px 0;
    overflow: hidden;
    background-color: #000;
  }
}
</style>
