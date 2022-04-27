/*
 * @Author: pengyanxue
 * @Date: 2021-07-12 17:41:08
 * @LastEditors: pengyanxue
 * @LastEditTime: 2021-07-12 17:57:24
 */
import request from '@/utils/request'

// 批量作废
export const discardBatch = data => request({ url: '/admin/auth-authorization/resource/discardBatch', method: 'POST', data: data })

// 批量启用
export const activeBatch = data => request({ url: '/admin/auth-authorization/resource/activeBatch', method: 'POST', data: data })

// 批量删除
export const deleteResourceBatch = data => request({ url: '/admin/auth-authorization/resource/deleteResourceBatch', method: 'POST', data: data })


// form请求
export function formPost(urlPath, params) {
  return request({
    url: urlPath,
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', logDec: encodeURI(params.logDec) || ''
    },
    data: params,
    transformRequest: [
      function(data) {
        let ret = ''
        for (const it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret.substring(0, ret.length - 1)
      }
    ]
  })
}
