/*
 * @Author: xiaomin
 * @Date: 2021-06-21 14:38:47
 * @LastEditTime: 2021-06-23 14:16:06
 * @LastEditors: xiaominhuang
 * @function: 报表分类管理
 */
import request from '@/utils/request'

// 获取报表分类树
export const getReportTreeData = params => request({ url: `/admin/report-service/category/defaultStaticTree`, method: 'GET', params: params })

// 获取报表分类列表
export const getClassifyTableData = params => request({ url: `/admin/report-service/category/search`, method: 'GET', params: params })

// 添加报表分类
export const addClassifyData = params => request({ url: `/admin/report-service/category/save`, method: 'POST', data: params })

// 编辑报表分类
export const updateClassifyData = params => request({ url: `/admin/report-service/category/update`, method: 'POST', data: params })

// 启用报表分类
export const activeClassifyData = params => request({ url: `/admin/report-service/category/active`, method: 'POST', data: params })

// 作废报表分类
export const discardClassifyData = params => request({ url: `/admin/report-service/category/discard`, method: 'POST', data: params })

// 删除报表分类
export const deleteClassifyData = params => request({ url: `/admin/report-service/category/delete`, method: 'POST', data: params })

// 获取报表分类详情
export const getClassifyDetailData = params => request({ url: `/admin/report-service/category/detail`, method: 'GET', params: params })

// 获取所有未添加分类应用
export const getAppData = () => request({ url: `/admin/report-service/category/getAppList`, method: 'GET' })
