import request from '@/utils/request'
import qs from 'qs'
import axios from 'axios'
/**
 * @author yanpeng
 * @desc 应用管理
 * @param params
 * @returns {AxiosPromise}
 */
export function getTableData(params) {
  return request({
    url: `/admin/workflow-service2/app/list`,
    method: 'GET',
    params: params
  })
}

export function generId() {
  return request({
    url: `/admin/workflow-service2/app/id`,
    method: 'GET'
  })
}

export function getImage(url) {
  return request({
    url: url,
    method: 'GET',
    responseType: 'blob'
  })
}
export function idsList(params) {
  return request({
    url: `/admin/workflow-service2/app/ids`,
    method: 'GET',
    params: params
  })
}
export function syncUserApi(params) {
  return request({
    url: `/admin/workflow-service2/app/auth/sysnc/user`,
    method: 'GET',
    params: params
  })
}

export function saveAppApi(params) {
  return request({
    url: `/admin/workflow-service2/app/save`,
    method: 'POST',
    data: params
  })
}

export function saveAppAuth(params) {
  return request({
    url: `/admin/workflow-service2/app/auth`,
    method: 'POST',
    data: params
  })
}

export function getAppAuth(params) {
  return request({
    url: `/admin/workflow-service2/app/auth`,
    method: 'GET',
    params: params
  })
}

export function copyApi(params) {
  return request({
    url: `/admin/workflow-service2/app/copy`,
    method: 'POST',
    data: params
  })
}

export function updateAppApi(params) {
  return request({
    url: `/admin/workflow-service2/app/update`,
    method: 'POST',
    data: params
  })
}

export function getAppApi(id) {
  return request({
    url: `/admin/workflow-service2/app/${id}`,
    method: 'GET'
  })
}

export function getAppAllApi(id) {
  return request({
    url: `/admin/workflow-service2/app/sys/${id}`,
    method: 'GET'
  })
}

export function getAuthApps(param) {
  return request({
    url: `/admin/workflow-service2/app/auth/apps`,
    method: 'GET',
    params: param
  })
}

export function getAuthAppNames(param) {
  return request({
    url: `/admin/workflow-service2/app/auth/appnames`,
    method: 'GET',
    params: param,
    paramsSerializer: params => {
      return qs.stringify(params, { indices: false })
    }
  })
}

export function updateStateApi(params) {
  return request({
    url: `/admin/workflow-service2/app/state`,
    method: 'POST',
    params: params
  })
}

export function checkNameApi(params) {
  return request({
    url: `/admin/workflow-service2/app/check`,
    method: 'GET',
    params: params
  })
}

export function deleteApi(params) {
  return request({
    url: `/admin/workflow-service2/app/${params.id}?logDec=${params.logDec}`,
    method: 'DELETE'
  })
}

// 废弃
export function appUserList() {
  return request({
    url: `/admin/auth-user/account/list/app`,
    method: 'GET'
  })
}

export function registRealName(params) {
  return request({
    url: `/admin/auth-user/account/realname/regist`,
    method: 'GET',
    params: params
  })
}

export function appsList(params) {
  return request({
    url: `/admin/workflow-service2/app/all`,
    method: 'GET',
    params: params
  })
}

export function groupsList() {
  return request({
    url: `/admin/auth-usergroup/all`,
    method: 'GET'
  })
}

export function getUserGroupList(params) {
  return request({
    url: `/admin/auth-usergroup/getUserGroupList`,
    method: 'GET',
    params: params
  })
}

// 组织机构动态树
export function defaultDynamicTree(params) {
  return request({
    url: `/admin/auth-user/dynamicUserDepartmentTree`,
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(params)
  })
}

// 应用管理已授权系统用户分页查询
export function authSysUserData(data) {
  return request({
    url: `/admin/auth-user/basic-with-dept-paging`,
    method: 'POST',
    data: data
  })
}

export const getAppUrlData = params => request({ url: '/admin/workflow-service2/app/public/access-url', method: 'GET', params: params })
