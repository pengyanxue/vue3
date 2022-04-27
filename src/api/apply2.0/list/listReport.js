/*
 * @Author: xiaomin
 * @Date: 2020-11-27 10:42:11
 * @LastEditTime: 2022-03-18 15:08:29
 * @LastEditors: xiaominhuang
 * 列表上报页面
 */

import request from '@/utils/request'
import qs from 'qs'

// 校验是否可以
export const checkByUser = params => request({ url: '/admin/workflow-service2/form/data/limit', method: 'GET', params: params })

// table查询
export const getTableData = params => request({ url: '/admin/workflow-service2/form/data/search-by-page', method: 'POST', data: params })

// 获取省市区数据
export const getAreaData = params => request({ url: '/admin/auth-admin/city-area/public/list-with-app', method: 'GET', params: params })

// 获取所有部门
export const getAllDepartments = params => request({ url: `/admin/auth-department/findDepartmentsMapByIds?&resultFormat=map`, method: 'GET', params: params })

// 获取所有用户
export const getAllAccount = params => request({ url: '/admin/auth-user/account/list?&resultFormat=map', method: 'GET', params: params })

// 获取组织机构
export const getOrgsData = params => request({ url: '/admin/auth-department/public/search-by-app', method: 'GET', params: params })

// 获取数据字典
export const getDicData = params => request({ url: '/admin/auth-dictionary/data/public/search', method: 'GET', params: params })

// 删除数据
export const deleteTableData = params => request({ url: '/admin/workflow-service2/form/data/delete', method: 'POST', data: params })

// 查询列表是否可撤回功能
export const checkBackoutData = params => request({ url: '/admin/workflow-service2/runtime/checkWithdraw', method: 'GET', params: params })

// 撤销
export const backoutProcess = params => request({ url: '/admin/workflow-service2/flow/processCancel', method: 'GET', params: params })

// 授权编辑
export const editDataState = params => request({
  url: '/admin/workflow-service2/form/data/state',
  method: 'POST',
  data: qs.stringify(params),
  header: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

// 导出
export const exportTableData = params => request({
  url: '/admin/workflow-service2/data-list/download',
  method: 'POST',
  responseType: 'arraybuffer',
  headers: {
    logDec: encodeURI(params.logDec)
  },
  data: qs.stringify(params)
})

// 下载模板
export const exportTemplate = params => request({
  url: '/admin/workflow-service2/data-list/download-imp-template',
  responseType: 'blob',
  method: 'GET',
  params: params
})

// 导入
export const importTableData = (params, data) => request({
  url: `/admin/workflow-service2/data-list/data/imp?listId=${params.listId}&formId=${params.formId}&appId=${params.appId}&sysId=${params.sysId}&logDec=${params.logDec}`,
  method: 'POST',
  data: data
})

// 下载附件
export const downloadAttachmentData = params => request({
  url: '/admin/workflow-service2/self-definition-form/file/download-files',
  responseType: 'blob',
  method: 'POST',
  data: params
})

// 获取转办人
export const getTurnUserData = params => request({ url: '/admin/workflow-service2/flow/getAdministrativePersonBatch', method: 'POST', data: params })

// 批量转办
export const batchTurnHandleData = params => request({ url: '/admin/workflow-service2/flow/deliverProcessBatch', method: 'POST', data: params })

// 获取流程审核配置
export const approvalConfigData = params => request({ url: '/admin/workflow-service2/flow/getApproveButBatch', method: 'POST', data: params })

// 批量审核
export const batchApprovalHandleData = params => request({ url: '/admin/workflow-service2/flow/approvalProcessBatch', method: 'POST', data: params })

// 批量办结
export const batchTransactionHandleData = params => request({ url: '/admin/workflow-service2/flow/approvalProcessBatchConclude', method: 'POST', data: params })

// 获取表单JSON数据
export const getFormJson = formId => request({ url: `/admin/workflow-service2/form/ui-json/${formId}`, method: 'GET' })

// 表单数据添加
export const addFormInfo = data => request({ url: `/admin/workflow-service2/form/data/add`, method: 'POST', data: data })

// 表单数据编辑
export const updateFormInfo = data => request({ url: `/admin/workflow-service2/form/data/update`, method: 'POST', data: data })

// 表单上报数据查看详情接口
export const getFormDetailData = params => request({ url: `/admin/workflow-service2/form/data/public/detail`, method: 'GET', params: params })

// 表单数据接口
export const getFormData = params => request({ url: `/admin/workflow-service2/form/data/detail`, method: 'GET', params: params })

// 表单字段获取接口
export const getFormFields = params => request({ url: `/admin/workflow-service2/form/fields-names?formId=${params}`, method: 'GET' })

// 获取数据上报填报的数据字段权限以及，按钮显示
export const getFieldPermissions = data => request({ url: `/admin/workflow-service2/flow/getFieldPermissions`, method: 'POST', data: data })

export const getAutoConfigData = data => request({ url: '/admin/workflow-service2/form/data/auto-fill-search', method: 'POST', data })

// 下载word
export function wordDownload(params) {
  return request({
    url: `/admin/workflow-service2/form/data/download`,
    method: 'get',
    params: params,
    responseType: 'blob'
  })
}

// 获取关联表单列表
export const getRelationTableData = data => request({ url: '/admin/workflow-service2/form/data/search-by-page-select', method: 'POST', data })

// 通过id获取某条关联数据详情
export const getRelationData = data => request({ url: '/admin/workflow-service2/form/data/search-formSettingData-by-id', method: 'POST', data: qs.stringify(data) })

// 获取附件上传的下拉列表
export function getFeildOption(data) {
  return request({
    url: `/admin/workflow-service2/self-definition-form/file/attachmentFieldList`,
    method: 'POST',
    data: qs.stringify(data)
  })
}

// 获取附件上传的字段
export function getAttachmentOption(data) {
  return request({
    url: `/admin/workflow-service2/self-definition-form/file/attachmentList`,
    method: 'POST',
    data: qs.stringify(data)
  })
}

// 附件更新记录确认提交
export function updateAttachmentData(data) {
  return request({
    url: `/admin/workflow-service2/self-definition-form/file/updateFile`,
    method: 'POST',
    data: data
  })
}

// 获取kk322操作记录
export const getOptionLogList = id => request({ url: `/admin/workflow-service2/story/${id}`, method: 'GET' })

// 操作记录中操作人回显用户名
export const getUserName = data => request({ url: `/admin/auth-user/searchUserBasicInfoByIds`, method: 'POST', data: data })

// 采用
export const pick = data => request({ url: `/admin/workflow-service2/kk322/contribution/pick`, method: 'POST', data: data })

// 取消采用
export const unPick = data => request({ url: `/admin/workflow-service2/kk322/contribution/unPick`, method: 'POST', data: data })

// 刊物标题下拉选项接口
export const getTitleList = params => request({ url: `/admin/workflow-service2/kk322/formConfig/getFormData`, method: 'GET', params: params })

// 退稿
export const reject = data => request({ url: `/admin/workflow-service2/kk322/contribution/reject`, method: 'POST', data: data })

// 收藏
export const addCollect = data => request({ url: `/admin/workflow-service2/kk322/my-collection/add`, method: 'POST', data: data })

// 通过基础表单中key查找对应value
export const getConfigValue = params => request({ url: `/admin/workflow-service2/kk322/formConfig/getConfigValue`, method: 'GET', params: params })

// 获取数据字典类别下的收藏分类 下的数据字典
export const getDicDataType = params => request({ url: '/admin/auth-dictionary/data/list', method: 'GET', params: params })

// 获取子系统详情
export const getSysConfigData = params => request({ url: `/admin/workflow-service2/subsys/${params}`, method: 'GET' })

// 获取默认字段
export const getDefaultFields = params => request({ url: `/admin/workflow-service2/form/data/public/default-fields`, method: 'GET' })

// 判断个人上报是否达到上限
export const checkUserReportLimit = params => request({ url: `/admin/workflow-service2/kk322/contribution/up-to-limit`, method: 'GET' })

// 获取流程全局设置的转办建议
export const getProcessSuggestData = params => request({ url: `/admin/workflow-service2/flow/getflowDefaultSuggest`, method: 'GET', params: params })
