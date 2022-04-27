/*
 * @Author: xiaomin
 * @Date: 2021-04-19 16:13:19
 * @LastEditTime: 2021-07-14 16:08:55
 * @LastEditors: pengyanxue
 */

import request from '@/utils/request'
import qs from 'qs'

// 获取数据权限类别列表
export const getPermissionList = params => request({ url: `/admin/auth-authorization/dataAuthType/search`, method: 'GET', params: params })

// 查看数据权限类别信息
export const checkPermissionData = params => request({ url: `/admin/auth-authorization/dataAuthType/view/${params}`, method: 'GET' })

// 添加数据权限类别
export const addPermissionData = params => request({ url: `/admin/auth-authorization/dataAuthType/add`, method: 'POST', data: params })

// 编辑数据权限类别
export const updatePermissionData = params => request({ url: `/admin/auth-authorization/dataAuthType/update`, method: 'POST', data: params })

// 批量作废数据权限类别
export const discardBatchData = data => request({ url: `/admin/auth-authorization/dataAuthType/discardBatch`, method: 'POST', data: data })

// 批量删除数据权限类别
export const deleteBatchData = data => request({ url: `/admin/auth-authorization/dataAuthType/deleteDataAuthTypeBatch`, method: 'POST', data: data })

// 批量启用数据权限类别
export const activeBatchData = data => request({ url: `/admin/auth-authorization/dataAuthType/activeBatch`, method: 'POST', data: data })

// 作废数据权限类别
export const discardPermissionData = (url, params) => request({
  url: `/admin/auth-authorization/dataAuthType/${url}`,
  method: 'GET',
  params: params,
  paramsSerializer: params => {
    return qs.stringify(params, { indices: false })
  }
})

// 删除、批量删除数据权限类别
export const deletePermissionData = (url, params) => request({
  url: `/admin/auth-authorization/dataAuthType/${url}`,
  method: 'GET',
  params: params,
  paramsSerializer: params => {
    return qs.stringify(params, { indices: false })
  }
})

// 启用、批量启用数据权限类别
export const activePermissionData = (url, params) => request({
  url: `/admin/auth-authorization/dataAuthType/${url}`,
  method: 'GET',
  params: params,
  paramsSerializer: params => {
    return qs.stringify(params, { indices: false })
  }
})
