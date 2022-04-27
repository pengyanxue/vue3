import axios from 'axios'
import store from '@/store'
import { getToken } from './cookies'
import { setLogDec, setSubSystemAppId, buildUrlRandom } from './requestHelp'

// create an axios instance
const service = axios.create({
  baseURL: window.globalConfig.GateWay_Url, // 'http://127.0.0.1:4523/mock/916527', //  import.meta.env.VITE_APP_BASE_API ,//window.globalConfig.GateWay_Url, // url = base url + request url
  withCredentials: false, // send cookies when cross-domain requests
  timeout: 80000 // request timeout
})
// const store = useStore()
let showMessageBox = false

// request interceptor
service.interceptors.request.use(
  config => {
    config.url = buildUrlRandom(config.url)
    // 增加取消http配置
    // config.cancelToken = new axios.CancelToken(function (cancel) {
    //   store.dispatch('app/pushCanceltoken', { cancelToken: cancel })
    // })
    const isPublic = location.href.indexOf('/public/') > -1
    if (!isPublic) {
      if (store.state.user.token || getToken()) {
        config.headers['X-Requested-With'] = 'XMLHttpRequest'
        config.headers['Cache-Control'] = 'no-cache'
        config.headers['token'] = getToken()
        config.headers['terminalType'] = '1'
      }
    }
    const logDec = setLogDec(config)
    if (logDec && !config.headers['logDec']) config.headers['logDec'] = encodeURI(logDec)

    const subConfig = setSubSystemAppId(config)
    const resultConfig = Object.assign({}, config, subConfig)

    // 转码http规范特殊字符，规避接口参数转换400 error
    const reqMethods = 'get,delete,post'
    const currentReqMethod = config.method.toLowerCase()
    if (reqMethods.includes(currentReqMethod) && config.params) {
      const keyArr = Object.keys(config.params)
      keyArr.forEach(key => {
        if (config.params[key] && (typeof config.params[key] === 'string')) {
          config.params[key] = config.params[key].replace(/\[/g, '%5B').replace(/\]/g, '%5D')
        }
      })
    }

    return resultConfig
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(

  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    if (response.status === 99) {
      // if (getToken()) {
      //   MessageBox.alert('你的登录已超时', '登录超时提醒', {
      //     confirmButtonText: '确定',
      //     type: 'warning'
      //   }).then(() => {
      //     showMessageBox = false
      //     store.dispatch('user/logoutLog').then(res => {
      //       resetToken()
      //     }).catch(() => {
      //       resetToken()
      //     })
      //   }).catch(() => {
      //     showMessageBox = false
      //     store.dispatch('user/logoutLog').then(res => {
      //       resetToken()
      //     }).catch(() => {
      //       resetToken()
      //     })
      //   })
      // }
    } else if (response.status === -1) {
      // Message({
      //   showClose: true,
      //   message: response.message,
      //   type: 'error'
      // })
    } else if (response.status === 999) {
      router.push({ name: 'licenseUpload' })
    } else {
      //       const disposition = response.headers['content-disposition']
      //       if (disposition) {
      //         return response
      //       } else {
      //         return response.data
      //       }
      // 解决 gateway 网关问题
      return response.data
    }
  },
  error => {
    const isPublic = location.href.indexOf('/public/') > -1
    if (!isPublic) {
      // console.log(error.response)
      if (error.response && error.response.status === 401) {
        if (!showMessageBox) {
          showMessageBox = true
          if (error.response.data.status === -1) {
            // MessageBox.confirm(error.response.data.message, '账号未授权', {
            //   confirmButtonText: '登录其他账号',
            //   cancelButtonText: '取消',
            //   type: 'warning'
            // }).then(() => {
            //   showMessageBox = false
            //   resetToken()
            // }).catch(() => {
            //   showMessageBox = false
            // })
          } else if (error.response.data.status === 999) {
            showMessageBox = false
            router.push({ name: 'licenseUpload' })
          } else if (error.response.data.status === 998) {
            showMessageBox = true
          // MessageBox.confirm(error.response.data.message, '', {
          //   confirmButtonText: '去授权',
          //   cancelButtonText: '取消',
          //   type: 'warning'
          // }).then(() => {
          //   showMessageBox = false
          //   router.push({ name: 'licenseUpload' })
          // }).catch(() => {
          //   showMessageBox = false
          // })
          } else if (error.response.data.status === 99) {
            store.dispatch('user/resetToken').then(() => {
              router.push({ name: 'login' })
            })
          } else {
            // if (getToken()) {
            //   MessageBox.alert('你的登录已超时', '登录超时提醒', {
            //     confirmButtonText: '确定',
            //     type: 'warning'
            //   }).then(() => {
            //     showMessageBox = false
            //     store.dispatch('user/logoutLog').then(res => {
            //       resetToken()
            //     }).catch(() => {
            //       resetToken()
            //     })
            //   }).catch(() => {
            //     showMessageBox = false
            //     store.dispatch('user/logoutLog').then(res => {
            //       resetToken()
            //     }).catch(() => {
            //       resetToken()
            //     })
            //   })
            // }
          }
        }
      } else {
        console.log('err' + error) // for debug
        if (error.response && error.response.data) {
          let message = '请求错误'
          let hasDeal = false
          if (error.response.data.error_description === 'Bad credentials') {
            hasDeal = true
            message = '账户或者密码不正确，请确认！'
          }

          if (error.response.data.error_description === 'User is disabled') {
            hasDeal = true
            message = '此账号已作废，请确认！'
          }

          if (error.response.data.error_description === 'User account has expired') {
            hasDeal = true
            message = '此账号已过期，请确认！'
          }

          if (error.response.data.error === 'unauthorized') {
            message = '此账号不存在，请重新输入！'
          }

          if (error.response.data.status && error.response.data.status === 40001 && error.response.data.message) {
            message = error.response.data.message
            if (error.response.data.message === 'MALFORMED') {
              message = '导入文件出现乱码，请更换文件编码再试！'
            }
          }
          if (error.response.data.error_description && !hasDeal) {
            message = error.response.data.error_description
          }

        // Message({
        //   message: message,
        //   type: 'error',
        //   duration: 5 * 1000
        // })
        }
      }
    }

    // 取消请求的情况下，终端Promise调用链
    if (axios.isCancel(error)) {
      return new Promise(() => {
      })
    }

    return Promise.reject(error)
  }
)

function resetToken () {
  // store.dispatch('user/resetToken').then(() => {
  //   location.reload()
  // })
}

export default service
