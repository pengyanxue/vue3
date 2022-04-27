/*
 * @Description: permission moudle
 * @Date: 2020-12-26 13:45:52
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-04-27 11:08:21
 */
import { mutations } from './mutations'
import { actions } from './actions'

import { state } from './state'
export default {
  state,
  mutations,
  actions,
  // TODO: With namespaced option turned on, having problem how to use dispatch with action types...
  // But without it, a bigger store might have clashes in namings
  namespaced: true,
}
