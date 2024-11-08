import axios from "axios";
import { Toast } from "vant";
import router from '../router'

axios.defaults.baseURL = '//lsd-sms/api/v1'
axios.defaults.withCredentials = true
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['token'] = localStorage.getItem('token') || ''
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.response.use(res => {
    // 若响应头内的data不为object，则视为服务器端异常，直接通过Promis.reject抛出错误
    if (typeof res.data !== 'object') {
        Toast.fail('服务器异常！')
        return Promise.reject(res)
    }
    if (res.data.resultCode != 200) {
        // 若有data，但resultCode不为200，表示请求通过但响应失败
        if (res.data.message) {
            Toast.fail(res.data.message)
        }
        // 若resultCode为416则表示未登录，跳转至登录页面
        if (res.data.resultCode == 416) {
            router.push({
                path: '/login'
            })
        }
        // 通过Promise.reject抛出，前端可通过链式调用catch捕获异常
        return Promise.reject(res.data)
    }
    // 其他情况一律返回data数据
    return res.data
})

export default axios