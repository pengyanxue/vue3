import request from '@/utils/request'
import qs from 'qs'
import { downloadExportFile } from '@/api/auth/system'

/**
 * 获取表单管理列表
 * @param {*} params
 */
export function getTableData(params) {
  return request({
    url: `/admin/workflow-service2/form/list`,
    method: 'get',
    params: params
  })
}
/**
 * 获取表单基础信息
 * @param {*} id
 */
export function getFormInfo(id) {
  return request({
    url: `/admin/workflow-service2/form/detail/${id}`,
    method: 'get'
  })
}
/**
 * 表单启用与停用
 * @param {*} id
 * @param {*} formstate
 */
export function changeState(id, formstate, logDec) {
  return request({
    url: `/admin/workflow-service2/form/state/${id}/${formstate}`,
    method: 'post',
    data: {
      logDec: logDec
    }
  })
}

/**
 * 表单删除
 * @param {*} id
 */
export function deleteForm(id, logDec) {
  return request({
    url: `/admin/workflow-service2/form/del/${id}`,
    method: 'post',
    data: {
      logDec: logDec
    }
  })
}

/**
 * 表单复制
 * @param {*} data
 */
export function copyForm(data) {
  return request({
    url: `/admin/workflow-service2/form/copy`,
    method: 'post',
    data: data
  })
}
/**
 * 新建表单保存
 * @param {*} data
 */
export function saveForm(data) {
  return request({
    url: '/admin/workflow-service2/form/add',
    method: 'post',
    data: data
  })
}
/**
 * 表单基础信息修改
 * @param {*} data
 */
export function updateForm(data) {
  return request({
    url: '/admin/workflow-service2/form/update',
    method: 'post',
    data: data
  })
}

/**
 * 获取表单设计内容
 * @param {*} formId
 */
export function getDesign(formId) {
  return request({
    url: `/admin/workflow-service2/form/ui-json/${formId}`,
    method: 'get'
  })
}
/**
 * 保存表单设计
 * @param {*} data
 */
export function saveDesign(data) {
  return request({
    url: '/admin/workflow-service2/form/generate',
    method: 'post',
    data: data
  })
}

// 校验表单名称重复name-duplicate-validate
export function nameValidate(params) {
  return request({
    url: '/admin/workflow-service2/form/name-duplicate-validate',
    method: 'post',
    data: qs.stringify(params),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  })
}

// 获取省市区
export function getCity(pCode, params) {
  return request({
    url: `/admin/auth-admin/city-area/public/list-with-app?pCode=${pCode}&level=2`,
    method: 'get',
    params
  })
}

// 获取省市区
export function getDistrict(pCode, params) {
  return request({
    url: `/admin/auth-admin/city-area/public/list-with-app?pCode=${pCode}&level=3`,
    method: 'get',
    params
  })
}

// 导出字段
export function exportFields(formId, formName) {
  const viewUrl = `/admin/workflow-service2/form/fields-export?formId=${formId}`
  downloadExportFile(viewUrl).then(rsp => {
    const blob = new Blob([rsp], { type: 'application/vnd.ms-text;charset=utf-8' })
    const filename = formName + '.csv'
    if ('download' in document.createElement('a')) {
      const a = document.createElement('a')
      const url = window.URL.createObjectURL(blob)
      a.href = url
      a.download = filename
      const body = document.getElementsByTagName('body')[0]
      body.appendChild(a)
      a.click()
      body.removeChild(a)
      window.URL.revokeObjectURL(url)
    } else { // IE10+下载
      navigator.msSaveBlob(blob, filename)
    }
  })
  // return request({
  //   url: `/admin/workflow-service2/form/fields-export?formId=${formId}`,
  //   method: 'get',
  //   params
  // })
}

// 获取表单数据关联选择数据通过id进行回显
export function getFormSettingById(data) {
  return request({
    url: `/admin/workflow-service2/form/data/search-formSettingData-by-id`,
    method: 'POST',
    data: qs.stringify(data)
  })
}

//获取更新记录列表
export function getAttachmentList(data) {
  return request({
    url: `/admin/workflow-service2/self-definition-form/file/attachmentUpdateRecords`,
    method: 'POST',
    data: qs.stringify(data)
  })
}

//最新的附件
export function getLastAttachment(data) {
  return request({
    url: `/admin/workflow-service2/self-definition-form/file/attachmentLatestList`,
    method: 'POST',
    data: qs.stringify(data)
  })
}
