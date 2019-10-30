<template>
  <div id="app">
    <section
      class="title"
      :class="[ifAbbreviation ? 'abbr' : '']"
      @click="toggleLeft">
      <router-link
        to='/'
        class="r title-css">CSS</router-link>
      <router-link
        to='/js'
        class="r title-js">JS</router-link>
      <router-link
        to='/vue'
        class="r title-vue">VUE</router-link>
    </section>
    <router-view class="content"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      ifAbbreviation: false
    }
  },
  methods: {
    toggleLeft () {
      this.ifAbbreviation = !this.ifAbbreviation
    }
  }
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
  user-select: none;
  .title {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 20%;
    height: 100%;
    padding: 20px;
    background-color: #1e1f26;
    font-size: 5vw;
    transition: all .2s ease-in-out;
    .r {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1 0;
      margin-bottom: 20px;
      color: #fff;
      letter-spacing: 6px;
      border-radius: 10px;
      cursor: pointer;
      text-decoration: none;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .title-css {
      background: linear-gradient(135deg, #2875d7, #39b1e4);
      box-shadow: 0 6px 20px -6px rgba(49, 148, 222, .8);
    }
    .title-js {
      background: linear-gradient(135deg, #fe6200, #ff4a3c, #ff0b59);
      box-shadow: 0 6px 20px -6px rgba(255, 75, 56, .8);
    }
    .title-vue {
      background: linear-gradient(135deg, #41b883, #35495e);
      box-shadow: 0 6px 20px -6px rgba(35, 145, 112, 0.8);
    }
  }
  .content {
    flex: 1;
    height: 100%;
    padding: 50px;
    overflow: auto;
  }

  .abbr {
    width: 2%;
    padding: 0;
    font-size: 0;
  }
}
</style>
