/*
 * @Author: pengyanxue
 * @Date: 2022-04-25 17:26:05
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-04-25 17:54:52
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from '../router'
import store from '../store'

createApp(App).use(router).use(store).mount('#app')
