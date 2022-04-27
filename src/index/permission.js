/*
 * @Author: pengyanxue
 * @Date: 2022-04-27 11:43:48
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-04-27 16:36:13
 */

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// import { useI18n } from 'vue-i18n'
import router from '@/router'
import store from '@/store'
import { getToken } from '@/utils/cookies'

import { ElMessage } from 'element-plus'
import whiteList from '../config/default/whitelist'
// import settings from '@/config/default/setting.config'
NProgress.configure({ showSpinner: false })

// const getPageTitle = (key: string) => {
//   const i18n = useI18n()
//   const title = settings.title
//   const hasKey = i18n.te(`route.${key}`)
//   if (hasKey) {
//     const pageName = i18n.t(`route.${key}`)
//     return `${pageName} - ${title}`
//   }
//   return `${title}`
// }

router.beforeEach(async(to, _, next) => {
  // Start progress bar
  NProgress.start()
  // const store = useStore()
  // Determine whether the user has logged in
  if (getToken()) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
        next({ path: '/dashboard' })
        NProgress.done()
      } else if (to.path === '/') {
        next({ path: '/dashboard' })
        NProgress.done()
      } else {
        next()
      }
  } else {
    // Has no token
    if (whiteList.indexOf(to.path) !== -1) {
      // In the free login whitelist, go directly
      next()
    } else {
      // Other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach((to) => {
  console.log(to)
  // Finish progress bar
  // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
  NProgress.done()

  // set page title
  // document.title = getPageTitle(to.meta.title)
})
