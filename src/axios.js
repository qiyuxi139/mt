import axios from 'axios'
axios.defaults.baseURL = 'http://open.duyiedu.com/'
axios.interceptors.request.use(function (config) {
  config.params = {
    ...config.params,
    appkey: 'qiyuxi139_1590671350099'
  }
  return config
}, function (err) {
  return Promise.reject(err)
})

axios.interceptors.response.use(function (res) {
  const result = res.data
  return result
})
export default axios
