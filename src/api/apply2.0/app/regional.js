/*
 * @Author: xiaomin
 * @Date: 2021-03-24 09:30:34
 * @LastEditTime: 2021-08-16 18:16:46
 * @LastEditors: pengyanxue
 */
import request from '@/utils/request'

// 分页表格
export const getAreaTableData = params => request({ url: '/admin/auth-admin/city-area/page-search', method: 'GET', params: params })

// 删除
export const deleteAreaData = params => request({ url: `/admin/auth-admin/city-area/${params.id}`, method: 'DELETE', params: params })

// 修改或添加
export const updateAreaData = params => request({ url: `/admin/auth-admin/city-area/addOrUpd`, method: 'POST', data: params })

// 查询单条数据
export const getAreaData = params => request({ url: '/admin/auth-admin/city-area/detail', method: 'GET', params: params })

// 启用、作废
export const changeAreaState = params => request({ url: `/admin/auth-admin/city-area/state`, method: 'POST', data: params })

// 独立应用分页表格
export const getAppTableData = params => request({ url: '/admin/workflow-service2/app/city-area/page-search', method: 'GET', params: params })

// 独立应用删除
export const deleteAppData = data => request({ url: `/admin/workflow-service2/app/city-area/delete`, method: 'POST', data: data })

// 独立应用修改或添加
export const updateAppData = params => request({ url: `/admin/workflow-service2/app/city-area/addOrUpd`, method: 'POST', data: params })

// 独立应用查询单条数据
export const getAppDataDetail = params => request({ url: '/admin/workflow-service2/app/city-area/detail', method: 'GET', params: params })

// 独立应用启用、作废
export const changeAppState = params => request({ url: `/admin/workflow-service2/app/city-area/state`, method: 'POST', data: params })

// 移动地区保存
export const moveAreaData = data => request({ url: `/admin/auth-admin/city-area/move`, method: 'POST', data: data })

// 独立应用移动地区保存
export const moveAppData = data => request({ url: `/admin/workflow-service2/app/city-area/move`, method: 'POST', data: data })

// 同步地区
export const syncData = appId => request({ url: `/admin/workflow-service2/app/city-area/sync?appId=${appId}`, method: 'POST' })

// 独立应用地区异步树
export const syncTreeData = params => request({ url: `/admin/workflow-service2/app/city-area/dynamicTree`, method: 'GET', params: params })

