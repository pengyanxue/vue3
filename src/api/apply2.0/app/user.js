/*
 * @Author: pengyanxue
 * @Date: 2021-07-26 09:18:25
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-02-08 18:00:49
 */
import request from '@/utils/request'

export function getTabData (params) {
  return request({
    url: `/admin/auth-user/account/search`,
    method: 'GET',
    params: params
  })
}
export function getRegData (params) {
  return request({
    url: `/admin/auth-user/account/search/regist`,
    method: 'POST',
    data: params
  })
}
export function getRegTabData (params) {
  return request({
    url: `/admin/auth-user/account/search/regist/tab`,
    method: 'POST',
    data: params
  })
}
// 用户组维护添加和修改弹窗页面查询接口
export function getAppUserGroup (params) {
  return request({
    url: `/admin/auth-usergroup/select-app-user`,
    method: 'POST',
    data: params
  })
}
export function getRegIdsTabData (params) {
  return request({
    url: `/admin/auth-user/account/search/regist/ids`,
    method: 'POST',
    data: params
  })
}

export function getAllUser (params) {
  return request({
    url: `/admin/auth-user/account/all`,
    method: 'GET',
    params: params
  })
}

export function searchUsers (data) {
  return request({
    url: `/admin/auth-user/search-for-app`,
    method: 'POST',
    data: data
  })
}

export function searchAllUsers (data) {
  return request({
    url: `/admin/auth-user/search-all-for-app`,
    method: 'POST',
    data: data
  })
}
