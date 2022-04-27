/*
 * @Description: app actions
 * @Author: ZY
 * @Date: 2020-12-23 10:25:37
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-04-26 17:09:35
 */

export const actions = {
  async ACTION_ADD_VIEW({ commit }, view) {
    commit('ADD_VISITED_VIEW', view)
    commit('ADD_CACHED_VIEW', view)
  },
  ACTION_ADD_VISITED_VIEW({ commit }, view) {
    commit('ADD_VISITED_VIEW', view)
  },
  ACTION_DEL_VIEW({ commit }, view) {
    commit('DEL_VISITED_VIEW', view)
    commit('DEL_CACHED_VIEW', view)
  },
  ACTION_DEL_OTHER_VIEW({ commit }, view) {
    commit('DEL_OTHERS_VISITED_VIEWS', view)
    commit('DEL_OTHERS_CACHED_VIEWS', view)
  },
  ACTION_DEL_CACHED_VIEW({ commit }, view) {
    commit('DEL_CACHED_VIEW', view)
  },
  ACTION_OTHER_VIEWS({ commit }, view) {
    commit('DEL_OTHERS_VISITED_VIEWS', view)
    commit('DEL_OTHERS_CACHED_VIEWS', view)
  },
  ACTION_DEL_ALL_VIEWS({ commit }) {
    commit('DEL_ALL_VISITED_VIEWS')
    commit('DEL_ALL_CACHED_VIEWS')
  },
  ACTION_DEL_ALL_CACHED_VIEWS({ commit }) {
    commit('DEL_ALL_CACHED_VIEWS')
  },
  ACTION_UPDATE_VISITED_VIEW({ commit }, view) {
    commit('UPDATE_VISITED_VIEW', view)
  }

}
