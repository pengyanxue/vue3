/*
 * @Description: app state
 * @Author: ZY
 * @Date: 2020-12-23 10:25:37
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-04-27 10:41:31
 */
import { getSidebarStatus, getSize } from '@/utils/cookies'
import { getLocale } from '@/locales'

// export enum DeviceType {
//   Mobile,
//   Desktop,
// }
const isMobile = () => {
  const rect = document.body.getBoundingClientRect()
  return rect.width - 1 < 992
}

export const state = {
  device: isMobile() ? 'Mobile' : 'Desktop',
  sidebar: {
    opened: getSidebarStatus() !== 'closed',
    withoutAnimation: false
  },
  language: getLocale(),
  size: getSize() || 'medium'
}
