<!--
 * @Author: pengyanxue
 * @Date: 2021-06-16 14:09:46
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-04-27 15:41:00
-->
<template>
  <!-- <p>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </p> -->
  <!-- <p><button @click="toApp">toApp</button></p>
  <div>{{ count }}</div>
  <div @click="change">触发更新</div> -->
  <router-view></router-view>
</template>

<script>
import { ref, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
export default defineComponent({
  name: 'Home',
  setup:() => {
    function toApp() {
      window.open('/app.html')
    }
    const store = useStore()
    console.log('store',store.state.count)
    const change = () => {
      console.log('触发更新')
      store.commit('increment')
    }
    return { 
      toApp,
      // 在 computed 函数中访问 state
      count: computed(() => store.state.count),
      change
     }
  }
})
</script>

