<template>
  <div class="subs-dashboard-wrapper base-box">
    <custom-loading v-show="pageLoading" :is-show-loading="pageLoading" />
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="top-left top-item" @click="gotoTargetPage('profile')">
          <p class="realname" v-text="`Hi, ${realName}`" />
          <p class="account" v-text="accountName" />
        </div>
      </el-col>
      <el-col :span="4">
        <div class="top-item right-item org" style="cursor:auto" @click="gotoTargetPage('todolist')">
          <img src="@/assets/images/daiban.png" alt="daiban">
          <div class="item-content">
            <p class="num" v-text="todoItemAmount" />
            <p class="text">我的待办</p>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="top-item right-item blue" @click="gotoTargetPage('msg')">
          <img src="@/assets/images/systemImssage.png" alt="systemImssage">
          <div class="item-content">
            <p class="num" v-text="sysMsgAmount" />
            <p class="text">系统消息</p>
          </div>
        </div>
      </el-col>
    </el-row>

    <div class="entry-panel base-bg">
      <p class="title">快捷入口</p>
      <div class="panel-content">
        <span
          v-for="(item, index) in subSysShotcuts"
          :key="index"
          class="item"
          @click="gotoSubsystem(item.id)"
          v-text="item.subsystemName"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getDealwithData, getUserSubSystemData } from '@/api/apply2.0/dashboard/applicationDashboard'
import { postForm } from '@/api/common'
import { getAppAllApi, getImage } from '@/api/apply2.0/app/app'
import lockr from 'lockr'

export default {
  data() {
    return {
      pageLoading: false,
      realName: '',
      accountName: '',
      todoItemAmount: 0,
      sysMsgAmount: 0,
      subSysShotcuts: []
    }
  },

  computed: {
    allSubSystems: function() {
      return this.$store.state.app.apply.sys
    }
  },

  watch: {
    allSubSystems: {
      deep: true,
      handler: function(newVal) {
        if (newVal) {
          this.getUserSubSysInfo()
        }
      }
    }
  },
  activated() {
    this.pageLoading = true
    if (this.$appId) {
      getAppAllApi(this.$appId).then(resp => {
        this.pageLoading = false
        if (resp.status === 1) {
          lockr.set(this.$appId, resp.data)
          this.$store.commit('app/apply', resp.data)
          this.changeDucumentInfo(resp.data)
        }
      }).catch()
    }
    this.realName = localStorage.getItem('loginUserName')
    this.accountName = localStorage.getItem('loginUserAccount')
    if (/^admin_.*/.test(this.accountName)) {
      this.accountName = this.accountName.substring(this.accountName.indexOf('admin_') + 6)
    }
    this.getTodoItems()
    this.getSysMsg()
  },
  created() {
    this.pageLoading = true
    if (this.$appId) {
      getAppAllApi(this.$appId).then(resp => {
        this.pageLoading = false
        if (resp.status === 1) {
          lockr.set(this.$appId, resp.data)
          this.$store.commit('app/apply', resp.data)
          this.changeDucumentInfo(resp.data)
        }
      }).catch()
    }
    this.realName = localStorage.getItem('loginUserName')
    this.accountName = localStorage.getItem('loginUserAccount')
    if (/^admin_.*/.test(this.accountName)) {
      this.accountName = this.accountName.substring(this.accountName.indexOf('admin_') + 6)
    }

    this.getTodoItems()
    this.getSysMsg()
  },

  methods: {
    changeDucumentInfo(params) {
      document.title = params.appName
      const favicon = document.querySelector('link[rel="icon"]')
      if (favicon) {
        if (params.smallUrl) {
          getImage(params.smallUrl).then(data => {
            if (data) {
              favicon.href = window.URL.createObjectURL(data)
            }
          })
        }
      }
    },
    // 获取该用户可见子系统
    getUserSubSysInfo() {
      this.pageLoading = true
      getUserSubSystemData({ appId: this.$appId }).then(res => {
        this.pageLoading = false
        if (res.status === 1) {
          const data = res.data || []
          this.subSysShotcuts = this.allSubSystems.filter(item => data.indexOf(item.id) > -1)
        }
      })
    },

    // 获取个人待办
    getTodoItems() {
      getDealwithData({ appId: this.$appId }).then(res => {
        if (res.data && res.data.code === 1) {
          this.todoItemAmount = res.data.count
        }
      })
    },

    // 获取未读系统消息
    getSysMsg() {
      const param = {
        page: 1,
        size: 10,
        msgState: 0, // 未读消息,
        appId: this.$appId
      }
      postForm('/admin/social-message/persSysMsg/search', param).then(rsp => {
        if (rsp.status === 1 && rsp.data) {
          this.sysMsgAmount = rsp.data.total
        }
      })
    },

    addShortcut() {
      console.log(this.$store.state.app.apply.sys)
      this.subSysShotcuts = this.$store.state.app.apply.sys
    },

    gotoSubsystem(sysId) {
      const targetRouter = `/subSysListView/${sysId}?sysid=${sysId}`
      this.$router.push(targetRouter)
    },

    gotoTargetPage(type) {
      if (type === 'profile') {
        this.$router.push('/userinfo/profile')
      } /* else if (type === 'todolist') {
        this.$router.push('/workbench/dealwith')
      } */ else if (type === 'msg') {
        this.$router.push('/systemMsg/systemMsgMng')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.subs-dashboard-wrapper {
  .top-item {
    background-color: #fff;
    box-shadow: 0 0 6px 0 rgba(0,0,0,0.10);
    border-radius: 4px;
    height: 150px;
    box-sizing: border-box;
    overflow: hidden;
    &:hover {
      cursor: pointer;
    }
  }

  .top-left {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 100px;
    background-image: url('../../../assets/images/indexPage.png');
    background-repeat: no-repeat;
    background-position: bottom right;
    box-sizing: border-box;

    .realname {
      font-family: PingFangSC-Regular;
      font-size: 20px;
      color: #333;
      margin-bottom: 10px;
      font-weight: 600;
    }

    .account {
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #999;
    }
  }

  .right-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #fff;
    padding-left: 40px;

    img {
      width: 70px;
      height: 70px;
      margin-right: 25px;
    }

    .num {
      font-family: OPPOSans-B;
      font-size: 36px;
      margin-bottom: 10px;
    }

    .text {
      font-family: PingFangSC-Medium;
      font-size: 16px;
    }
  }
  .org {
    background-color: #FAB800;
  }

  .blue {
    background-color: #1363F4;
  }

  .entry-panel {
    min-height: 340px;
    box-shadow: 0 0 6px 0 rgba(0,0,0,0.10);
    border-radius: 4px;
    margin-top: 20px;
    padding: 30px 40px;
    box-sizing: border-box;

    .title {
      font-family: PingFangSC-Semibold;
      font-size: 20px;
      color: #333;
      margin-bottom: 26px;
      font-weight: 600;
    }

    .panel-content {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;

      .item {
        background: #E5EEFF;
        border-radius: 3px;
        padding: 10px 20px;
        box-sizing: border-box;
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #333;
        margin-right: 30px;
        margin-bottom: 15px;
        line-height: 20px;

        &:hover {
          cursor: pointer;
          background: #206AF1;
          color: #fff;
        }
      }
    }
  }
}
</style>
