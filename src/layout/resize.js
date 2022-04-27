/*
 * @Description: 根绝大小变化重新布局
 * @Author: ZY
 * @Date: 2020-12-17 15:37:56
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-04-27 16:35:38
 */
import store from '@/store'
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
const WIDTH = 992 // refer to Bootstrap's responsive design

export default function() {
  const device = computed(() => {
    return store.state.app.device
  })

  const sidebar = computed(() => {
    return store.state.app.sidebar
  })
  const currentRoute = useRoute()
  const watchRouter = watch(() => currentRoute.name, () => {
    if (store.state.app.device === 'Mobile' && store.state.app.sidebar.opened) {
      store.dispatch('ACTION_CLOSE_SIDEBAR', false)
    }
  })

  const isMobile = () => {
    const rect = document.body.getBoundingClientRect()
    return rect.width - 1 < WIDTH
  }

  const resizeMounted = () => {
    if (isMobile()) {
      store.dispatch('ACTION_TOGGLE_DEVICE', 'Mobile')
      store.dispatch('ACTION_CLOSE_SIDEBAR', true)
    }
  }

  const resizeHandler = () => {
    if (!document.hidden) {
      store.dispatch('ACTION_TOGGLE_DEVICE', isMobile() ? 'Mobile' : 'Desktop')
      if (isMobile()) {
        store.dispatch('ACTION_CLOSE_SIDEBAR', true)
      }
    }
  }
  const addEventListenerOnResize = () => {
    window.addEventListener('resize', resizeHandler)
  }

  const removeEventListenerResize = () => {
    window.removeEventListener('resize', resizeHandler)
  }

  return {
    device,
    sidebar,
    resizeMounted,
    addEventListenerOnResize,
    removeEventListenerResize,
  watchRouter}
}
