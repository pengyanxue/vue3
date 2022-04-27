/*
 * @Author: xiaomin
 * @Date: 2021-03-08 13:35:41
 * @LastEditTime: 2022-04-08 09:07:16
 * @LastEditors: pengyanxue
 */
import request from '@/utils/request'

// 获取地区树机构
export const getAreaData = params => request({ url: '/admin/auth-admin/city-area/defaultDynamicTree/v2', method: 'GET', params: params })

// 获取某地区审核人
export const getAreaApproverData = params => request({ url: '/admin/workflow-service2/flow-area-approver/list-by-page', method: 'GET', params: params })

// 获取某地区某应用下所有用户
export const getAreaUerData = params => request({ url: '/admin/workflow-service2/flow-area-approver/list-user-by-app', method: 'GET', params: params })

// 添加地区审核人
export const addAreaUerData = params => request({ url: '/admin/workflow-service2/flow-area-approver/add', method: 'POST', data: params })

// 删除某地区审核人
export const deleteAreaApproverData = params => request({ url: '/admin/workflow-service2/flow-area-approver/del', method: 'POST', data: params })

// 导出模板
export const exportAreaTemplate = () => request({ url: '/admin/workflow-service2/flow-area-approver/download-imp-template', method: 'GET', responseType: 'blob' })

// 导入地区数据
export const importAreaData = (params, logDec) => request({ url: `/admin/workflow-service2/flow-area-approver/data/imp?logDec=${logDec}`, method: 'POST', data: params })

// 判断当前应用是否同步过地区信息
export const getSyncStatus = () => request({ url: '/admin/workflow-service2/app/city-area/sync/status', method: 'GET' })

// 查询当前应用下省市区数据
export const getAppArea = (pCode, level) => request({ url: `/admin/auth-admin/city-area/public/list-with-app?pCode=${pCode}&level=${level}`, method: 'GET' })
