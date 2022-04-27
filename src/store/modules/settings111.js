import defaultSettings from '@/settings'

import variables from '@/styles/variables.scss'

const { showSettings, tagsView, fixedHeader, sidebarLogo } = defaultSettings

const state = {
  showSettings: showSettings,
  tagsView: tagsView,
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo,
  theme: variables.theme
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  },

  CHANGE_THEME: (state, data) => {
    state.theme = data
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  },

  changeTheme: ({ commit }, data) => {
    commit('CHANGE_THEME', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

