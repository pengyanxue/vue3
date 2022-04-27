/*
 * @Author: xiaomin
 * @Date: 2021-01-21 13:49:13
 * @LastEditTime: 2021-02-26 10:09:45
 * @LastEditors: xiaominhuang
 */
import request from '@/utils/request'

// 全部应用数据
export const getAllAppData = params => request({ url: `/admin/workflow-service2/dashboard/app-amount`, method: 'GET' })

// 获取前端用户数据
export const getFrontUserAmount = params => request({ url: `/admin/workflow-service2/dashboard/frontend-user-amount`, method: 'GET' })

// 系统用户数据
export const getSysUserData = params => request({ url: `/admin/workflow-service2/dashboard/sys-user-data`, method: 'GET' })

// 获取操作日志
export const getLogData = params => request({ url: `/admin/operation-log/search/log?` + params, method: 'GET' })

// 我的待办数据
export const getDealwithData = params => request({ url: `/admin/workflow-service2/flow/dealWithProcessVariables`, method: 'POST', data: params })

// 获取该用户权限内的子系统
export const getUserSubSystemData = params => request({ url: `/admin/auth-authorization/role/check/permission`, method: 'GET', params: params })
