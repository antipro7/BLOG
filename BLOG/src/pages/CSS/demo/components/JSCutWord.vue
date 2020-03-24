<template>
  <div class="cut-word-box">
    <div class="part">
      <img src="./s.jpg" alt="">
      <p class="flow-span">胡惠娟，你看这里好不好看 <span>asdasdasd</span></p>
    </div>
    <div class="part">

    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    // let p = document.querySelectorAll('.flow-span');
    // p.forEach(item => {
    //   let letters = item.textContent.split('');

    //   item.textContent = '';
    //   letters.forEach((letter, i) => {
    //     let span = document.createElement('span');

    //     span.textContent = letter;
    //     span.style.animationDelay = `${i * 0.5}s`;
    //     // span.style.animation = `flow .8s ease-out both`;
    //     item.append(span)
    //   })
    // })
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
    p {
      font-size: 20px;
      font-weight: 600;
      position: absolute;
      z-index: 2;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      span {
        animation: flow 2s ease-out both;
      }
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
}
</style>
