import _ from 'lodash';
// import './style.css';
// import a from './assets/images/a.jpg';
// import Data from './assets/data.xml';
import printMe from './print'

function component() {
  let element = document.createElement('div');
  let btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  // element.classList.add('hello');

  // 添加图像
  // let myImg = new Image();
  // myImg.src = a;

  // element.appendChild(myImg);
  element.appendChild(btn);

  // console.log(Data)

  return element;
}

document.body.appendChild(component());
