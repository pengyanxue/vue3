/*
 * @Author: pengyanxue
 * @Date: 2022-04-26 23:41:06
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-04-26 23:41:07
 */
import Mock from 'mockjs' // 引入mockjs
import nationality from './common/nationality'
import education from './common/education'

// 扩展mockjs
Mock.Random.extend({
  departmentName: function () {
    let temp = ['企业信息服务部', '研发部', '创新能源', '大数据中心', '办公室', '人力资源']
    return this.pick(temp)
  },
  organizationName: function () {
    let temp = ['sea软件', '东方维斯顿']
    return this.pick(temp)
  },
  phone: function () {
    let phonePrefixs = ['134', '159', '152'] // 自定义前缀
    return this.pick(phonePrefixs) + Mock.mock(/\d{8}/)
  },
  folk: function () {
    let temp = nationality.data.map(item => item.name)
    return this.pick(temp)
  },
  education: function () {
    let temp = education.data.map(item => item.name)
    return this.pick(temp)
  }
})

let data = Mock.mock({
  'data|10': [{
    userId: '@id',
    userName: '@cname()', // 随机生成一个中文名字
    'age|18-35': 18,
    departmentName: '@departmentName',
    organizationName: '@organizationName',
    nativePlace: '@county(true)',
    folk: '@folk',
    education: '@education',
    phone: '@phone'
  }]
})

Mock.mock('/member/list', 'get', data) // 根据数据模板生成模拟数据
