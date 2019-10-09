<template>
  <div class="main">
    <div class="left">
      <h2>Simple Use</h2>
      <section class="intro">
        <span>元素</span>
        <div>
          <div>上边距离页面上边的距离：{{ drag.top }}</div>
          <div>右边距离页面左边的距离：{{ drag.right }}</div>
          <div>下边距离页面上边的距离：{{ drag.bottom }}</div>
          <div>右边距离页面左边的距离：{{ drag.left }}</div>
        </div>
        <div class="drag-div" ref="drag-div"></div>
      </section>
      <h3>元素上下滚动时</h3>
      <section class="intro">
        <span>元素</span>
        <div>
          <div>上边距离页面上边的距离：{{ scroll.top }}</div>
          <div>右边距离页面左边的距离：{{ scroll.right }}</div>
          <div>下边距离页面上边的距离：{{ scroll.bottom }}</div>
          <div>右边距离页面左边的距离：{{ scroll.left }}</div>
        </div>
        <div class="s-outer" ref="s-outer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, nostrum consectetur. Vero, nam nisi. Illo quae consequatur dicta consectetur dolor earum, eos magni cum, amet esse vel minima et nostrum!
          </p>
          <div class="s-div" ref="s-div"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, sequi? Beatae error, vero ducimus, consequuntur dolorem sed suscipit veniam ea culpa ut tenetur voluptate perferendis, aspernatur autem magni libero in.
            Odit sint voluptas magnam obcaecati, optio eius? Quia aliquam incidunt id beatae non quam, temporibus consequuntur iste voluptas reprehenderit aspernatur repudiandae maiores recusandae nesciunt labore ad quo animi vitae similique.
            Libero blanditiis nihil obcaecati mollitia rem adipisci odio vel sint eligendi aliquid voluptatum reprehenderit, est autem commodi dolorem praesentium aut dolorum iusto consequuntur vero. Quisquam voluptatum aspernatur nulla perspiciatis dolores?
          </p>
        </div>
      </section>
    </div>
    <div class="right">
      <h2>吸顶效果</h2>
      <div class="ceiling-box">
        <section class="ceiling" ref="ceiling">
          <div class="ceiling-outer">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dignissimos iusto adipisci tempora. Debitis nisi, vero, id sunt harum dolore corrupti alias placeat iure odit, fugiat veniam repudiandae porro quo.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dignissimos iusto adipisci tempora. Debitis nisi, vero, id sunt harum dolore corrupti alias placeat iure odit, fugiat veniam repudiandae porro quo.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dignissimos iusto adipisci tempora. Debitis nisi, vero, id sunt harum dolore corrupti alias placeat iure odit, fugiat veniam repudiandae porro quo.
            </p>
            <div
              ref="t-div"
              class="ceiling-t"
              :class="[titleFixed ? 'fixedTop' : '']"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, maiores voluptatum expedita, harum nisi repellendus earum et quod ad aliquid aut impedit adipisci veniam tempora unde facilis ipsa odio dolores!Ad ut sit maxime a illum non facilis modi quidem, quo ab quasi praesentium quia, fugiat natus harum totam dolorem soluta. Ratione ab delectus veritatis, excepturi repellendus amet cumque nemo?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, maiores voluptatum expedita, harum nisi repellendus earum et quod ad aliquid aut impedit adipisci veniam tempora unde facilis ipsa odio dolores!Ad ut sit maxime a illum non facilis modi quidem, quo ab quasi praesentium quia, fugiat natus harum totam dolorem soluta. Ratione ab delectus veritatis, excepturi repellendus amet cumque nemo?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, maiores voluptatum expedita, harum nisi repellendus earum et quod ad aliquid aut impedit adipisci veniam tempora unde facilis ipsa odio dolores!Ad ut sit maxime a illum non facilis modi quidem, quo ab quasi praesentium quia, fugiat natus harum totam dolorem soluta. Ratione ab delectus veritatis, excepturi repellendus amet cumque nemo?
            </p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'getBoundingClientRect',
  data () {
    return {
      drag: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      scroll: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      titleFixed: false // 吸顶效果
    }
  },
  mounted () {
    this.handleResize()
    this.handleScroll()
    window.addEventListener('resize', this.handleResize)
    this.$refs['s-outer'].addEventListener('scroll', this.handleScroll)
    this.$refs['ceiling'].addEventListener('scroll', this.ceilingScroll)
  },
  methods: {
    handleResize () {
      let t = this.$refs['drag-div'].getBoundingClientRect()
      this.drag.top = t.top
      this.drag.right = t.right
      this.drag.bottom = t.bottom
      this.drag.left = t.left
    },
    handleScroll () {
      let t = this.$refs['s-div'].getBoundingClientRect()
      this.scroll.top = t.top
      this.scroll.right = t.right
      this.scroll.bottom = t.bottom
      this.scroll.left = t.left
    },
    // 吸顶滚动事件
    ceilingScroll () {
      let tDiv = this.$refs['t-div']
      let top = this.$refs['ceiling'].getBoundingClientRect().top
      let t = tDiv.getBoundingClientRect().top
      let n = tDiv.nextElementSibling.getBoundingClientRect().top
      this.titleFixed = top >= t
      this.titleFixed = n < 190 // 修复吸顶后不能取消吸顶
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  overflow: hidden;
  .left {
    flex: 0 0 350px;
    .intro {
      span {
        margin-right: 20px;
      }
      .drag-div {
        width: 50px;
        height: 50px;
        margin-left: 50px;
        background-color: #fff;
        cursor: pointer;
      }
      .s-outer {
        width: 300px;
        height: 200px;
        margin-top: 10px;
        color: #000;
        background-color: #fff;
        overflow: auto;
        .s-div {
          width: 50px;
          height: 50px;
          background-color: #000;
        }
      }
    }
  }
  .right {
    flex: 0 0 350px;
    .ceiling-box {
      position: relative;
      width: 100%;
      height: 600px;
      margin-left: 50px;
      .ceiling {
        width: 100%;
        height: 100%;
        color: #000;
        background-color: #fff;
        overflow: auto;
        .ceiling-t {
          width: 100%;
          height: 50px;
          background-color: #141499;
        }
      }
    }
    .fixedTop {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>
