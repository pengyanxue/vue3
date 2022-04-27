// import { login, logout, logoutLog, getInfo } from '@/api/user'
// // import { getToken, setToken, removeToken } from '@/utils/auth'
// // import { resetRouter } from '@/router/'

// const getDefaultState = () => {
//   return {
//     // token: getToken(),
//     userId: '',
//     realName: '',
//     userName: '',
//     avatar: ''
//   }
// }

// const state = getDefaultState()

// const mutations = {
//   RESET_STATE: (state) => {
//     Object.assign(state, getDefaultState())
//   },
//   SET_USER_ID: (state, uid) => {
//     state.userId = uid
//   },
//   SET_TOKEN: (state, token) => {
//     // state.token = token
//   },
//   SET_USER_NAME: (state, name) => {
//     state.userName = name
//   },
//   SET_REAL_NAME: (state, name) => {
//     state.realName = name
//   },
//   SET_AVATAR: (state, avatar) => {
//     state.avatar = avatar
//   }
// }

// const actions = {
//   // user login
//   login({ commit }, userInfo) {
//     const { username, password } = userInfo
//     return new Promise((resolve, reject) => {
//       login({ username: username.trim(), password: password }).then(response => {
//         const { data } = response
//         // commit('SET_TOKEN', data.token)
//         // setToken(data.token)
//         resolve()
//       }).catch(error => {
//         reject(error)
//       })
//     })
//   },

//   // get user info
//   getInfo({ commit, state }) {
//     return new Promise((resolve, reject) => {
//       getInfo(state.token).then(response => {
//         const { data } = response

//         if (!data) {
//           reject('Verification failed, please Login again.')
//         }

//         const { name, avatar } = data

//         commit('SET_NAME', name)
//         commit('SET_AVATAR', avatar)
//         resolve(data)
//       }).catch(error => {
//         reject(error)
//       })
//     })
//   },

//   logoutLog({ commit, state }) {
//     return logoutLog(localStorage.loginUserAccount)
//   },

//   // user logout
//   logout({ commit, state }) {
//     return logout(state.token).then(res => {
//       // removeToken() // must remove  token  first
//       // resetRouter()
//       commit('RESET_STATE')

//       return res.message
//     })
//   },

//   // remove token
//   resetToken({ commit }) {
//     return new Promise(resolve => {
//       // removeToken() // must remove  token  first
//       // resetRouter()
//       commit('RESET_STATE')
//       resolve()
//     })
//   }
// }

export default {
  namespaced: true,
  // state,
  // mutations,
  // actions
}

