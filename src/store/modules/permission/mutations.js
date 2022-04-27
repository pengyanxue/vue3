/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-25 14:28:12
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-04-27 10:54:56
 */

export const mutations = {
  SET_ROUTES(state, routes) {
    // state.routes = constantRoutes.concat(routes)
    state.dynamicRoutes = routes
  }

}
