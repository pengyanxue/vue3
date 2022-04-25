<!--
 * @Author: pengyanxue
 * @Date: 2021-06-16 14:09:46
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-04-25 17:53:50
-->
<template>
  <p>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </p>
  <p><button @click="toApp">toApp</button></p>
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
    return { toApp }
  }
})
</script>

