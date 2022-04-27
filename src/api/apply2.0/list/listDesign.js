/*
 * @Author: xiaomin
 * @Date: 2020-11-24 11:42:06
 * @LastEditTime: 2022-01-20 16:41:12
 * @LastEditors: pengyanxue
 * @function: 列表设计
 */

import request from '@/utils/request'

// 获取子系统下所有表单
export const getFormList = params => request({ url: `/admin/workflow-service2/form/list-by-app/${params}`, method: 'GET' })

// 获取子系统下所有流程
export const getFlowList = params => request({ url: `/admin/workflow-service2/list-design/searchAppFlow`, method: 'GET', params: params })

// 获取主表单字段
export const getAllFields = params => request({ url: `/admin/workflow-service2/list-design/fields`, method: 'GET', params: params })

// 列表设计 - 保存
export const saveList = params => request({ url: '/admin/workflow-service2/data-list/ui/save', method: 'POST', data: params })

// 获取列表详情信息
export const getListDetail = params => request({ url: `/admin/workflow-service2/data-list/detail/${params}`, method: 'GET' })

// 获取多个表单json数据
export const getFormJsons = params => request({ url: `/admin/workflow-service2/form/ui-json`, method: 'POST', data: params })

// 获取主表字段下的单行文本和select的企业名称字段
export const getMasterFields = params => request({ url: `/admin/workflow-service2/form/master-fields`, method: 'GET', params: params })
