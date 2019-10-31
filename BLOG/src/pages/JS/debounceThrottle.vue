<template>
  <div class="main">
    <h2>防抖与节流</h2>
    <p style="width: 800px">
      防抖和节流的作用都是防止函数多次调用,为了减少一个函数无用的触发次数，以便提高性能或者说避免资源浪费。我们都知道js在操作DOM的时候，代价非常昂贵，相对于非DOM操作需要更多的内存和和CPU时间。<br>区别在于,假设一个用户一直触发这个函数，且每次触发函数的间隔小于wait，防抖的情况下只会调用一次，而节流的 情况会每隔一定时间（参数wait）调用函数。
    </p>
    <section class="s">
      <div class="fangdou">
        <h4>防抖</h4>
        <p class="intro">
          所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间
        </p>
      </div>
      <div class="jieliu">
        <h4>节流</h4>
        <p class="intro">
          所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。 节流会稀释函数的执行频率.
        </p>
      </div>
    </section>
    <div class="gray-div" ref="gray">
    </div>
    <span class="control">
      <span
        class="f-btn"
        v-for="(item, index) in model"
        :key="index"
        :data-index="index"
        @click="chooseM"
        :class="[index === currentIndex ? 'active' : '']">{{ item }}</span>
    </span>
    <section class="quote">
      <h3>参考文章</h3>
      <a href="https://juejin.im/post/5cce5380f265da03826129bf" target="blank">前端战五渣学JavaScript——防抖、节流和rAF</a>
      <a href="https://juejin.im/post/5b651dc15188251aa30c8669" target="blank">函数防抖和节流</a>
    </section>
  </div>
</template>

<script>
export default {
  name: 'debounceThrottle',
  data () {
    return {
      currentIndex: 0,
      num: 1,
      model: ['没限制', '防抖', '节流']
    }
  },
  computed: {
    g () {
      return this.$refs['gray']
    }
  },
  mounted () {
    this.g.onmousemove = this.count
  },
  methods: {
    count () {
      this.g.innerHTML = this.num++
    },
    chooseM (e) {
      this.currentIndex = parseInt(e.currentTarget.dataset.index)
      switch (this.currentIndex) {
        case 0:
          this.g.onmousemove = this.count
          break
        case 1:
          this.fangdou()
          break
        case 2:
          this.jieliu()
          break
      }
    },
    fangdou () {
      this.g.onmousemove = this.debounce(this.count)
    },
    jieliu () {
      this.g.onmousemove = this.throttle(this.count)
    },
    // 立即触发的防抖函数
    debounce (func, wait = 2000, immediate = true) {
      let timer = null
      let sign = true

      return function (...args) {
        if (timer) clearTimeout(timer)

        if (immediate && sign) {
          sign = false
          func.apply(this, args)
        }

        timer = setTimeout(() => {
          sign = true
        }, wait)
      }
    },
    /**
     * @desc 节流函数，两种形式
     * @param func 目标函数
     * @param wait 延迟执行时间
     * @param type 1表示时间戳版，2表示定时器版
     */
    throttle (func, wait = 2000, type = 1) {
      let previous = 0
      let timer

      return function () {
        let context = this
        let arg = arguments

        if (type === 1) {
          let now = Date.now()
          if (now - previous > wait) {
            func.apply(context, arg)
            previous = now
          }
        } else if (type === 2) {
          if (!timer) {
            timer = setTimeout(() => {
              timer = null
              func.apply(context, arg)
            }, wait)
          }
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  .s {
    display: flex;
    .jieliu {
      margin-left: 20px;
    }
    .intro {
      width: 500px;
    }
  }
  .gray-div {
    width: 600px;
    height: 200px;
    line-height: 200px;
    text-align: center;
    background-color: #cbcbcb;
    font-size: 80px;
    cursor: pointer;
  }
  .control {
    display: inline-block;
    margin-top: 20px;
    .f-btn {
      padding: 10px;
      margin: 0 10px;
      background-color: #999;
    }
    .active {
      color: #ff4a3c;
    }
  }
}
</style>
