import request from '@/utils/request'

// 批量作废
export const discardBatch = data => request({ url: `/admin/auth-authorization/role/discardBatch`, method: 'POST', data: data })

// 批量删除
export const deleteBatch = data => request({ url: `/admin/auth-authorization/role/deleteRoleBatch`, method: 'POST', data: data })

// 批量启用
export const activeBatch = data => request({ url: `/admin/auth-authorization/role/activeBatch`, method: 'POST', data: data })

export function getTreeData(urlPath, searchParams) {
  return request({
    url: urlPath,
    method: 'get',
    params: searchParams
  })
}

export function getRoleList(urlPath, searchParams) {
  return request({
    url: urlPath,
    method: 'get',
    params: searchParams
  })
}

export function saveOrUpdateRole(urlPath, data) {
  return request({
    url: urlPath,
    method: 'post',
    data
  })
}

export function getRoleById(urlPath) {
  return request({
    url: urlPath,
    method: 'get'
  })
}

export function loadUserByIds(urlPath) {
  return request({
    url: urlPath,
    method: 'get'
  })
}

export function discard(urlPath, data) {
  return request({
    url: urlPath,
    method: 'post',
    data
  })
}

export function active(urlPath, data) {
  return request({
    url: urlPath,
    method: 'post',
    data
  })
}

