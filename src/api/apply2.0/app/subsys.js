/*
 * @Author: xiaomin
 * @Date: 2021-04-07 10:40:07
 * @LastEditTime: 2021-08-11 15:15:41
 * @LastEditors: pengyanxue
 */
import request from '@/utils/request'

/**
 * @author yanpeng
 * @desc 子系统管理
 * @param params
 * @returns {AxiosPromise}
 */
export function getTableData(params) {
  return request({
    url: `/admin/workflow-service2/subsys/list`,
    method: 'GET',
    params: params
  })
}

export function saveApi(params) {
  return request({
    url: `/admin/workflow-service2/subsys/save`,
    method: 'POST',
    data: params
  })
}

export function copyApi(params) {
  return request({
    url: `/admin/workflow-service2/subsys/copy`,
    method: 'POST',
    data: params
  })
}

export function updateApi(params) {
  return request({
    url: `/admin/workflow-service2/subsys/update`,
    method: 'POST',
    data: params
  })
}

export function getApi(id) {
  return request({
    url: `/admin/workflow-service2/subsys/${id}`,
    method: 'GET'
  })
}

export function deleteApi(id, logDec) {
  return request({
    url: `/admin/workflow-service2/subsys/${id}`,
    method: 'DELETE',
    params: {
      logDec: logDec
    }
  })
}

export function updateStateApi(params) {
  return request({
    url: `/admin/workflow-service2/subsys/state`,
    method: 'GET',
    params: params
  })
}

export function listApi(params) {
  return request({
    url: `/admin/workflow-service2/data-list/app`,
    method: 'GET',
    params: params
  })
}

export function checkNameApi(params) {
  return request({
    url: `/admin/workflow-service2/subsys/check`,
    method: 'GET',
    params: params
  })
}

export function wordDownload(params) {
  return request({
    url: `/admin/workflow-service2/subsys/download`,
    method: 'get',
    params: params,
    responseType: 'blob'
  })
}

export function getProvinceFields(listId) {
  return request({
    url: `/admin/workflow-service2/form/city-fields?listId=${listId}`,
    method: 'GET'
  })
}
