/*
 * @Description: app actions
 * @Author: ZY
 * @Date: 2020-12-23 10:25:37
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-04-26 17:02:19
 */
export const actions = {
  ACTION_TOGGLE_SIDEBAR({ commit }, withoutAnimation) {
    commit(AppMutationTypes.TOGGLE_SIDEBAR, withoutAnimation)
  },
  ACTION_CLOSE_SIDEBAR({ commit }, withoutAnimation) {
    commit(AppMutationTypes.CLOSE_SIDEBAR, withoutAnimation)
  },
  ACTION_TOGGLE_DEVICE({ commit }, device) {
    commit(AppMutationTypes.TOGGLE_DEVICE, device)
  },
  ACTION_SET_LANGUAGE({ commit }, language) {
    commit(AppMutationTypes.SET_LANGUAGE, language)
  },
  ACTION_SET_SIZE({ commit }, size) {
    commit(AppMutationTypes.SET_SIZE, size)
  }
}
