
// 路由跳转
function go (url) {
  this.$router.push(url)
}

export default {
  install (Vue) {
    Vue.prototype.$go = go
  }
}
