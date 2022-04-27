<!--
 * @Author: pengyanxue
 * @Date: 2022-04-26 22:59:37
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-04-27 01:45:02
-->
<!--
 * @Author: xiaomin
 * @Date: 2021-01-28 10:37:25
 * @LastEditTime: 2022-02-08 17:45:06
 * @LastEditors: xiaominhuang
-->
<template>
  <div class="application-dashboard base-box">
    <el-row class="top" :gutter="20">
      <el-col :span="6">
        <div class="dashboard-box">
          <p class="item-title">全部应用</p>
          <pie-chart-box />
        </div>
        </el-col>
    
    </el-row>
  </div>
</template>

<script>
import PieChartBox from './components/PieChartBox.vue'
import LineChartBox from './components/LineChartBox.vue'
import { userInfo, getLincense } from '@/api/user.js'
export default {
  created() {
    this.getUser()
    this.getLincense()
  },
  methods: {
    getUser() {
      userInfo().then(res => {
        debugger
      })
    },
    getLincense() {
      getLincense().then(res => {
        debugger
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.application-dashboard {
  .top {
    margin-bottom: 20px;
  }

  .item-title {
    font-size: 16px;
    font-weight: bold;
    font-family: PingFangSC-Medium;
    color: #333;
  }

  .dashboard-box {
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 0 6px 0 rgba(0,0,0,0.05);
    background: #fff;
    border-radius: 4px;

    .title-box {
      display: flex;
      justify-content: space-between;

      p {
        width: 50%;
      }
      .tr {
        font-size: 14px;
        text-align: right;
        padding-right: 10px;
        box-sizing: border-box;
      }
    }
  }

  .time-line-wrapper {
    height: 300px;
    padding: 10px 0 0 5px;
    margin-top: 15px;
    box-sizing: border-box;
    overflow-y: auto;

    .timeline-item-body>>> {
      padding-right: 10px;
      .msg-date {
        font-size: 15px;
        font-weight: bold;
        color: #333;
        margin-bottom: 10px;
      }
      .msg-content {
        font-size: 14px;
        line-height: 22px;
        color: #666;
        padding-right: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }

    .no-data {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #909399;
    }
  }

  .log-table {
    border-radius: 6px;
    max-height: 285px;
    overflow-y: auto;
  }
}
</style>
