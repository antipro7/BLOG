<template>
  <div class="loading">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
</template>

<style lang="less" scoped>
@colors: #7ef9ff, #89cff0, #4682b4, #0f52ba, #000080;

.loading {
  display: flex;
  align-items: center;
  height: 200px;
  animation-delay: 1s;
  .dot {
    position: relative;
    width: 2em;
    height: 2em;
    margin: 0.8em;
    border-radius: 50%;
    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background: inherit;
      border-radius: inherit;
      animation: wave 2s ease-out infinite;
    }

    .for-nth(@n, @i: 1) when (@i =< @n) {
      &:nth-child(@{i}) {
        background: extract(@colors, @i);
        &::before {
          animation-delay: @i * .2s;
        }
      }
      .for-nth(@n, (@i + 1))
    }
    .for-nth(5);
  }
}
@keyframes wave {
  50%,
  75% {
    transform: scale(2.5);
  }
  80%,
  100% {
    opacity: 0;
  }
}

</style>
