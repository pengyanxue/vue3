/*
 * @Description: app actions
 * @Author: ZY
 * @Date: 2020-12-23 10:25:37
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-04-27 16:34:11
 */
import { useStore } from 'vuex'
import { state } from './state'
// import { loginRequest, userInfoRequest } from '@/apis/user'
import { removeToken, setToken } from '@/utils/cookies'
import router from '@/router'

export const actions = {
  ACTION_LOGIN({ commit },userInfo, token) {
    let { username, password } = userInfo
    username = username.trim()
    setToken(token)
    commit('SET_TOKEN', token)
    commit('SET_NAME', username)
    // await loginRequest({ username, password }).then(async(res) => {
    //   if (res?.code === 0 && res.data.accessToken) {
    //     setToken(res.data.accessToken)
    //     commit('SET_TOKEN', res.data.accessToken)
    //   }
    // }).catch((err) => {
    //   console.log(err)
    // })
  },

  ACTION_RESET_TOKEN({ commit }) {
    removeToken()
    commit('SET_TOKEN', '')
    commit('SET_ROLES', [])
  },

  async ACTION_GET_USER_INFO({ commit }) {
    if (state.token === '') {
      throw Error('token is undefined!')
    }
    await userInfoRequest().then((res) => {
      if (res.code === 0) {
        commit('SET_ROLES', res.data.roles)
        commit('SET_NAME', res.data.name)
        commit('SET_AVATAR', res.data.avatar)
        commit('SET_INTRODUCTION', res.data.introduction)
        commit('SET_EMAIL', res.data.email)
        return res
      } else {
        throw Error('Verification failed, please Login again.')
      }
    })
  },

  async ACTION_CHANGE_ROLES({ commit },role) {
    const token = role + '-token'
    const store = useStore()
    commit('SET_TOKEN', token)
    setToken(token)
    await store.dispatch('ACTION_GET_USER_INFO', undefined)
    // store.dispatch('ACTION_SET_ROUTES', state.roles)
    // store.state.permission.dynamicRoutes.forEach((item) => {
    //   router.addRoute(item)
    // })
  },

  ACTION_LOGIN_OUT({ commit }) {
    console.log(commit)
    removeToken()
    commit('SET_TOKEN', '')
    commit('SET_ROLES', [])
    resetRouter()
  }
}
