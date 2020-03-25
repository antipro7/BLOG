<template>
  <div>
    <div class="container">
      <card>
        交错动画
        <template v-slot:content>
          <interlaceAni></interlaceAni>
        </template>
      </card>

      <!-- <card>
        JS分割文本
        <template v-slot:content>
          <JSCutWord></JSCutWord>
        </template>
      </card> -->

      <card>
        边框
        <template v-slot:content>
          <PseudoClass></PseudoClass>
        </template>
      </card>

      <card class="card-btm-nav">
        底部导航栏
        <template v-slot:content>
          <BottomNav></BottomNav>
        </template>
      </card>

      <card class="card-lay">
        遮罩层
        利用box-shadow
        <template v-slot:content>
          <BoxShadowLay></BoxShadowLay>
        </template>
      </card>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
import interlaceAni from './components/interlaceAni'
import JSCutWord from './components/JSCutWord'
import PseudoClass from './components/PseudoClass'
import BottomNav from './components/BottomNav'
import BoxShadowLay from './components/BoxShadowLay'

export default {
  components: {
    card,
    interlaceAni,
    JSCutWord,
    PseudoClass,
    BottomNav,
    BoxShadowLay
  }
}
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-flow: column wrap;
  height: 1700px; // 要比最长的一列要大才行
  overflow-x: hidden;
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

  /deep/ .card-btm-nav,/deep/ .card-lay {
    .content {
      background: #fff;
    }
  }
}
</style>
