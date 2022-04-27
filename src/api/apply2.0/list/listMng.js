/*
 * @Author: xiaomin
 * @Date: 2020-11-20 14:48:30
 * @LastEditTime: 2021-04-27 18:03:29
 * @LastEditors: xiaominhuang
 */

import request from '@/utils/request'

// 获取列表管理列表
export const getListTable = params => request({ url: '/admin/workflow-service2/data-list/list', method: 'GET', params: params })

// 新建列表
export const addList = params => request({ url: '/admin/workflow-service2/data-list/add', method: 'POST', data: params })

// 编辑列表
export const updateList = params => request({ url: '/admin/workflow-service2/data-list/update', method: 'POST', data: params })

// 列表数据查看
export const getListView = params => request({ url: `/admin/workflow-service2/data-list/detail/${params}`, method: 'GET' })

// 删除列表数据
export const deleteList = params => request({ url: `/admin/workflow-service2/data-list/del/${params.id}`, method: 'POST', data: params })

// 列表启用、停用
export const updateListState = params => request({ url: `/admin/workflow-service2/data-list/state/${params.id}/${params.listState}`, method: 'POST', data: params })

// 复制列表
export const copyList = params => request({ url: '/admin/workflow-service2/data-list/copy', method: 'POST', data: params })

// 列表名称重复性校验
export const checkListName = params => request({ url: '/admin/workflow-service2/data-list/name-duplicate-validate', method: 'GET', params: params })
