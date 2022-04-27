/*
 * @Author: xiaomin
 * @Date: 2020-10-09 11:30:42
 * @LastEditTime: 2021-04-27 14:38:43
 * @LastEditors: xiaominhuang
 */
import request from '@/utils/request'

// 获取审核人列表
export const getApproverList = params => request({ url: '/admin/auth-user/getApprover', method: 'get', params: params })

// 添加审核人
export const addApprover = params => request({ url: '/admin/auth-user/saveApprover', method: 'post', data: params })

// 启用
export const enabledApprover = params => request({ url: '/admin/auth-user/enabledUserApprover', method: 'post', data: params })

// 作废
export const cancellationApprover = params => request({ url: '/admin/auth-user/cancellationUserApprover', method: 'post', data: params })
