/*
 * @Author: pengyanxue
 * @Date: 2020-12-22 10:22:23
 * @LastEditors: pengyanxue
 * @LastEditTime: 2021-08-24 09:54:47
 */
import request from '@/utils/request'

// 查找表单提交的内容
export const findTask = params => request({ url: `/admin/workflow-service2/runtime/findTask`, method: 'GET', params: params })

// 查找表单提交的内容
export const findAunchedTask = params => request({ url: `/admin/workflow-service2/runtime/findAunchedTask`, method: 'GET', params: params })

// 流程转办接口
export const transfer = params => request({ url: `/admin/workflow-service2/flow/deliverProcess`, method: 'POST', data: params })

// 我的已办理列表接口
export const gotmineProcessInstances = params => request({ url: `/admin/workflow-service2/runtime/GotmineProcessInstances` + params, method: 'GET' })

// 我的待办理列表接口
export const dealwithProcessInstances = params => request({ url: `/admin/workflow-service2/runtime/dealwithProcessInstances` + params, method: 'GET' })

// 我的申请列表接口
export const myApplicationManage = params => request({ url: `/admin/workflow-service2/runtime/myApplication` + params, method: 'GET' })

// 获取流程图接口
export const showPic = params => request({ url: `/admin/workflow-service2/repository/model/flowchartTracking?processInstanceId=` + params, method: 'GET' })

// 流程图节点进度
export const docIist = params => request({ url: `/admin/workflow-service2/processnodeTracing?processInstanceId=` + params, method: 'GET' })

// 我的抄送列表接口
export const myCclistManage = params => request({ url: `/admin/workflow-service2/runtime/myCopyToProcessInstances` + params, method: 'GET' })

// 暂存
export const temporaryData = params => request({ url: `/admin/workflow-service2/flow/approvalProcessTemp`, method: 'POST', data: params })

// 更新主表数据
export const updateWorkflow = data => request({ url: `/admin/workflow-service2/form/data/update-without-flow`, method: 'POST', data: data })

// 通过流程实例id获取appId
export const getAppId = processInstanceId => request({ url: `/admin/workflow-service2/runtime/getAppInfo?processInstanceId=${processInstanceId}`, method: 'GET' })
