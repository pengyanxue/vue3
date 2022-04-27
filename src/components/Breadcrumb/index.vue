<!--
 * @Author: xiaomin
 * @Date: 2020-10-28 13:43:36
 * @LastEditTime: 2021-03-19 15:23:47
 * @LastEditors: xiaominhuang
-->
<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
        <a v-if="index === 0" @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
        <span v-else class="no-redirect" :title="item.meta.title">{{ item.meta.title }}</span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import pathToRegexp from 'path-to-regexp'

export default {
  data() {
    return {
      levelList: null
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
      // only show routes with meta.title
      let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      const first = matched[0]
      const isApp = window.location.href.indexOf('app.html?appId=') > -1

      if (!this.isDashboard(first)) {
        if (!isApp) {
          matched = [{ path: '/dashboard', meta: { title: '首页' }}].concat(matched)
        } else {
          matched = [{ path: '/appDashboard', meta: { title: '首页' }}].concat(matched)
        }
      }

      this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
    },
    isDashboard(route) {
      const name = route && route.name
      if (!name) {
        return false
      }
      const isApp = window.location.href.indexOf('app.html?appId=') > -1

      if (!isApp) {
        return name.trim().toLocaleLowerCase() === 'dashboard'.toLocaleLowerCase()
      } else {
        return name.trim() === 'appDashboard'
      }
    },
    pathCompile(path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route
      var toPath = pathToRegexp.compile(path)
      return toPath(params)
    },
    handleLink(item) {
      const { params } = this.$route
      const { redirect, path } = item
      var toPath = pathToRegexp.compile(path)
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(toPath(params))
    }
  }
}
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb>>> {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .el-breadcrumb__item {
    .el-breadcrumb__inner {
      max-width: 300px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: inline-block;
      vertical-align: middle;
    }
  }

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
