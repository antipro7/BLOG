// 处理时间的工具函数
// 可通过dates.xxx使用，也可通过vm.$xxx使用
const oneDayTime = 24 * 3600 * 1000;

/**
 * 转换时间格式
 * @param {Date} time '中国标准时间'
 * @param {String} fmt 'yyyy-MM-dd'
 */
const format = (time, fmt) => {
  t = new Date(time);
  let o = {
    'M+': t.getMonth() + 1, // 月份
    "d+": t.getDate(), // 日
    "h+": t.getHours(), // 小时
    "m+": t.getMinutes(), // 分
    "s+": t.getSeconds(), // 秒
    "q+": Math.floor((t.getMonth() + 3) / 3), // 季度
    "S": t.getMilliseconds() // 毫秒
  }

  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (t.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (let k in o)
    if (new RegExp('(' + k + ')').test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  return fmt
}
 
/**
 * 获取某周所有日期，周一至周日
 * @param {String || Date} time 目标周任意一天
 * @param {String} type 返回时间格式
 */
const getWeekDates = (time, type) => {
  time = new Date(time);
  let timesStamp = time.getTime();
  let currentDay = time.getDay();
  let dates = [];

  for (let i = 0; i < 7; i++) {
    dates.push(format(new Date(timesStamp + oneDayTime * (i - (currentDay + 6) % 7)), type));
  }

  return dates;
}

/**
 * 判断两个时间是否在同一周内
 * @param {String || Date} val1  时间
 * @param {String || Date} val2  时间
 * @return {Boolean} true: 同一周
 */
const isSameWeek = (val1, val2) => {
  let _old = parseInt(new Date(val1).getTime() / oneDayTime);
  let _new = parseInt(new Date(val2).getTime() / oneDayTime);

  return parseInt((_old + 4) / 7) === parseInt((_new + 4) / 7);
}

/**
 * 获取输入时间7天前/7天后的日期
 * @param {String || Date} time
 * @param {String} condition prev:一周前，next一周后
 * @param {String} type 返回时间格式
 */
const oneWeekDiff = (time, condition, type) => {
  let timesStamp = new Date(time).getTime();
  let t;

  if (condition === 'prev') {
    t = format(new Date(timesStamp - oneDayTime * 7), type);
  } else if (condition === 'next') {
    t = format(new Date(timesStamp + oneDayTime * 7), type)
  }

  return t;
}

export const Dates = {}.install = function (Vue) {
  Vue.prototype.$format = format;
  Vue.prototype.$isSameWeek = isSameWeek;
  Vue.prototype.$oneWeekDiff = oneWeekDiff;
  Vue.prototype.$getWeekDates = getWeekDates;
}