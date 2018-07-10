
import axios from 'axios'
import {hideFullScreenLoading, showFullScreenLoading} from '../utils/common'
// 携带cookie
axios.defaults.withCredentials = true

axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  showFullScreenLoading()
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// response 拦截器
axios.interceptors.response.use(res => {
  hideFullScreenLoading()
  return res
}, err => {
  return Promise.reject(err)
})

export default axios
