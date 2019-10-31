<!-- 虚拟列表渲染大量数据 -->
<template>
  <div class="container">
    <div class="box">
      <h3>直接渲染10000条数据</h3>
      <button @click="addData">button</button><br>
      <p>JS运行时间：{{ origin.date1 }}</p>
      <p>总运行时间：{{ origin.date2 }}</p>
      <ol ref="origin"></ol>
    </div>
    <div class="box">
      <h3>使用fragment直接渲染10000条数据</h3>
      <button @click="addDataByFrag">button</button><br>
      <p>JS运行时间：{{ frag.date1 }}</p>
      <p>总运行时间：{{ frag.date2 }}</p>
      <ol ref="frag"></ol>
    </div>
    <V
      :listData="listData"
      :itemSize="100"
      />
  </div>
</template>

<script>
import V from './components/virtualList'

let d = []
for (let i = 0; i < 1000; i++) {
  d.push({ id: i, value: i })
}

export default {
  name: 'virtualList',
  data () {
    return {
      listData: d,
      total: 10000,
      origin: { date1: 0, date2: 0 },
      frag: { date1: 0, date2: 0 }
    }
  },
  components: {
    V
  },
  methods: {
    addData () {
      let now = Date.now()
      let t = this.$refs['origin']
      for (let i = 0; i < this.total; i++) {
        let li = document.createElement('li')
        li.innerHTML = ~~(Math.random() * this.total)
        t.appendChild(li)
      }
      this.origin.date1 = Date.now() - now
      setTimeout(() => {
        this.origin.date2 = Date.now() - now
      }, 0)
    },

    addDataByFrag () {
      let now = Date.now()
      let t = this.$refs['frag']
      let f = document.createDocumentFragment()
      for (let i = 0; i < this.total; i++) {
        let li = document.createElement('li')
        li.innerHTML = ~~(Math.random() * this.total)
        f.appendChild(li)
      }
      t.appendChild(f)
      this.frag.date1 = Date.now() - now
      setTimeout(() => {
        this.frag.date2 = Date.now() - now
      }, 0)
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .box {
    width: 48%;
    ol {
      max-height: 300px;
      padding-left: 20%;
      overflow: auto;
    }
  }
  .list-container {
    width: 300px;
    background-color: #eee;
  }
}
</style>
