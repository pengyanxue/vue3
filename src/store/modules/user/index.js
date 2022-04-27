/*
 * @Description: setting moudle
 * @Author: ZY
 * @Date: 2020-12-23 10:25:37
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-04-27 10:47:43
 */
import { state } from './state'
import { mutations } from './mutations'
import { actions } from './actions'


export default {
  state,
  mutations,
  actions,
  // TODO: With namespaced option turned on, having problem how to use dispatch with action types...
  // But without it, a bigger store might have clashes in namings
  namespaced: true,
}
