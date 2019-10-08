<template>
  <div id="app">
    <section class="title">
      <router-link
        to='/'
        class="r title-css">CSS</router-link>
      <router-link
        to='/js'
        class="r title-js">JS</router-link>
    </section>
    <router-view class="content"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped>
#app {
  display: flex;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  .title {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30%;
    height: 100%;
    background-color: #1e1f26;
    .r {
      line-height: 250px;
      margin: 10px 20px;
      text-align: center;
      color: #fff;
      font-size: 60px;
      letter-spacing: 6px;
      border-radius: 10px;
      cursor: pointer;
      user-select: none;
      text-decoration: none;
    }
    .title-css {
      background: linear-gradient(135deg, #2875d7, #39b1e4);
      box-shadow: 0 6px 20px -6px rgba(49, 148, 222, .8);
    }
    .title-js {
      background: linear-gradient(135deg, #fe6200, #ff4a3c, #ff0b59);
      box-shadow: 0 6px 20px -6px rgba(255, 75, 56, .8);
    }
  }
  .content {
    flex: 1;
    margin: 50px;
  }
}
</style>
