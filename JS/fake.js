/**
 * map 迭代方法可以接收两个参数
 * 1.对每一项执行的函数
 *   · 该函数接收三个参数
 *     · 数组某项的值
 *     · 数组项的下标
 *     · 该数组本身
 * 2.指定this的对象
 * 
 * @return 每次函数调用结果组成的数组
 * 实现如下
 */
Array.prototype.fakeMap = (fn, context) => {
  throwError(fn, 'function');

  const arr = this;
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    let result = fn.call(context, arr[i], i, arr);
    temp.push(result);
  }

  return temp;
}

/**
 * filter 方法可以接收两个参数
 * 1.对每一项执行的函数
 *   · 该函数接收三个参数
 *     · 数组某项的值
 *     · 数组项的下标
 *     · 该数组本身
 * 2.指定this的对象
 * 
 * @return 执行结果为true的项组成的数组
 * 实现如下
 */
Array.prototype.fakeFilter = (fn, context) => {
  throwError(fn, 'function');

  let arr = this;
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    let result = fn.call(context, arr[i], i, arr);
    if (result) temp.push(arr[i]);
  }
  return temp
}



// 报错提示函数
const throwError = (fn, str) => {
  if (typeof fn !== str) {
    throw new TypeError(`${fn} is not a ${str}`);
  }
}