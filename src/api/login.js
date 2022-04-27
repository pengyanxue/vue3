/*
 * @Author: pengyanxue
 * @Date: 2022-04-26 23:19:23
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-04-27 16:18:49
 */
import request from '@/utils/request'

// 测试请求
// export const login = (obj) => {
//   return request('post', 'login', obj)}

export const getTokenByUsername = (data) => request({
  url: `/auth-authentication/oauth/token?grant_type=password&client_id=${data.clientId}&client_secret=${data.clientSecret}&username=${data.username}&password=${data.password}&verificationCode=${data.captcha}&parameter=afterend`,
  method: 'POST',
  data: data
})

export const getLoginVerifiCodeImage = () => request({ url: `/auth-authentication/kaptcha/getLoginVerifiCodeImage?_v=${Math.random()}`, method: 'GET' })
