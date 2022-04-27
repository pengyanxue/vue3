/*
 * @Author: pengyanxue
 * @Date: 2021-06-16 14:09:45
 * @LastEditors: pengyanxue
 * @LastEditTime: 2021-07-14 11:54:23
 */
import request from '@/utils/request'

export function getDictCategoryTreeData(urlPath) {
  return request({
    url: urlPath,
    method: 'get'
  })
}

export function initTableList(urlPath, searchParam) {
  return request({
    url: urlPath,
    method: 'get',
    params: searchParam
  })
}

export function saveOrUpdate(urlPath, data) {
  return request({
    url: urlPath,
    method: 'post',
    data
  })
}

export function view(urlPath) {
  return request({
    url: urlPath,
    method: 'get'
  })
}

export function move(urlPath, data) {
  return request({
    url: urlPath,
    method: 'post',
    data: data
  })
}

export function discardBatch(urlPath, data) {
  return request({
    url: urlPath,
    method: 'post',
    data
  })
}

export function activeBatch(urlPath, data) {
  return request({
    url: urlPath,
    method: 'post',
    data
  })
}
