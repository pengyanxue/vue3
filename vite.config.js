/*
 * @Author: pengyanxue
 * @Date: 2022-04-25 17:06:35
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-04-27 10:06:35
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
const path = require('path')

import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueSetupExtend(),
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()]
    // }),
    visualizer({
      open: true, // 注意这里要设置为true，否则无效
      gzipSize: true,
      brotliSize: true
    })
  ],
  server: {
    port: 8000, // vite项目启动时自定义端口
    hmr: true, // 开启热更新
    open: true, // vite项目启动时自动打开浏览器
    proxy: {
      '/mockapi': {
        target: 'http://127.0.0.1:4523/mock/916527', // 代理的地址
        changeOrigin: true
      },
      // '/getLicenseDate': {
      //   target: 'http://127.0.0.1:4523/mock/916527', // 代理的地址
      //   changeOrigin: true
      // }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@c': resolve(__dirname, 'src/components'),
      '@v': resolve(__dirname, 'src/views'),
      '/img': 'src/assets/images'
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: [
        path.resolve(__dirname, 'src/styles/index.scss'),
        path.resolve(__dirname, 'src/assets/styles/index.scss'),
        path.resolve(__dirname, 'src/styles/variables.scss')
      ]
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        app: resolve(__dirname, 'app.html')
      },
    // output: {
    //   chunkFileNames: 'static/js/[name]-[hash].js',
    //   entryFileNames: 'static/js/[name]-[hash].js',
    //   assetFileNames: 'static/[ext]/name-[hash].[ext]'
    // }
    }
  }
})
