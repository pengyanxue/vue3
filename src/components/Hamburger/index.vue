<!--
 * @Description: 折叠边栏按钮
 * @Author: ZY
 * @Date: 2020-12-23 16:25:41
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-04-27 11:35:50
-->

<template>
  <div
    :class="[{'is-active': isActive}]"
    @click="toggleClick"
  >
    <svg
      class="icon"
      aria-hidden="true"
      font-size="20px"
    >
      <use xlink:href="#iconhamburger" />
    </svg>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  emits: ['toggle-click'],
  setup(_, context) {
    const toggleClick = () => {
      context.emit('toggle-click')
    }
    return {
      toggleClick
    }
  }
})
</script>

<style lang="scss" scoped>
.icon {
  vertical-align: middle;
}

.is-active {
  transform: rotate(180deg);
}
</style>
