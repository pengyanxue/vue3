/*
 * @Author: xiaomin
 * @Date: 2021-01-14 10:55:39
 * @LastEditTime: 2021-04-25 14:25:15
 * @LastEditors: pengyanxue
 */

import request from '@/utils/request'
import qs from 'qs'

// 获取所有用户
export const getAllAccount = params => request({ url: '/admin/auth-user/account/list?&resultFormat=map', method: 'GET', params: params })

// 获取所有应用
export const getAppNameList = () => request({ url: `/admin/workflow-service2/app/all`, method: 'GET' })

// 获取应用日志
export const getAppLogList = params => request({ url: `/admin/operation-log/searchApp/log`, method: 'GET', params: params })

// 下载应用日志
export const exportAppLogs = params => request({ url: `/admin/operation-log/downloadApp`, headers: { logDec: encodeURI(params.logDec) }, method: 'POST', responseType: 'arraybuffer', data: qs.stringify(params) })
