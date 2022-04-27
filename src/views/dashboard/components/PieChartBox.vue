<!--
 * @Author: xiaomin
 * @Date: 2021-01-28 10:44:38
 * @LastEditTime: 2021-09-29 14:22:55
 * @LastEditors: Rukawa
-->
<template>
  <div class="pie-box">
    <div class="pie-panel">
      <div v-for="(item, index) in chartData.xData" :key="index" class="panel-item">
        <p class="item-title" v-text="item.name" />
        <p class="item-num" v-text="item.value" />
      </div>
    </div>
    <div :id="chartId" class="chart-box" style="width: 100%;height: 190px;" />
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  props: {
    chartData: {
      type: Object,
      default: () => { }
    }
  },

  data() {
    return {
      chartId: Math.random().toString(36).substr(2),
      myChart: null,
      pieOptions: {
        grid: {
          containLabel: true
        },
        title: {
          zlevel: 0,
          top: '37%',
          left: '49%',
          textAlign: 'center',
          textStyle: {
            rich: {
              value: {
                color: '#333',
                fontSize: 24,
                lineHeight: 24,
                fontWeight: 'bold'
              },
              name: {
                color: '#999',
                fontSize: 14,
                lineHeight: 35
              }
            }
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        series: [{
          type: 'pie',
          // startAngle: 180,
          radius: ['45%', '65%'],
          center: ['50%', '55%'],
          itemStyle: {
            normal: {
              borderWidth: 2
            }
          },
          labelLine: {
            normal: {
              length2: 50,
              lineStyle: {
                color: '#ccc'
              }
            }
          },
          label: {
            normal: {
              formatter: params => {
                return '{icon|●} {name|' + params.name + '}'
              },
              padding: [-18, -55, 0, -55],
              alignTo: 'labelLine',
              rich: {
                icon: {
                  fontSize: 18
                },
                name: {
                  fontSize: 12,
                  color: '#333'
                }
              }
            }
          }
        }]
      }
    }
  },

  watch: {
    chartData: {
      deep: true,
      handler: function() {
        this.init()
        window.addEventListener('resize', this.resizeHandler)
      }
    }
  },

  beforeDestroy() {
    if (this.myChart) {
      window.removeEventListener('resize', this.resizeHandler)
      this.myChart.dispose()
    }
  },

  methods: {
    init() {
      this.$nextTick(() => {
        const chartParams = Object.assign({}, this.pieOptions, {
          color: this.chartData.color
        })
        chartParams.title.text = this.chartData.title
        chartParams.series[0].name = this.chartData.name
        chartParams.series[0].data = this.chartData.xData

        this.myChart = echarts.init(document.getElementById(this.chartId))
        this.myChart.setOption(chartParams, true)
      })
    },

    resizeHandler() {
      this.myChart && this.myChart.resize()
    }
  }
}
</script>

<style lang="scss" scoped>
.pie-box {
  .pie-panel {
    display: flex;
    justify-content: flex-start;
    background: #206AF1;
    border-radius: 4px;
    margin-top: 20px;
    margin-bottom: 15px;
    overflow: hidden;

    .panel-item {
      width: 50%;
      padding: 12px 20px;
      box-sizing: border-box;

      &:first-of-type {
        border-right: solid 1px rgba(255, 255, 255, .2);
      }

      .item-title {
        font-size: 14px;
        line-height: 20px;
        color: #fff;
        margin-bottom: 9px;
      }
      .item-num {
        font-size: 28px;
        line-height: 32px;
        color: #FFFFFF;
        text-align: center;
      }
    }
  }

  .chart-box {
    background-color: #F7FAFF;
  }
}
</style>
