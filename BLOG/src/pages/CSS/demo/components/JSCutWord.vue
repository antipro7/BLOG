<template>
  <div class="cut-word-box">
    <button @click="click1">click1</button>
    <div class="part">
      <img src="./s.jpg" alt="">
      <p class="flow-span">胡惠娟，你看这里好不好看</p>
    </div>
    <div class="part">

    </div>
  </div>
</template>

<script>
export default {
  methods: {
    click1 () {
      let p = document.querySelectorAll('.flow-span');

      p.forEach(item => {
        let letters = item.textContent.split('');
        item.textContent = '';

        letters.forEach((letter, i) => {
          let span = document.createElement('span');
          this.$nextTick(() => {
            span.textContent = letter;
            span.style.animationDelay = `${i * 0.5}s`;
            span.setAttribute('class', 'flow');
            item.append(span);
          })
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.cut-word-box {
  width: 100%;
  font-size: 0;
  color: aliceblue;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .part {
    position: relative;
    .flow-span {
      font-size: 20px;
      font-weight: 600;
      position: absolute;
      z-index: 2;
      top: 50%;
      left: 50%;
      // transform: translate(-50%, -50%);
    }
    .flow {
      color: red;
      animation: flow 2s ease-out forwards;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(16, 16, 16, .8);
    }
  }
}

@keyframes flow {
  0% {
    opacity: 0;
    transform: translateY(-20%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
