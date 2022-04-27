/*
 * @Author: xiaomin
 * @Date: 2020-10-28 13:43:36
 * @LastEditTime: 2022-04-27 01:04:34
 * @LastEditors: pengyanxue
 */
import request from '@/utils/request'

export function authenticate (urlPath) {
  return request({
    url: urlPath,
    method: 'post'
  })
}

export function getInfo (token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token}
  })
}

export function logout () {
  return request({
    url: '/auth-authentication/signout',
    method: 'get'
  })
}

export function logoutLog (user) {
  return request({
    url: `/auth-authentication/authentication/log/public/logout?user=${user}`,
    method: 'POST'
  })
}

export function getLincense () {
  return request({
    url: '/admin/auth-authorization/authorization/getLicenseDate',
    method: 'get'
  })
}

export function inspectionDate (userid) {
  return request({
    url: `/admin/auth-user/inspectionDate/${userid}`,
    method: 'get'
  })
}

// 4a登录配置
export function getSystem4aParams () {
  return request({
    url: '/admin/auth-authorization/cmsSysConf/public/getCmsSysConfigByType?type=systemParameter',
    method: 'get'
  })
}

// 4a注销
export function logout4A () {
  return request({
    url: '/auth-authentication/authentication/goOut4ALogin',
    method: 'get'
  })
}

// 多因子登录判断
export function judgeMutipleFactor () {
  return request({
    url: '/admin/auth-authorization/cmsSysConf/public/getCmsSysConfigByType?type=sysSafety',
    method: 'get'
  })
}

// 多因子验证用户名、密码
export function checkUsernamePwd (params) {
  return request({
    url: '/auth-authentication/authentication/multifactorLogin',
    method: 'get',
    params: params
  })
}

// 系统登录方法
export const loginData = params => request({
  url: `/auth-authentication/oauth/token`,
  method: 'POST',
  data: params,
  transformRequest: [
    function (data) {
      let ret = ''
      for (const it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret.substring(0, ret.length - 1)
    }
  ]
})

export const userInfo = params => request({ url: '/use/useinfo', method: 'GET', params: params })
