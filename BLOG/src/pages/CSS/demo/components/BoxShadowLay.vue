<template>
  <div class="lay">
    <input type="checkbox" id="toggle">
    <label for="toggle" class="menu">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </label>
    <div class="overlay"></div>
  </div>
</template>

<style lang="less" scoped>
.lay {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;

  #toggle {
    appearance: none;
    opacity: 0;

    &:checked {
      &~.overlay {
        opacity: 1;
        transform:  scale(160);
      }

      &~.menu {
        .line {
          &:nth-child(1) {
            transform: translateY(calc(var(--menu-radius) / 5)) rotate(45deg);
          }
          &:nth-child(2) {
            transform: scaleX(0);
          }
          &:nth-child(3) {
            transform: translateY(calc(var(--menu-radius) / -5)) rotate(-45deg);
          }
        }
      }
    }
  }

  .menu {
    --menu-radius: 4em;
    position: relative;
    z-index: 100;
    display: block;
    width: var(--menu-radius);
    height: var(--menu-radius);
    background: white;
    border: solid 2px hsla(184, 9%, 62%, 0.4);
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    transition: 0.5s ease-in-out;

    &:hover {
      box-shadow: 0.4px 0.4px 0.8px rgba(0, 0, 0, 0.042),
                  1px 1px 2px rgba(0, 0, 0, 0.061),
                  1.9px 1.9px 3.8px rgba(0, 0, 0, 0.075),
                  3.4px 3.4px 6.7px rgba(0, 0, 0, 0.089),
                  6.3px 6.3px 12.5px rgba(0, 0, 0, 0.108),
                  15px 15px 30px rgba(0, 0, 0, 0.15);
      .line::after {
        transform: translateX(0);
      }
    }

    .line {
      position: absolute;
      left: 25%;
      width: 50%;
      height: 3px;
      background: hsla(210, 29%, 24%, 0.3);
      border-radius: 10px;
      overflow: hidden;
      transition: all 0.5s ease;

      &:nth-child(1) { top: 30%; }
      &:nth-child(2) { top: 50%; }
      &:nth-child(3) { top: 70%; }
      &::after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #2980b9;
        transform: translateX(-100%);
        transition: all .25s ease;
      }
    }
  }

  .overlay {
    position: absolute;
    width: 2em;
    height: 2em;
    background: hsla(204, 64%, 44%, .9);
    border-radius: 50%;
    opacity: 0;
    transition: .5s ease-in-out;
    will-change: transform;
  }
}
</style>
