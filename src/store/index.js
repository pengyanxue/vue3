/*
 * @Author: pengyanxue
 * @Date: 2022-04-25 17:53:03
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-04-27 16:12:23
 */
// import { createStore } from 'vuex'

// // 创建一个新的 store 实例
// const store = createStore({
//   state() {
//     return {
//       count: 0
//     }
//   },
//   mutations: {
//     increment(state) {
//       state.count++
//     }
//   }
// })
// export { store }

import { createStore, createLogger } from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
import app from '@/store/modules/app/index'
import settings from '@/store/modules/settings'
import permission from '@/store/modules/permission'
import user from '@/store/modules/user'
import tagViews from '@/store/modules/tagsview'

import getters from './getters'

// export interface RootState {
//     app: AppState
//     settings: SettingsState
//     permission: PermissionState
//     user: UserState
//     tagViews: TagsViewState
// }

// export type Store = AppStore<Pick<RootState, 'app'>> & SettingStore<Pick<RootState, 'settings'>>
// & PermissionStore<Pick<RootState, 'permission'>> & UserStore<Pick<RootState, 'user'>>
// & TagsStore<Pick<RootState, 'tagViews'>>

// Plug in logger when in development environment
const debug = process.env.NODE_ENV !== 'production'
const plugins = debug ? [createLogger({})] : []
// Plug in session storage based persistence
// plugins.push(createPersistedState({ storage: window.sessionStorage }))

const store = createStore({
  // plugins,
  debug: true,
  modules: {
    app,
    settings,
    permission,
    user,
    tagViews
  },
  getters
})

export default store
// export function useStore () {
//   return store
// }
