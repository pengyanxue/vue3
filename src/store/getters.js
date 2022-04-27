/*
 * @Author: pengyanxue
 * @Date: 2022-04-27 16:12:04
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-04-27 16:18:31
 */
/*
 * @Author: pengyanxue
 * @Date: 2021-06-16 14:09:46
 * @LastEditors: pengyanxue
 * @LastEditTime: 2021-07-05 15:01:30
 */
const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  // userId: state => state.user.userId,
  // realName: state => state.user.realName,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  theme: state => state.settings.theme,
  // apply: state => state.app.apply,
  // is4aLogin: state => state.app.is4aLogin
}
export default getters
