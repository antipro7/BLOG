// 工具函数

// cookie
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
