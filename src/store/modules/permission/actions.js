/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-25 15:03:52
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-04-27 11:07:31
 */
const hasPermission = (roles, route) => {
  if (route.meta && route.meta.roles) {
    return roles.some(role => {
      if (route.meta.roles !== undefined) {
        return route.meta.roles.includes(role)
      }
    })
  } else {
    return true
  }
}

export const filterAsyncRoutes = (routes, roles) => {
  const res = []
  routes.forEach(route => {
    const r = { ...route }
    if (hasPermission(roles, r)) {
      if (r.children) {
        r.children = filterAsyncRoutes(r.children, roles)
      }
      res.push(r)
    }
  })
  return res
}
export const actions = {
  ACTION_SET_ROUTES({ commit }, roles) {
    let accessedRoutes
    if (roles.includes('admin')) {
      accessedRoutes = asyncRoutes
    } else {
      accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
    }
    commit('SET_ROUTES', accessedRoutes)
  }
}
