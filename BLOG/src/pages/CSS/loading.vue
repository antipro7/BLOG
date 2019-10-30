<template>
  <div>
    <h1>CSS LOADERS</h1>
    <div class="block">
      <div class="box">Loader 1
        <div class="loader-1"></div>
      </div>
      <div class="box">Loader 2
        <div class="loader-2"></div>
      </div>
      <div class="box">Loader 3
        <div class="loader-3"></div>
      </div>
      <div class="box">Loader 4
        <div class="loader-4">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="box">Loader 5
        <div class="loader-5"></div>
      </div>
      <div class="box">Loader 6
        <div class="loader-6">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="box">Loader 7
        <div class="loader-7">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="box">Loader 8
        <div class="loader-8"></div>
      </div>
      <div class="box">Loader 9
        <div class="loader-9"></div>
      </div>
      <div class="box">Loader 10
        <div class="loader-10"></div>
      </div>
      <div class="box">Loader 11
        <div class="loader-11"></div>
      </div>
      <div class="box">Loader 12
        <div class="loader-12"></div>
      </div>
      <div class="box">Loader 13
        <div class="loader-13"></div>
      </div>
      <div class="box">Loader 14
        <div class="loader-14"></div>
      </div>
    </div>
    <h2>请把鼠标移入</h2>
    <div class="block">
      <div class="box">
        <div class="loader loader1">
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="loader loader2">
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="loader loader3">
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="loader loader4">
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
* {
  will-change: transform;
}

.block {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .box {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 20px;
    padding: 1em;
    color: #2875d7;
    text-align: center;
    background-color: #eee;
    -webkit-perspective: 120px;
    -moz-perspective: 120px;
    -ms-perspective: 120px;
    perspective: 120px;
  }
}

[class*="loader-"] {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 2em;
  height: 2em;
  margin: auto;
}

.loader-1 {
  border: .3em dotted #2875d7;
  border-radius: 50%;
  animation: loader-1 1s infinite ease-in-out;
}
@keyframes loader-1 {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}

.loader-2 {
  position: relative;
  &::before, &::after {
    content: '';
    position: absolute;
    top: 80%;
    left: -20%;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 6px solid transparent;
    border-top-color: #3498db;
  }
  &::before {
    z-index: 100;
    animation: loader-2 1s infinite;
  }
  &::after {
    border: 6px solid #ccc;
  }
}
@keyframes loader-2 {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}

.loader-3 {
  position: relative;
  top: 10%;
  width: 60px;
  height: 60px;
  &::before, &::after {
    content: '';
    position: absolute;
    top: 0;
    left: calc(50% - 10px);
    width: 14px;
    height: 14px;
    background-color: #2875d7;
    animation: loader-3 1s infinite ease-in-out;
  }
  &::after {
    animation-delay: .5s;
  }
}
@keyframes loader-3 {
  0%, 100% {
    transform: translate(0) rotate(0deg)
  }
  25% {
    transform: translate(30px, 30px) rotate(45deg)
  }
  50% {
    transform: translate(0px, 60px) rotate(0deg)
  }
  75% {
    transform: translate(-30px, 30px) rotate(45deg)
  }
}

.loader-4 {
  width: 80px;
  height: 80px;
  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #3498db;
    border-radius: 100%;
    animation: loader-4 1.5s infinite;
  }
  span:nth-child(1) {
    animation-delay: 1s;
  }
  span:nth-child(3) {
    animation-delay: .5s;
  }
}
@keyframes loader-4 {
  0%, 100% {
    background-color: #3498db;
  }
  50% {
    background-color: #2f7fb45d;
  }
}

.loader-5 {
  position: relative;
  width: 12px;
  height: 12px;
  margin-top: 40px;
  border-radius: 100%;
  background-color: #3498db;
  &::before, &::after {
    content: '';
    display: inline-block;
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background-color: #2f7fb45d;
  }
  &::before {
    margin-left: -32px;
    animation: loader-5b 1s infinite ease-in-out;
  }
  &::after {
    margin-left: 20px;
    animation: loader-5a 1s infinite ease-in-out;
  }
}
@keyframes loader-5b {
  0%, 100% {
    margin-left: -32px;
  }
  50% {
    margin-left: -6px;
  }
}
@keyframes loader-5a {
  0%, 100% {
    margin-left: 20px;
  }
  50% {
    margin-left: -6px;
  }
}

.loader-6 {
  span {
    display: inline-block;
    position: absolute;
    left: 0;
    width: 15px;
    height: 15px;
    background-color: #3498db;
  }
  span:nth-child(1) {
    animation: loader-6r 1s infinite;
  }
  span:nth-child(2) {
    animation: loader-6d 1s infinite;
  }
  span:nth-child(3) {
    animation: loader-6o 1s infinite;
  }
}
@keyframes loader-6r {
  0%, 100% {
    left: 0px;
  }
  50% {
    left: 20px;
  }
}
@keyframes loader-6d {
  0%, 100% {
    top: 0;
  }
  50% {
    top: 20px;
  }
}
@keyframes loader-6o {
  0%, 100% {
    top: 0;
    left: 0;
  }
  50% {
    top: 20px;
    left: 20px;
  }
}

.loader-7 {
  span {
    display: inline-block;
    width: 5px;
    height: 20px;
    background-color: #3498db;
    animation: loader-7 1s infinite ease-in-out;
    &:nth-child(1) {
      animation-delay: .25s
    }
    &:nth-child(2) {
      animation-delay: .5s
    }
    &:nth-child(3) {
      animation-delay: .75s
    }
  }
}
@keyframes loader-7 {
  0%, 100% {
    transform: scaleY(1)
  }
  50% {
    transform: scaleY(1.8)
  }
}

.loader-8 {
  width: 40px;
  height: 40px;
  background-color: #3498db;
  animation: loader-8 1s infinite;
}
@keyframes loader-8 {
  0% {
    transform: rotate(0)
  }
  50% {
    transform: rotateY(180deg)
  }
  100% {
    transform: rotateY(180deg) rotateX(180deg)
  }
}

.loader-9 {
  width: 90px;
  height: 90px;
  border: 3px solid #3498db;
  border-radius: 100%;
  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: calc(50% - 2px);
    width: 40px;
    height: 4px;
    border-radius: 4px;
    background-color: #3498db;
    transform-origin: 1% 50%;
    animation: loader-9l 2s infinite linear;
  }
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: calc(50% - 2px);
    width: 30px;
    height: 4px;
    background-color: #3498db;
    border-radius: 4px;
    transform-origin: 1% 50%;
    animation: loader-9s 12s infinite linear;
  }
}
@keyframes loader-9l {
  0% {
    transform: rotate(-90deg)
  }
  100% {
    transform: rotate(270deg)
  }
}
@keyframes loader-9s {
  0% {
    transform: rotate(-90deg)
  }
  100% {
    transform: rotate(270deg)
  }
}

.loader-10 {
  width: 90px;
  height: 90px;
  border: 3px solid #3498db;
  border-radius: 100%;
  transform-origin: 50% 50%;
  animation: loader-10 2s infinite;
  &::before, &::after {
    content: '';
    position: absolute;
    border-style: solid;
    border-color: #3498db transparent;
  }
  &::before {
    margin-top: 10px;
    margin-left: -25px;
    border-width: 40px 25px 0 25px;
  }
  &::after {
    margin-top: 34px;
    margin-left: -25px;
    border-width: 0 25px 40px 25px;
  }
}
@keyframes loader-10 {
  0% {
    transform: rotate(0)
  }
  100% {
    transform: rotate(180deg)
  }
}

.loader-11 {
  width: 90px;
  height: 90px;
  border-radius: 100%;
  border: 3px solid #3498db;
  transform-origin: 50% 50%;
  animation: loader-11 2s infinite;
  &::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    margin-top: -7px;
    margin-left: -6px;
    border-radius: 100%;
    background-color: #3498db;
  }
}
@keyframes loader-11 {
  0% {
    transform: rotate(0)
  }
  100% {
    transform: rotate(360deg)
  }
}

.loader-12 {
  width: 90px;
  height: 90px;
  border-style: double;
  border-color: #3498db transparent;
  border-width: 40px;
  border-radius: 100%;
  background-color: #3498db46;
  transform-origin: 50% 50%;
  animation: loader-10 2s infinite linear;
}

.loader-13 {
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: #3498db;
  transform-origin: 50% 50%;
  animation: loader-11 1.5s infinite linear;
  &::before, &::after {
    content: '';
    position: absolute;
    width: 45px;
    height: 45px;
    background-color: #3498db1a;
  }
  &::before {
    margin-top: -40px;
    margin-left: -3px;
    border-top: 3px solid #3498db;
    border-right: 3px solid #3498db;
    border-radius: 0 50px 0 0;
  }
  &::after {
    margin-left: -43px;
    border-bottom: 3px solid #3498db;
    border-left: 3px solid #3498db;
    border-radius: 0 0 0 50px;
  }
}

.loader-14 {
  &::before, &::after {
    display: inline-block;
    position: absolute;
    margin-left: -70px;
    width: 140px;
    height: 25px;
  }
  &::after {
    content: 'LOADING ...';
    z-index: 0;
    line-height: 25px;
    background-color: #3498db22;
  }
  &::before {
    content: '';
    z-index: 1;
    width: 0;
    background-color: #3498db;
    animation: loader-14 4s infinite linear;
  }
}
@keyframes loader-14 {
  0% { width: 0 }
  75% { width: 140px; opacity: 1; }
  90% { width: 140px; opacity: 0; }
  100% { width: 0; opacity: 0; }
}

@gray: rgba(0, 0, 0, .5);
@blue: #3498db;

@keyframes loader1 {
  0% { transform: rotate(0deg); }
  50% { transform: rotate(180deg); }
  100% { transform: rotate(360deg); }
}

@keyframes loader2 {
  0% { transform: rotate(0); border-top-color: @blue }
  50% { transform: rotate(180deg); border-top-color: @gray }
  100% { transform: rotate(360deg); border-top-color: @blue }
}

.loaderDivMixin {
  padding: 8px;
  border: 2px solid transparent;
  border-radius: 50%;
  animation: loader1 linear 3.5s infinite;
}

.loader {
  position: relative;
  height: 100%;
  overflow: hidden;
  &:hover {
    animation-play-state: paused;
  }
  div {
    height: 100%;
    &:hover {
      animation-play-state: paused;
    }
  }
}

.loader1, .loader1 div {
  .loaderDivMixin;
  border-top-color: @gray;
  border-bottom-color: @blue;
}

.loader2, .loader2 div {
  .loaderDivMixin;
  border-top-color: @gray;
  border-right-color: @blue;
  border-bottom-color: @gray;
}

.loader3, .loader3 div {
  .loaderDivMixin;
  border-top-color: @blue;
  border-right-color: @gray;
  animation-timing-function: cubic-bezier(.55, .38, .21, .88);
  animation-duration: 5s;
}

.loader4, .loader4 div {
  .loaderDivMixin;
  animation: loader2 4s infinite linear;
}

</style>
