/*
 * @Author: xiaomin
 * @Date: 2020-11-19 16:04:30
 * @LastEditTime: 2021-04-25 18:08:43
 * @LastEditors: xiaominhuang
 * @Description: 流程列表管理
 */

import request from '@/utils/request'

// 获取流程管理列表
export const getProcessLsit = params => request({ url: '/admin/workflow-service2/searchAppFlow', method: 'GET', params: params })

// 新建流程
export const addProcess = params => request({  url: '/admin/workflow-service2/repository/model/createNewModel', method: 'POST', data: params })

// 编辑流程
export const updateProcess = params => request({ url: '/admin/workflow-service2/repository/model/upDateNewModel', method: 'POST', data: params })

// 流程查看
export const getProcessView = params => request({ url: '/admin/workflow-service2/repository/model/preUpdateAppFlow', method: 'GET', params: params })

// 启用流程
export const processStartUsing = params => request({ url: '/admin/workflow-service2/flow/startUsingProcess', method: 'POST', data: params })

// 停用流程
export const processBlockUsing = params => request({ url: '/admin/workflow-service2/flow/blockProcess', method: 'POST', data: params })

// 复制流程
export const copyProcess = params => request({ url: '/admin/workflow-service2/flow/copyProcess', method: 'POST', data: params })

// 删除流程
export const deleteProcess = params => request({ url: '/admin/workflow-service2/flow/deleteProcess', method: 'POST', data: params })

// 流程名称去重校验
export const checkProcessName = params => request({ url: '/admin/workflow-service2/repository/model/checkFlow', method: 'POST', data: params })
