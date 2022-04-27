/*
 * @Author: pengyanxue
 * @Date: 2021-04-29 11:48:58
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-04-27 01:49:26
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/Index.vue'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Login from '@/views/common/login/index.vue'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  // { path: '/', component: Login },
  { path: '/about', component: About },
  { path: '/home', component: Home },
  {
    path: '/login',
    component: Login,
    hidden: true,
    meta: {
      hidden: true
    }
  },
  {
  path: '/',
  component: Layout,
  redirect: 'dashboard',
  children: [
    {
      name: 'dashboard',
      path: '/dashboard',
      hidden: true,
      component: () => import('@/views/dashboard/ApplicationDashboard.vue'), // 应用2.0首页
      meta: { title: '首页', icon: 'dashboard', affix: true }
    },
    // // 独立应用首页
    // {
    //   name: 'appDashboard',
    //   path: '/appDashboard',
    //   hidden: true,
    //   component: () => import('@/views/dashboard/SubAppDashboard.vue'),
    //   meta: { title: '首页', icon: 'dashboard', affix: true, keepAlive: true, }
    // }
  ]
},
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   children: [
  //     {
  //       path: 'dashboard',
  //       component: () => import(/* webpackChunkName: "dashboard" */ '@/views/homePage/homePage.vue'),
  //       name: 'Dashboard',
  //       meta: {
  //         title: 'dashboard',
  //         icon: '#icondashboard',
  //         affix: true
  //       }
  //     }
  //   ]
  // },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router
