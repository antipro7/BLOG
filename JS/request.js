// axios请求
import qs from 'qs';

import { Loading } from 'element-ui';

/**
 * 
 * @param {*} url 请求地址（后缀）
 * @param {*} body 请求参数
 * @param {*} type 请求类型
 */
const BaseUrl = '...' // 基础地址

const request = (url, body, type = 'post') => {
  {
    let timeParam = '';
    if (url.indexOf('?') != -1) {
      timeParam = '&timestamp=' + new Date().getTime();
    } else {
      timeParam = '?timestamp=' + new Date().getTime();
    }
  } // 时间戳

  // 请求参数
  let query = {
    url = BaseUrl + url, // + timeParam
    method: type,
    headers: {
      'content-type': 'application/json;charset=UTF-8'
    },
    withCredentials: true, // true: 跨域请求时，会携带用户凭证
    timeout: 30000
  };

  // 请求类型
  type = type.toLocaleLowerCase();
  if (type && type === 'get') {
    query.params = body;
  } else if (type && type === 'upload') {
    query.data = body;
    query.headers['Content-Type'] = 'multipart/form-data';
  } else {
    query.data = qs.stringify(body);
    query.headers['Content-Type'] = 'application/json;charset=UTF-8';
  }
  
  // 可添加全局请求数据loading(此处以elementUI为例)
  let loading = Loading.service({
    lock: false,
    text: '正在加载中...',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, .5)'
  })

  // 返回
  return axios
    .request(query)
    .then(res => {
      return new Promise((resolve, reject) => {
        loading.close(); // 关闭loading
        if (!res.data) {
          reject(new Error('服务器响应超时！'))
          return
        }
        if (res.data.status === 401) {
          // 处理...各种状态码
        } else if (res.data.status === 0) { // 请求成功，返回数据
          resolve(res.data.re);
        } else { // 返回错误信息
          res.data.message = res.data.msg;
          reject(res.data);
        } // re, msg 根据具体后端返回数据配置
      })
    })
    .catch(e => { // 第一次捕获错误，处理跳转
      loading.close();
      switch(e.response.status) {
        case 401: // 未登录跳转至登录页
          /**
           * ...跳转至登录页
           * location.href = ...
           */
          return Promise.reject(new Error('未登录，请重新登录！'))
        case 403: // 无权限操作
          top.window.postMessage(
            {
              type: 'NO_PERMISSION',
              msg: '403'
            },
            '*'
          )
          return Promise.reject(new Error('对不起，您暂无操作权限！'))
        default:
          break
      }
      return Promise.reject(e.response)
    })
    .catch(e => { // 来自上一个catch的e.response
      loading.close()
      vue.prototype.$message.error(e && e.message ? e.message : '系统错误')
      return Promise.reject(e)
    })
}

let getToken = '';
// 请求拦截器
axios.interceptors.request.use(
  config => {
    /**
     * 登录流程控制中，根据本地是否存在token判断用户的登录情况。但是即使token存在，也有可能token是过期的，
     * 所以在每次请求头中携带token。后台根据携带的token判断用户的登陆情况，返回对应的状态码
     * 前端在响应拦截器中，根据状态码进行统一的状态码
     */
    const token = getToken;
    // ...
    token && (config.headers.Authorization = token);
    return config;
  },
  error => Promise.error(error)
)

// 响应拦截器(在上面) return axios中

// 构造器 是应用修改
class Request {
  constructor() {
    this.baseURL = baseUrl;
    this.headers = {
      'content-type': 'application/json;charset=UTF-8'
    };
    this.withCredentials = true;
    this.timeout = 3000;
  }
  // 合并参数
  merge(options) {
    return {
      ...options,
      baseURL: this.baseURL,
      headers: this.headers,
      withCredentials: this.withCredentials,
      timeout: this,timeout
    }
  }

  // 拦截方法
  setInterceptor(instance, url) {
    // 请求拦截，每次请求时loading
    instance.interceptors.request.use(
      config => {
        let loading = Loading.service({
          lock: false,
          text: '正在加载中...',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, .5)'
        })

        return config
      },
      error => {
        // ...
        return Promise.reject(error);
      }
    )

    // 响应拦截
    instance.interceptors.response.use(
      res => {
        loading.close();
        return Promise.resolve(res)
      },
      error => {
        loading.close();
        // ...
        return Promise.reject(error)
      }
    )
  }

  // 请求
  request(options) {
    // 配置
    axios.defaults.timeout = 500 // 超时配置，500ms
    axios.defaults.retry = 3 // 重复次数
    axios.defaults.retryDelay = 1000 // 间隔时间


    let instance = axios.create()   //创建一个axios实例
    this.setInterceptor(instance, options.url) //设置拦截
    let config = this.merge(options)
    return instance(config)     //axios执行后，返回promise
  }
}
// export default new Request

export default request