<!--
 * @Author: pengyanxue
 * @Date: 2022-04-26 13:48:40
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-04-27 15:49:45
-->
<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { useStore }   from 'vuex'
import { computed, defineComponent, onBeforeMount, ref } from 'vue'
import AdminDashboard from './admin/Index.vue'
import EditorDashboard from './editor/Index.vue'
export default defineComponent({
  components: {
    AdminDashboard,
    EditorDashboard
  },
  setup() {
    const store = useStore()
    const currentRole = ref('admin-dashboard')
    const roles = computed(() => {
      return store.state.user.roles
    })
    onBeforeMount(() => {
      if (!roles.value.includes('admin')) {
        currentRole.value = 'editor-dashboard'
      }
    })

    return {
      currentRole
    }
  }
})
</script>
<!--
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-21 13:50:19
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-18 14:30:45
-->
<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useStore }   from 'vuex'
import { computed, defineComponent, onBeforeMount, ref } from 'vue'
import AdminDashboard from './admin/Index.vue'
import EditorDashboard from './editor/Index.vue'
export default defineComponent({
  components: {
    AdminDashboard,
    EditorDashboard
  },
  setup() {
    const store = useStore()
    const currentRole = ref('admin-dashboard')
    const roles = computed(() => {
      return store.state.user.roles
    })
    onBeforeMount(() => {
      if (!roles.value.includes('admin')) {
        currentRole.value = 'editor-dashboard'
      }
    })

    return {
      currentRole
    }
  }
})
</script>
