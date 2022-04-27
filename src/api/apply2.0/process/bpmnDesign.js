/*
 * @Author: xiaomin
 * @Date: 2021-03-08 12:43:27
 * @LastEditTime: 2021-04-25 18:09:40
 * @LastEditors: xiaominhuang
 */
// 获取绑定表单列表
import request from '@/utils/request'

export const getBandList = params => request({ url: `/admin/workflow-service2/form/list-by-app/${params}`, method: 'GET' })

// 获取表单字段及表单信息
export const getForm = params => request({ url: `/admin/workflow-service2/form/fields-multi-form`, method: 'POST', data: params })

// 提交表单数据
export const sendForm = params => request({ url: `/admin/workflow-service2/repository/model/saveFlowChart`, method: 'POST', data: params })

// 提交人工节点以及网关数据
export const sendTaskGew = params => request({ url: `/admin/workflow-service2/repository/model/saveSettings`, method: 'POST', data: params })

// 绑定表单的数据
export const allBindList = params => request({ url: `/admin/workflow-service2/form/by-ids`, method: 'POST', data: params })

// 获取绑定表单的字段集合
export const getFieldList = params => request({ url: `/admin/workflow-service2/form/fields-metric?formId=${params}`, method: 'GET' })

// 回显表单字段权限
export const getPermissionData = id => request({ url: `/admin/workflow-service2/flow/findProcessForm?id=${id}`, method: 'GET' })

// 回显数据
export const getSettings = params => request({ url: `/admin/workflow-service2/repository/model/getSettings`, method: 'POST', data: params })

// 回显抄送人转办人列表数据
export const getUsernameById = params => request({ url: `/admin/auth-user/account/getUserInfo`, method: 'POST', data: params })

// 审核回显转办人列表
export const getUserInfoList = params => request({ url: `/admin/auth-user/account/getTurnUserInfo`, method: 'POST', data: params })

// 批量删除节点抄送人
export const deleteCopyUser = params => request({ url: `/admin/workflow-service2/flow/deleteFlowNodeCopyUserConfig`, method: 'POST', data: params })

// 批量删除转办人
export const delReturnUser = params => request({ url: `/admin/workflow-service2/flow/deleteFlowNodeApprovePeriodNoticeRule`, method: 'POST', data: params })

// 删除提醒列表
export const deleteCandidate = params => request({ url: `/admin/workflow-service2/flow/deleteflowNodeUserTrunCandidate`, method: 'POST', data: params })

// 删除绑定表单
export const deleteformId = params => request({ url: `/admin/workflow-service2/flow/deleteFormId`, method: 'POST', data: params })

// 流程审核获取按钮字段
export const getButton = params => request({ url: `/admin/workflow-service2/flow/getFieldPermissions`, method: 'POST', data: params })

// 获取流程转办人列表
export const getReturnPeople = params => request({ url: `/admin/workflow-service2/flow/getAdministrativePerson`, method: 'POST', data: params })

// 获取流程图
export const getBpmn = params => request({ url: `/admin/workflow-service2/repository/model/newSource`, method: 'POST', data: params })
// 删除节点
export const delGatWay = params => request({ url: `/admin/workflow-service2/flow/deleteGatewayProcessVariables`, method: 'POST', data: params })

export const deleteNode = params => request({ url: `/admin/workflow-service2/flow/deleteNode`, method: 'POST', data: params })

export const deleteGatewayNode = params => request({ url: `/admin/workflow-service2/flow/deleteGatewayNode`, method: 'POST', data: params })

// 主表单省市区字段
export const cityColNames = params => request({ url: `/admin/workflow-service2/form/city-col-names?formId=${params}`, method: 'GET' })
