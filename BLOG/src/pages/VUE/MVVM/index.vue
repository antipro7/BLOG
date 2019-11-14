<template>
  <div>
    <h2>浅析MVC | MVP | MVVM 模式</h2>
    <div class="grid">
      <div class="item a">
        <span class="num mvc-s"></span>
        <button class="decrease mvc-d">-</button>
        <button class="increase mvc-i">+</button>
      </div>
      <div class="item b"></div>
      <div class="item c"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
.grid {
  display: grid;
  width: 100%;
  height: 80%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  .item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px 100px;
    grid-template-areas: "num num"
                        "decrease increase";
    background-color: aliceblue;
    .num {
      grid-area: num;
      justify-self: center;
      align-self: center;
      color: black;
      font-weight: bold;
    }
    .decrease {
      grid-area: decrease
    }
    .increase {
      grid-area: increase
    }
  }
}
</style>
