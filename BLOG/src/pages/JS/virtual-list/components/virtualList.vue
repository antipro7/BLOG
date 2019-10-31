<template>
  <div ref="list" class="list-container" @scroll="scrollEvent($event)">
    <div
      class="list-phantom"
      :style="{ height: listHeight + 'px' }"></div>
    <div class="list" :style="{ transform: getTransform }">
      <div
        class="list-item"
        v-for="item in visibleData"
        :key="item.id"
        :style="{ height: itemSize + 'px', lineHeight: itemSize + 'px' }">{{ item.value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 起始索引
      start: 0,
      // 结束索引
      end: null,
      // 偏移量(纠正渲染区域偏移)
      startOffset: 0,
      // 可视区域高度
      screenHeight: 0
    }
  },
  props: {
    // 所有数据
    listData: {
      type: Array,
      default: () => []
    },
    // 每项数据默认高度
    itemSize: {
      type: Number,
      default: 200
    }
  },
  computed: {
    // 列表总高度
    listHeight () {
      return this.listData.length * this.itemSize
    },

    // 可显示的列表项数
    visibleCount () {
      return Math.ceil(this.screenHeight / this.itemSize)
    },

    // 偏移量
    getTransform () {
      return `translate3d(0, ${this.startOffset}px, 0)`
    },

    // 计算真实渲染的数据
    visibleData () {
      return this.listData.slice(this.start, Math.min(this.end, this.listData.length))
    }
  },
  mounted () {
    // 当前组件的可视高度
    this.screenHeight = this.$el.clientHeight
    this.start = 0
    this.end = this.start + this.visibleCount
  },
  methods: {
    scrollEvent () {
      let scrollTop = this.$refs['list'].scrollTop
      this.start = Math.floor(scrollTop / this.itemSize)
      this.startOffset = scrollTop - (scrollTop % this.itemSize)
      this.end = this.start + this.visibleCount
    }
  }
}
</script>

<style lang="less" scoped>
.list-container {
  position: relative;
  height: 100%;
  overflow: auto;
  .list-phantom {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
  .list {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    .list-item {
      padding: 10px;
      color: #555;
      box-sizing: border-box;
      border-bottom: 1px solid #999;
    }
  }
}
</style>
