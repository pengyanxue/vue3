/*
 * @Author: pengyanxue
 * @Date: 2022-04-25 17:06:35
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-04-25 17:42:14
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        app: resolve(__dirname, 'app.html')
      }
    }
  }
})
