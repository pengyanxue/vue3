/*
 * @Description: app Mutations
 * @Author: ZY
 * @Date: 2020-12-23 10:25:37
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-04-27 15:07:13
 */

export const mutations = {
  SET_TOKEN(state, token) {
    debugger
    state.token = token
  },

  SET_NAME(state, name) {
    state.name = name
  },

  SET_AVATAR(state, avatar) {
    state.avatar = avatar
  },

  SET_INTRODUCTION(state, introduction) {
    state.introduction = introduction
  },

  SET_ROLES(state, roles) {
    state.roles = roles
  },

  SET_EMAIL(state, email) {
    state.email = email
  }

}
