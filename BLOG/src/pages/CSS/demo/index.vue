<template>
  <div class="container">
    <card>
      交错动画
      <template v-slot:content>
        <interlaceAni></interlaceAni>
      </template>
    </card>

    <card>
      JS分割文本
      <template v-slot:content>
        <JSCutWord></JSCutWord>
      </template>
    </card>

  </div>
</template>

<script>
import card from '@/components/card'
import interlaceAni from './components/interlaceAni'
import JSCutWord from './components/JSCutWord'

export default {
  components: {
    card,
    interlaceAni,
    JSCutWord
  }
}
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-flow: column wrap;
  height: 100%;
  overflow-y: auto;
  // counter-reset: items;
  /**强制换列 */
  &::before, &::after {
    content: '';
    flex-basis: 100%;
    width: 0;
    order: 2;
  }
  .card {
    width: 48%;
    margin-bottom: 20px;
    // 仅用来打印数字
    // &::before {
    //   counter-increment: items;
    //   content: counter(items);
    // }
    &:nth-child(2n) {
      order: 2;
    }
    &:nth-child(2n + 1) {
      order: 1;
    }
  }
}
</style>
