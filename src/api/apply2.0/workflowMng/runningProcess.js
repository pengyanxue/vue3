/*
 * @Author: pengyanxue
 * @Date: 2021-06-21 13:42:33
 * @LastEditors: pengyanxue
 * @LastEditTime: 2021-08-24 09:54:16
 */
import request from '@/utils/request'

// 获取正在运行实例列表数据
export const getRunningProcessData = params => request({ url: `/admin/workflow-service2/runtime/processInstances`, method: 'GET', params })

// 挂起实例
export const suspendInstance = id => request({ url: `/admin/workflow-service2/runtime/suspendProcessInstance/${id}`, method: 'GET' })

// 激活实例
export const activateInstance = id => request({ url: `/admin/workflow-service2/runtime/activateProcessInstance/${id}`, method: 'GET' })

// 批量转办
export const deliverProcessBatch = data => request({ url: `/admin/workflow-service2/flow/deliverProcessBatch`, method: 'POST', data })

// 删除正在运行实例
export const deleteProcessInstance = data => request({ url: `/admin/workflow-service2/flow/deleteProcessInstance`, method: 'POST', data })

export const getTabData = params => request({ url: `/admin/auth-user/account/search`, method: 'GET', params })

// 通过流程实例id获取appId
export const getAppId = processInstanceId => request({ url: `/admin/workflow-service2/runtime/getAppInfo?processInstanceId=${processInstanceId}`, method: 'GET' })

