/*
 * @Author: pengyanxue
 * @Date: 2022-04-26 23:11:47
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-04-26 23:56:15
 */
// Mock.mock('拦截路径',{"list|30":[{数据实例}]})

/**
 * Mock配置文件
 **/
// 首先引入Mock
// const Mock = require('mockjs')

// // 设置拦截ajax请求的相应时间
// Mock.setup({
//   timeout: '200-600'
// })

// let configArray = []

// // 使用webpack的require.context()遍历所有Mock文件
// const files = require.context('.', true, /\.js$/)
// files.keys().forEach((key) => {
//   if (key === './index.js') return
//   configArray = configArray.concat(files(key).default)
// })

// // 注册所有的Mock服务
// configArray.forEach((item) => {
//   for (let [path, target] of Object.entries(item)) {
//     let protocol = path.split('|')
//     Mock.mock(new RegExp('^' + protocol[1]), protocol[0], target)
//   }
// })

/******************
 * 基础 - 登录 - mock
 *****************/

// // 登录
// let Login = {
//   'code': 0,
//   'msg': 'success',
//   'data': {}
// }

// export default {

//   /**
//    * 基础 - 登录
//    * @param： {}    
//    * @returns：Promise {<pending>}
//    **/
//   'post|login': option => {
//     return Login
//   }
// }



// 引入Mock文件，由于 Vite 不支持require()方法所以改用import
import * as Mock from 'mockjs'
// 模拟返回的数据格式，可以自己随便定义
const result = {
    status: 200,
    reset: '0',
    message: 'success',
    data: {
        'list|1-10': [{
            'id': '@guid',
            'name': '@cname',
            'age|20-40': 20,
        }]
    }
}
// 用mock拦截对应的请求地址，并发送返回数据对象（这里以正则来匹配带有api/的请求地址）
const responseData = Mock.mock(/api\//, 'get', result)
// 导出返回对象，可以导出多个对象
export default responseData

