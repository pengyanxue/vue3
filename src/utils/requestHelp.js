/*
 * @Author: xiaomin
 * @Date: 2021-04-22 14:03:47
 * @LastEditTime: 2021-07-14 16:16:54
 * @LastEditors: xiaominhuang
 * @description: 请求前处理
 */
// 获取url上指定参数
function getQueryVariable(url, variable) {
  var query = url
  var vars = query.split('&')
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=')
    if (pair[0] == variable) {
      return pair[1]
    }
  }
  return false
}

// 解决IE读取缓存数据，页面操作后不刷新问题
export const buildUrlRandom = function(params) {
  let url = encodeURI(params)
  url += (url.indexOf('?') > -1 ? '&t=' : '?t=') + Math.random()

  return url
}

/**
 * @description: headers中配置操作日志描述参数
 * @param  {*} 请求配置
 * @return {*} 日志描述
 */
export const setLogDec = function(config) {
  const paramsMethods = ['get', 'delete', 'options']
  const dataMethods = ['post', 'put', 'patch']
  const type = config.method.toLowerCase()
  let data = null

  if (paramsMethods.indexOf(type) > -1) {
    data = config.params
  }

  if (dataMethods.indexOf(type) > -1) {
    data = config.data
  }

  const logDec = handleParams(data, 'logDec')

  return logDec
}

function handleParams(params, key) {
  let logDec = ''
  if (params) {
    if (typeof params === 'object' && !params.isBatch) {
      if (key in params) {
        logDec = params[key]
      }
    } else if (typeof params === 'string' && params.indexOf('isBatch') < 0) {
      if (params.indexOf(key) > -1) {
        logDec = getQueryVariable(params, key)
      }
    }
  }

  return logDec
}

/**
 * @description: 判断是否为子系统，并获取appId
 * @param  {*}
 * @return {*}
 */
export const judgeSubSystem = function() {
  const isSubSystem = window.location.href.indexOf('app.html') > -1

  if (isSubSystem) {
    const url = window.location.href.split('#/')[0]
    const appId = url.match(/appId=(.*)/)[1]

    return appId
  }

  return false
}

/**
 * @description: headers中配置独立应用 - 应用id、为get请求统一添加appId
 * @param  {*} 请求配置
 * @return {*}
 */
export const setSubSystemAppId = function(config) {
  const appId = judgeSubSystem()
  if (appId) {
    config.headers['appId'] = appId
    if (config.method.toLowerCase() === 'get') {
      config.params = Object.assign({}, config.params, { appId: appId })
    }
  }

  return config
}
