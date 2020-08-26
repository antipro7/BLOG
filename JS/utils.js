// 工具函数

// 操作cookie
export const cookies = {
  // 设置cookie
  setCookie: (cName, value, expireDays) => {
    let exdate = new Date();
    exdate.setDate(exdate.getDate() + expireDays);
    document.cookie = cName + '=' + escape(value) + ((expiredays === null) ? '' : ';expires=' + exdate.toUTCString());
  },
  // 获取cookie
  getCookie: name => {
    let reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
    let arr = document.cookie.match(reg);
    if (arr) {
      return unescape(arr[2]);
    } else {
      return null;
    }
  },
  // 删除cookie
  delCookie: name => {
    let exp = new Date();
    let cval = cookies.getCookie(name);
    exp.setTime(exp.getTime() - 1);
    if (cval !== null) {
      document.cookie = `${name}=${cval};expires=${exp.toUTCString()}`;
    }
  }
}

// getBaseUrl
export const getBaseUrl = () => {
  let baseUrlPre = ''
  switch (window.runtime_env) {
    case 'development':
      baseUrlPre = '/...';
      break;
    case 'test':
      baseUrlPre = '';
      break;
    // ...
    default:
      baseUrlPre = '';
  }
  return baseUrlPre;
}

const utils = {
  // 正则
  REGEXP: {
    url: /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?$/, // 链接
    mobile: /^1[345678]\d{9}$/, // 手机
    tel: /^(0[0-9]{2,3})-?([0-9]{7,8})$/, // 座机
    post: /^\d{6}$/, // 邮编
    email: /^[A-Z_a-z0-9-.]+@([A-Z_a-z0-9-]+\.)+[a-z0-9A-Z]{2,4}$/, // 邮箱
    pic: /[^\s]+\.(jpg|jpeg|gif|png|bmp|svg|webp)/i, // 图片
    number: /^[0-9]+$/ // 数字
  }
}

export default utils

/**
 * 判断类型函数
 * @param {Object} o 需要判断的对象
 * 使用举例
 * type({}) object
 * type([]) array
 */
export const type = o => {
  let s = Object.prototype.toString.call(o);
  return s.match(/\[object (.*?)\]/)[1].toLowerCase();
}

/**
 * 在上面这个type函数的基础上，还可以加上专门判断某种类型数据的方法
 * 使用举例
 * type.isObject({}) true
 * type.isNumber(NaN) true
 * type.isRegExp(/abc/) true
 */
let oArr = ['Null', 'Undefined', 'Object', 'Array', 'String', 'Number', 'Boolean', 'Function', 'RegExp'];

oArr.forEach(t => {
  type['is' + t] = o => {
    return type(o) === t.toLocaleLowerCase();
  };
});


/**
 * 数组去重
 */
// 普通数组
[...new Set(arr)]
// 数组包含对象，根据某字段去重
let a = [{ id: 1, name: 'a', ss: 'asdas', cc: 'car' }, { id: 2, name: 'b', ss: 'asas', cc: 'carasd' }];
let b = [{ id: 1, name: 'a', ss: 'asdas', cc: 'car' }, { id: 3, name: 'bb', ss: '555', cc: '14124' }];
let c = a.concat(b);

function deduplication(arr, str) {
  let hash = {};
  arr = arr.reduce((item, next) => {
    if (!hash[next[str]]) {
      hash[next[str]] = true;
      item.push(next);
    }
    return item;
  }, [])
  return arr;
}

// reduce 实现
function arrRemoveSame (arr, key) {
  let obj = {};
  return arr.reduce((cur, next) => {
    obj[next[key]] ? '' : obj[next[key]] = true && cur.push(next);
  
    return cur;
  }, []);
}

// new Map 实现
const uniqBy = (arr, key) => {
  return [... new Map(arr.map(item => [item[key], item])).values()]
}
console.log('deduplication', deduplication(c, id));
console.log('arrRemoveSame', arrRemoveSame(c, id));
console.log('uniqBy', uniqBy(c, id));
/**
 * 数组对象重命名
 */
let arr = [
  { id: 1, value: 'one', name: 'haha' },
  { id: 2, value: 'two', name: 'fang' },
  { id: 3, value: 'three', name: 'hui' },
  { id: 4, value: 'foue', name: 'tom' },
]

// map方法
let newarr = arr.map(item => {
  item['newname'] = item['name'];
  delete item['name']
  return item
})

// Object.defineProperty
arr.forEach(item => {
  Object.defineProperty(item, 'newname', Object.getOwnPropertyDescriptor(item, 'name'));
  delete item['name'];
})