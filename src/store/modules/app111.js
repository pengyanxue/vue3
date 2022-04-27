/*
 * @Author: pengyanxue
 * @Date: 2021-06-16 14:09:46
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-04-25 18:23:32
 */
// import Cookies from 'js-cookie'

const state = {
  sidebar: {
    // opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  device: 'desktop',
  apply: {},
  is4aLogin: false,
  cancelHttpArr: []
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    // if (state.sidebar.opened) {
    //   Cookies.set('sidebarStatus', 1)
    // } else {
    //   Cookies.set('sidebarStatus', 0)
    // }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    // Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  apply: (state, apply) => {
    state.apply = apply
  },
  LOGIN_TYPE: (state, is4aLogin) => {
    state.is4aLogin = is4aLogin
  },
  PUSH_CANCEL_TOKEN(state, payload) {
    state.cancelHttpArr.push(payload.cancelToken)
  },
  CANCEL_HTTP({ cancelHttpArr }) {
    cancelHttpArr.forEach(item => {
      item()
    })
    cancelHttpArr = []
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  apply({ commit }, apply) {
    commit('apply', apply)
  },
  loginType({ commit }, is4aLogin) {
    commit('LOGIN_TYPE', is4aLogin)
  },
  pushCanceltoken({ commit }, data) {
    commit('PUSH_CANCEL_TOKEN', data)
  },
  cancelHttp({ commit }) {
    commit('CANCEL_HTTP')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
