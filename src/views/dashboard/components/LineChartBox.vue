<!--
 * @Author: xiaomin
 * @Date: 2021-01-28 13:54:35
 * @LastEditTime: 2021-02-18 11:09:10
 * @LastEditors: xiaominhuang
-->
<template>
  <div id="lineChart" style="width: 100%;height: 310px;" />
</template>

<script>
import * as echarts from 'echarts'
import { getFrontUserAmount } from '@/api/apply2.0/dashboard/applicationDashboard'

export default {
  data() {
    return {
      lineChart: null,
      lineOptions: {
        grid: {
          left: '2.5%',
          right: '1%',
          bottom: '2%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: []
        },
        yAxis: {
          name: '单位（人）',
          nameTextStyle: {
            fontSize: 14,
            marginBottom: 10
          },
          type: 'value'
        },
        series: [
          {
            name: '新增用户',
            stack: '总量',
            data: [],
            type: 'line',
            smooth: true,
            symbolSize: 3,
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0, color: '#81befd' // 0% 处的颜色
                },
                {
                  offset: 0.4, color: '#e4f2ff' // 100% 处的颜色
                },
                {
                  offset: 1, color: '#fff' // 100% 处的颜色
                }])
              }
            },
            color: '#6699ff',
            lineStyle: {
              normal: {
                width: 2,
                color: '#6699ff'
              }
            },
            itemStyle: {
              normal: {
                borderColor: '#fff'
              },
              emphasis: {
                color: '#6699ff',
                borderColor: '#fff',
                borderWidth: 3
              }
            }
          }
        ]
      }
    }
  },

  beforeDestroy() {
    if (this.lineChart) {
      window.removeEventListener('resize', this.resizeHandler)
      this.lineChart.dispose()
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.initChart()
      window.addEventListener('resize', this.resizeHandler)
    })
  },

  methods: {
    initChart() {
      const xData = []
      const yData = []
      getFrontUserAmount().then(res => {
        if (res.bodyContent) {
          for (const i in res.bodyContent) {
            xData.push(i)
            yData.push(res.bodyContent[i])
          }
          this.lineOptions.xAxis.data = xData
          this.lineOptions.series[0].data = yData

          this.lineChart = echarts.init(document.getElementById('lineChart'))
          this.lineChart.setOption(this.lineOptions, true)
        }
      })
    },

    resizeHandler() {
      this.lineChart && this.lineChart.resize()
    }
  }
}
</script>
