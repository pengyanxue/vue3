/*
 * @Description: app Mutations
 * @Author: ZY
 * @Date: 2020-12-23 10:25:37
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-04-26 16:58:01
 */
import { setSidebarStatus, setLanguage, setSize } from '@/utils/cookies'

export const mutations = {
  TOGGLE_SIDEBAR: (state, withoutAnimation) => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = withoutAnimation
    if (state.sidebar.opened) {
      setSidebarStatus('opened')
    } else {
      setSidebarStatus('closed')
    }
  },

  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
    setSidebarStatus('closed')
  },

  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },

  SET_LANGUAGE: (state, language) => {
    state.language = language
    setLanguage(state.language)
  },

  SET_SIZE:(state, size) =>{
    state.size = size
    setSize(state.size)
  }

}
