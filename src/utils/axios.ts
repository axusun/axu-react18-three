/*
 * @Author: axu 1342248325@qq.com
 * @Date: 2022-07-04 12:56:35
 * @LastEditors: axu 1342248325@qq.com
 * @LastEditTime: 2022-07-04 14:01:03
 * @FilePath: /my-app/src/utils/axios.ts
 * @Description: axios
 */
import axios from 'axios'
// import { Message } from 'element-ui'
// import store from '@/store'
// import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: '/',
  timeout: 30000,
  headers: { 'Cache-Control': 'no-cache' }
})

service.interceptors.request.use(
  config => {
    // if (store.getters.token) {
    //   config.headers['token'] = `${getToken()}`
    // }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) {
      if (res.code === 410) {
        // Message({
        //   message: '登录过期，请重新登录',
        //   type: 'error',
        //   duration: 3000
        // }).then(() => {
        //   store.dispatch('user/resetToken').then(() => {
        //     location.reload()
        //   })
        // })
      } else {
        // Message({
        //   message: res.msg || 'Error',
        //   type: 'error',
        //   duration: 5 * 1000
        // })
      }
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  error => {
    if (error.response.data.code === 410) {
    //   Message({
    //     message: '登录过期，请重新登录',
    //     type: 'error',
    //     duration: 2000
    //   })
    //   store.dispatch('user/resetToken').then(() => {
    //     location.reload()
    //   })
    } else {
    //   Message({
    //     message:
    //       error.response.data.msg !== undefined && error.response.data.msg
    //         ? error.response.data.msg
    //         : 'Error',
    //     type: 'error',
    //     duration: 5000
    //   })
    }
    return Promise.reject(error)
  }
)

export default service
