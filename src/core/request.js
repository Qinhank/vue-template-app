/** 
 * javascript comment 
 * @Author: hankqin 
 * @Date: 2020-05-14 15:19:25 
 * @Desc: 封装axios 
 */
import Vue from 'vue'
import axios from 'axios'
import api from '@/api'
const { token, baseURL } = require('../../bp.config')

//获取api接口
const getApi = key => {
  if(key.indexOf('http')>-1) {
    return key
  } else {
    if(!api[key]) {
      console.error(`接口“${key}”不存在，请检查`)
      return null
    }
    return api[key]
  }
}

// 创建 axios 实例
const request = axios.create({
  baseURL, // api base_url
  timeout: 6000 // 请求超时时间
})

//axios拦截器
//配置全局的axios请求
axios.interceptors.request.use(
  config => {
    if(token) {
      config.headers[token] = Vue.ls.get(token)
    }
    return config
  },
  err => {
    console.log(err)
  }
)

//返回结果处理
const requestResultDeal = (res,resolve,that) => {
  const { unlogin, meta, data } = res.data
  //如果未登录或过期
  if(unlogin) {
    that.$router.replace({path: '/login', query: { path: that.$route.path } })
    reject(res)
  }
  //如果已登录但返回数据错误
  else if(!meta.success) {
    // MintUI.Indicator.close()
    // MintUI.Toast(meta.message)
  }
  resolve(data)
}

//返回结果的catch处理
const requestResultCatch = (res,reject) => {
  reject(res)
}

//get请求
Vue.prototype.$g = function(url,data,opt) {
  const that = this
  return new Promise(function(resolve, reject) {
    if(!getApi(url)) { reject() }
    else {
      let option = {
        method: 'get',
        params: {
          ...data,
          timeStamp: Date.parse(new Date()),
        },
        url: getApi(url),
        ...opt,
      }
      request({...option})
      .then(res => {
        requestResultDeal(res,resolve,that)
      })
      .catch(res => {
        requestResultCatch(res,reject)
      })
    }
  })
}

//post请求
Vue.prototype.$p = function(url,data,opt) {
  const that = this
  return new Promise(function(resolve, reject) {
    if(!getApi(url)) { reject() }
    else {
      let option = {
        method: 'post',
        url: getApi(url),
        data,
        ...opt,
      }
      request({...option})
      .then(res => {
        requestResultDeal(res,resolve,that)
      })
      .catch(res => {
        requestResultCatch(res,reject)
      })
    }
  })
}