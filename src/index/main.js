/*
 * @Author: pengyanxue
 * @Date: 2022-04-25 17:26:05
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-04-27 15:56:19
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from '../router'
import axios from 'axios'
import store from '../store/index'
import i18n from '@/locales'

// 导入mock
// import '../mock'

import '@/styles/index.scss' // global css
import '@/assets/styles/index.scss' // self css
// 导入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './permission'

// import 'ant-design-vue/dist/antd.css'
console.log(import.meta.env.VITE_APP_BASE_API)
console.log(import.meta.env.VITE_APP_TITLE)

// console.log(process.env.VUE_APP_BASE_API, 1)

const app = createApp(App)
app.use(router).use(store).use(ElementPlus).use(i18n).mount('#app')
