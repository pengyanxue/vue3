/*
 * @Description:
 * @Date: 2020-12-28 11:26:33
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-04-27 16:35:16
 */
import { getToken } from '@/utils/cookies'

export const state = {
  token: getToken() || '',
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  email: ''
}
