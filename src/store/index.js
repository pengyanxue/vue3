/*
 * @Author: pengyanxue
 * @Date: 2022-04-25 17:53:03
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-04-25 17:53:03
 */
import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})
export { store }
