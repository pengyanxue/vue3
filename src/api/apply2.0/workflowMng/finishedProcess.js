/*
 * @Author: pengyanxue
 * @Date: 2021-06-28 14:10:09
 * @LastEditors: pengyanxue
 * @LastEditTime: 2021-08-24 09:28:59
 */
import request from '@/utils/request'

// 查找已完成的流程实例
export const getFinishedProcessData = params => request({ url: `/admin/workflow-service2/runtime/finishProcessInstances`, method: 'GET', params })

// 批量删除已结实例
export const deleteAccomplishProcessInstance = data => request({ url: `/admin/workflow-service2/flow/deleteAccomplishProcessInstance`, method: 'POST', data })

// 通过流程实例id获取appId
export const getAppId = processInstanceId => request({ url: `/admin/workflow-service2/runtime/getAppInfo?processInstanceId=${processInstanceId}`, method: 'GET' })
