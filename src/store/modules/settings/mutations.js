/*
 * @Description: app Mutations
 * @Author: ZY
 * @Date: 2020-12-23 10:25:37
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-04-26 22:54:56
 */
export const mutations = {
  CHANGE_SETTING(state, payload) {
    const { key, value } = payload
    switch (key) {
      case 'theme':
        state.theme = value
        break
      case 'fixedHeader':
        state.fixedHeader = value
        break
      case 'showSettings':
        state.showSettings = value
        break
      case 'showSidebarLogo':
        state.showSidebarLogo = value
        break
      case 'showTagsView':
        state.showTagsView = value
        break
      case 'sidebarTextTheme':
        state.sidebarTextTheme = value
        break
      default:
        break
    }
  }
}
