/*
 * @Author: xiaomin
 * @Date: 2021-06-21 14:38:47
 * @LastEditTime: 2021-07-05 15:37:29
 * @LastEditors: xiaominhuang
 * @function: 报表管理
 */
import request from '@/utils/request'

// 获取报表分类树
export const getReportTreeData = params => request({ url: `/admin/report-service/category/defaultStaticTree`, method: 'GET', params: params })

// 获取报表分类列表
export const getReportTableData = params => request({ url: `/admin/report-service/report/search`, method: 'GET', params: params })

// 添加报表分类
export const addReportData = params => request({ url: `/admin/report-service/report/save`, method: 'POST', data: params })

export const copyReportData = params => request({ url: `/admin/report-service/report/copy`, method: 'POST', data: params })

// 编辑报表分类
export const updateReportData = params => request({ url: `/admin/report-service/report/update`, method: 'POST', data: params })

// 启用报表分类
export const activeReportData = params => request({ url: `/admin/report-service/report/active`, method: 'POST', data: params })

// 作废报表分类
export const discardReportData = params => request({ url: `/admin/report-service/report/discard`, method: 'POST', data: params })

// 删除报表分类
export const deleteReportData = params => request({ url: `/admin/report-service/report/delete`, method: 'POST', data: params })

// 获取报表分类详情
export const getReportDetailData = params => request({ url: `/admin/report-service/report/detail`, method: 'GET', params: params })

// 获取所有未添加分类应用
export const getAppData = () => request({ url: `/admin/report-service/category/getAppList`, method: 'GET' })

// 获取用户树
export const getUserTreeData = () => request({ url: `/admin/auth-user/dynamicUserAllDepartmentTree`, method: 'GET' })
