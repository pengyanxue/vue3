/*
 * @Description: settings state
 * @Date: 2020-12-23 10:25:37
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-04-26 22:53:51
 */

// import elementVariables from '@/styles/element-variables.scss'
import layoutSettings from '@/config/default/layout'

export const state = {
  // theme: elementVariables.theme,
  fixedHeader: layoutSettings.fixedHeader,
  showSettings: layoutSettings.showSettings,
  showTagsView: layoutSettings.showTagsView,
  showSidebarLogo: layoutSettings.showSidebarLogo,
  sidebarTextTheme: layoutSettings.sidebarTextTheme
}
