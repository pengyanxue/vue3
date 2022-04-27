/*
 * @Author: pengyanxue
 * @Date: 2022-02-09 16:24:28
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-02-10 10:08:41
 */

import request from '@/utils/request'
import qs from 'qs'

// 获取收藏列表数据
export const getCollectListData = params => request({ url: `/admin/workflow-service2/kk322/my-collection/list`, method: 'GET', params: params })

// 取消收藏
export const cancelCollect = data => request({ url: `/admin/workflow-service2/kk322/my-collection/cancel`, method: 'POST', data: data })
