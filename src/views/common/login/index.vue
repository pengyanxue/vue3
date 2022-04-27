<template>
  <div class="login-container">
    <div class="login-layout">
      <el-row>
        <el-col class="bogin-layout-left" :span="12">
          <img :src="'/img/login_bg.png'" alt="login">
          <div class="login-logo">
            <img src="/img/login_logo.png" alt="1">
          </div>
          <img
            class="login-position-p1"
            src="/img/login_p1.png"
            alt="1"
          >
          <img
            class="login-position-p2"
            src="/img/login_circle.png"
            alt="2"
          >
        </el-col>

        <el-col class="login-layout-right" :span="12">
          <p class="platfrom-name">欢迎登录应用管理平台</p>

          <el-form
            ref="loginFormRef"
            :model="loginForm"
            class="login-form"
            auto-complete="on"
          >
            <el-form-item prop="username">
              <img src="/img/icon_person.png" alt="user">
              <el-input
                v-model.trim="loginForm.username"
                placeholder="请输入用户名"
                name="username"
                type="text"
                tabindex="1"
                auto-complete="on"
                class="loginUserName"
              />
            </el-form-item>
            <el-form-item prop="password">
              <img
                class="input-icon"
                src="/img/mima.png"
                alt="user"
              >
              <el-input
                v-model.trim="loginForm.password"
                type="password"
                placeholder="请输入密码"
                name="password"
                tabindex="2"
                auto-complete="on"
                @keyup.enter.native="handleLogin"
              />
              <span class="show-pwd">
                <svg-icon
                  :icon-class="'eye'"
                />
              </span>
            </el-form-item>
            <el-form-item prop="captcha">
              <img
                class="input-icon"
                src="/img/yanzhengma.png"
                alt="yanzhengma"
              >
              <el-input
                ref="captcha"
                v-model.trim="loginForm.captcha"
                placeholder="请输入验证码"
                name="captcha"
                type="text"
                tabindex="3"
                style="width: 50% !important;"
              />
              <div style="float: right;">
                <img class="yanzhengma" :src="src" @click="verificationImage">
              </div>
            </el-form-item>

            <el-button
              class="login-button"
              @click.native.prevent="handleLogin"
            >登 录</el-button>
            </el-form>

        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// import { validUsername, validLoginName } from '@/utils/validate'
// import {
//   authenticate,
//   getLincense,
//   inspectionDate,
//   getSystem4aParams
// } from '@/api/user'
import { setToken, getToken } from '@/utils/cookies'
// import { get, post, formPost, postForm } from '@/api/common'
// import { myBrowser } from '@/utils'
import { ref, defineComponent, reactive, onMounted, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore }   from 'vuex'

import { getTokenByUsername, getLoginVerifiCodeImage } from '@/api/login'

export default defineComponent({
  name: 'Login',

  setup() {

    const loginFormRef = ref(null)
    const router = useRouter()
    const store = useStore()
    debugger
    const state = reactive({
      show: true,
      count: '',
      src:`${window.globalConfig.Authentication_Url}/auth-authentication/kaptcha/getLoginVerifiCodeImage`
    })
    const loginForm = reactive({
        username: 'pengyanxue',
        password: '!QAZ2wsx',
        clientId: 'ui-all',
        clientSecret: 'ui-all',
        captcha: '',
        phoneCaptcha: '',
    })

    function handleLogin() {
      debugger
      getTokenByUsername(loginForm).then(rsp => {
        debugger
        if (rsp && rsp.access_token) {
          store.commit('user/SET_TOKEN', rsp.access_token)
          // store.commit('user/SET_NAME', rsp.username)
          // this.$store.commit('user/SET_TOKEN', rsp.access_token) // 注意命名空间
          // this.$store.commit('user/SET_USER_ID', rsp.userId)
          // this.$store.commit('user/SET_USER_NAME', rsp.username)
          // this.$store.commit('user/SET_REAL_NAME', rsp.realName)
          setToken(rsp.token_type + ' ' + rsp.access_token) // 保存cookie
          // localStorage.setItem('loginUserName', rsp.realName)
          // localStorage.setItem('loginUserAccount', rsp.username) 
          router.push({ path: '/'})        
        }
      })
      .catch(() => {
        verificationImage()
      })
    } 

    function verificationImage() {
      state.src = `${window.globalConfig.Authentication_Url}/auth-authentication/kaptcha/getLoginVerifiCodeImage?_v=${Math.random()}`
    }
    onMounted(() => {
      verificationImage()
      console.log(loginForm.username, '111')
    })
    return { loginFormRef, loginForm,...toRefs(state),verificationImage, handleLogin}
  }
  
  // watch: {
  //   $route: {
  //     handler: function(route) {
  //       const query = route.query
  //       if (query) {
  //         this.redirect = query.redirect
  //         this.otherQuery = this.getOtherQuery(query)
  //       }
  //     },
  //     immediate: true
  //   }
  // },

  // mounted() {
  //   window.sessionStorage.clear()
  //   this.adaptive()
  //   // 绑定enter事件
  //   this.enterKeyup()

  //   this.verificationImage()
  // },
  // destroyed() {
  //   // 销毁enter事件
  //   this.enterKeyupDestroyed()
  // },

  // created() {
  //   const that = this
  //   window.fullWidth = document.documentElement.clientWidth
  //   if (window.fullWidth >= 1750) {
  //     that.imageWidth = 77.4
  //   }

  //   if (window.fullWidth < 1750 && window.fullWidth >= 1650) {
  //     that.imageWidth = 77.3
  //   }

  //   if (window.fullWidth < 1650 && window.fullWidth >= 1100) {
  //     that.imageWidth = 77
  //   }

  //   if (window.fullWidth < 1100 && window.fullWidth > 850) {
  //     that.imageWidth = 76.8
  //   }

  //   if (window.fullWidth < 850 && window.fullWidth > 750) {
  //     that.imageWidth = 76.4
  //   }

  //   if (window.fullWidth < 750 && window.fullWidth > 500) {
  //     that.imageWidth = 75.7
  //   }
  // },

  // methods: {
  //   enterKey(event) {
  //     const componentName = this.$options.name
  //     if (componentName == 'Login') {
  //       const code = event.keyCode
  //         ? event.keyCode
  //         : event.which
  //           ? event.which
  //           : event.charCode
  //       if (code == 13) {
  //         if (this.userKey == '请输入用户名') {
  //           this.handleLogin()
  //         } else {
  //           this.phoneLoginNow()
  //         }
  //       }
  //     }
  //   },
  //   enterKeyupDestroyed() {
  //     document.removeEventListener('keyup', this.enterKey)
  //   },
  //   enterKeyup() {
  //     document.addEventListener('keyup', this.enterKey)
  //   },
  //   adaptive() {
  //     const that = this
  //     window.onresize = () => {
  //       return (() => {
  //         window.fullWidth = document.documentElement.clientWidth
  //         if (window.fullWidth >= 1750) {
  //           that.imageWidth = 77.4
  //         }

  //         if (window.fullWidth < 1750 && window.fullWidth >= 1650) {
  //           that.imageWidth = 77.3
  //         }

  //         if (window.fullWidth < 1650 && window.fullWidth >= 1100) {
  //           that.imageWidth = 77
  //         }

  //         if (window.fullWidth < 1100 && window.fullWidth > 850) {
  //           that.imageWidth = 76.8
  //         }

  //         if (window.fullWidth < 850 && window.fullWidth > 750) {
  //           that.imageWidth = 76.4
  //         }

  //         if (window.fullWidth < 750 && window.fullWidth > 500) {
  //           that.imageWidth = 75.7
  //         }
  //       })()
  //     }
  //   },

  //   buildAuthUrl() {
  //     const authBaseUrl = window.globalConfig.Authentication_Url
  //     const tokenEndpoint =
  //       authBaseUrl + `/auth-authentication/oauth/token?grant_type=password`
  //     const paramPart = `&client_id=${this.loginForm.clientId}&client_secret=${
  //       this.loginForm.clientSecret
  //     }&username=${this.loginForm.username}&password=${
  //       this.loginForm.password
  //     }&verificationCode=${this.loginForm.captcha}&parameter=afterend`
  //     return tokenEndpoint.concat(paramPart)
  //   },
  //   showPwd() {
  //     if (this.passwordType === 'password') {
  //       this.passwordType = ''
  //     } else {
  //       this.passwordType = 'password'
  //     }
  //     this.$nextTick(() => {
  //       this.$refs.password.focus()
  //     })
  //   },
  //   getSubId() {
  //     const url = window.location.href.split('#/')[0]
  //     const appId = url.match(/appId=(.*)/)[1]

  //     return appId
  //   },

  //   handleLogin() {
  //     this.$refs.loginForm.validate(valid => {
  //       if (valid) {
  //         const authURL = this.buildAuthUrl()
  //         authenticate(authURL)
  //           .then(rsp => {
  //             if (rsp && rsp.access_token) {
  //               this.$store.commit('user/SET_TOKEN', rsp.access_token) // 注意命名空间
  //               this.$store.commit('user/SET_USER_ID', rsp.userId)
  //               this.$store.commit('user/SET_USER_NAME', rsp.username)
  //               this.$store.commit('user/SET_REAL_NAME', rsp.realName)
  //               setToken(rsp.token_type + ' ' + rsp.access_token) // 保存cookie
  //               localStorage.setItem('loginUserName', rsp.realName)
  //               localStorage.setItem('loginUserAccount', rsp.username)

  //               // 子系统配置
  //               const isSubSystem =
  //                 window.location.href.indexOf('app.html') > -1
  //               if (isSubSystem) {
  //                 window.sessionStorage.removeItem(
  //                   `activeMenu_${this.getSubId().split('&')[0]}`
  //                 )
  //               }
  //               inspectionDate(rsp.userId)
  //                 .then(res => {
  //                   if (res.status === 1) {
  //                     if (res.data.pwdUpdEnable === '0') {
  //                       this.checkLicense()
  //                       // 显示低版本浏览器预警页面
  //                       if (myBrowser() !== 'Chrome' && myBrowser() !== 'FF') {
  //                         this.$router.replace({ path: '/compatibility' })
  //                         return
  //                       }
  //                       this.$router.push({ path: '/dashboard' })
  //                       this.loading = false
  //                       return
  //                     }
  //                     if (res.data.moreThan === '1') {
  //                       this.$confirm(
  //                         '密码已过期，请重新设置您的密码',
  //                         '提示',
  //                         {
  //                           confirmButtonText: '确认',
  //                           cancelButtonText:
  //                             res.data.dataType === '1' ? '' : '取消',
  //                           type: 'warning',
  //                           callback: action => {
  //                             if (action === 'confirm') {
  //                               this.passwordVisible = true
  //                               this.formData.oldPassword = ''
  //                               this.formData.password = ''
  //                               this.formData.rePassword = ''
  //                             } else {
  //                               this.checkLicense()
  //                               // 显示低版本浏览器预警页面
  //                               if (
  //                                 myBrowser() !== 'Chrome' &&
  //                                 myBrowser() !== 'FF'
  //                               ) {
  //                                 this.$router.replace({
  //                                   path: '/compatibility'
  //                                 })
  //                                 return
  //                               }
  //                               this.$router.push({ path: '/dashboard' })
  //                               this.loading = false
  //                             }
  //                           }
  //                         }
  //                       )
  //                     } else {
  //                       this.checkLicense()
  //                       // 显示低版本浏览器预警页面
  //                       if (myBrowser() !== 'Chrome' && myBrowser() !== 'FF') {
  //                         this.$router.replace({ path: '/compatibility' })
  //                         return
  //                       }
  //                       this.$router.push({ path: '/dashboard' })
  //                       this.loading = false
  //                     }
  //                   }
  //                 })
  //                 .catch(() => {
  //                   // 显示低版本浏览器预警页面
  //                   if (myBrowser() !== 'Chrome' && myBrowser() !== 'FF') {
  //                     this.$router.replace({ path: '/compatibility' })
  //                     return
  //                   }
  //                   this.$router.push({ path: '/dashboard' })
  //                   this.loading = false
  //                 })
  //             }
  //           })
  //           .catch(() => {
  //             this.verificationImage()
  //             this.loading = false
  //           })
  //       } else {
  //         console.log('error submit!!')
  //         return false
  //       }
  //     })
  //   },
  //   submitUpdate(formName) {
  //     const that = this
  //     that.$refs[formName].validate(valid => {
  //       if (valid) {
  //         const params = that.formData
  //         params.logDec = that.loginForm.username + '账号过期密码修改'
  //         postForm(that.prefix + '/changePasswordDirect', params)
  //           .then(resp => {
  //             if (resp.status === 1) {
  //               if (resp.data && resp.data.success) {
  //                 that.$confirm('密码修改成功, 请重新登录', '提示', {
  //                   confirmButtonText: '确定',
  //                   cancelButtonText: '取消',
  //                   type: 'warning',
  //                   callback: action => {
  //                     that.logout()
  //                   }
  //                 })
  //               } else {
  //                 that.$message({
  //                   message: resp.data ? resp.data.message : '修改密码失败!',
  //                   type: 'error'
  //                 })
  //               }
  //             } else {
  //               that.$message({
  //                 message: resp.message,
  //                 type: 'error'
  //               })
  //             }
  //           })
  //           // eslint-disable-next-line handle-callback-err
  //           .catch(err => {})
  //       } else {
  //         console.log('error submit!!')
  //         return false
  //       }
  //     })
  //   },
  //   logout() {
  //     let enable4ALogin = false
  //     this.passwordVisible = false
  //     this.checkSys4aConfig().then(data => {
  //       Object.values(data).forEach(item => {
  //         if (
  //           item.paramKey === 'ceis.config.systemParameter.enable4ALogin' &&
  //           item.paramValue === '1'
  //         ) {
  //           enable4ALogin = true
  //         }
  //       })

  //       localStorage.removeItem('loginUserName')
  //       this.$store.dispatch('tagsView/delAllViews').then(() => {
  //         if (this.$appId) {
  //           window.sessionStorage.removeItem(`activeMenu_${this.$appId}`)
  //         }
  //         this.$store.dispatch('user/logout').then(res => {
  //           if (res) {
  //             if (enable4ALogin) {
  //               window.location.href = res
  //             }
  //           }
  //         })
  //       })
  //     })
  //   },
  //   checkSys4aConfig() {
  //     return getSystem4aParams().then(res => {
  //       if (res.status !== 1) return false
  //       if (res.data) {
  //         return res.data
  //       } else {
  //         return false
  //       }
  //     })
  //   },
  //   resetData() {
  //     const that = this
  //     that.formData.oldPassword = ''
  //     that.formData.password = ''
  //     that.formData.rePassword = ''
  //   },
  //   // 判断license
  //   checkLicense() {
  //     getLincense().then(rsponse => {
  //       if (rsponse.status === 1 && rsponse.data.status === 'success') {
  //         if (rsponse.data.licenseEnd) {
  //           this.$router.push({ path: 'licenseDeadline' })
  //         }
  //       } else if (rsponse.data.status === 'fail') {
  //         this.$confirm('license文件已过期?', '提示', {
  //           confirmButtonText: '去授权',
  //           cancelButtonText: '取消',
  //           type: 'warning',
  //           callback: action => {
  //             if (action === 'confirm') {
  //               this.$router.push({ path: 'licenseUpload' })
  //             } else {
  //               localStorage.removeItem('loginUserName')
  //               this.$store.dispatch('tagsView/delAllViews').then(() => {
  //                 if (this.$appId) {
  //                   window.sessionStorage.removeItem(
  //                     `activeMenu_${this.$appId}`
  //                   )
  //                 }
  //                 this.$store.dispatch('user/logout').then(res => {
  //                   this.$router.push('/login')
  //                 })
  //               })
  //             }
  //           }
  //         })
  //       }
  //     })
  //   },
  //   // 手机登录
  //   phoneLoginNow() {
  //     const authBaseUrl = window.globalConfig.Authentication_Url
  //     if (!this.loginForm.username) {
  //       this.$message({
  //         message: '手机号码不可为空',
  //         type: 'warning'
  //       })
  //       return false
  //     }
  //     if (!this.loginForm.phoneCaptcha) {
  //       this.$message({
  //         message: '验证码不可为空',
  //         type: 'warning'
  //       })
  //       return false
  //     }
  //     const params = {
  //       mobile: this.loginForm.username + ',',
  //       verifiCode: this.loginForm.phoneCaptcha,
  //       parameter: 'afterend'
  //     }
  //     postForm(authBaseUrl + '/auth-authentication/login/mobiles', params).then(
  //       rsp => {
  //         if (rsp && rsp.access_token) {
  //           this.$store.commit('user/SET_TOKEN', rsp.access_token) // 注意命名空间
  //           this.$store.commit('user/SET_USER_ID', rsp.userId)
  //           this.$store.commit('user/SET_USER_NAME', rsp.username)
  //           this.$store.commit('user/SET_REAL_NAME', rsp.realName)
  //           setToken(rsp.token_type + ' ' + rsp.access_token) // 保存cookie
  //           localStorage.setItem('loginUserName', rsp.realName)

  //           // 子系统配置
  //           const isSubSystem = window.location.href.indexOf('app.html') > -1
  //           if (isSubSystem) {
  //             window.sessionStorage.removeItem(
  //               `activeMenu_${this.getSubId().split('&')[0]}`
  //             )
  //           }

  //           inspectionDate(rsp.userId)
  //             .then(res => {
  //               if (res.status === 1) {
  //                 if (res.data.pwdUpdEnable === '0') {
  //                   this.checkLicense()
  //                   // 显示低版本浏览器预警页面
  //                   if (myBrowser() !== 'Chrome' && myBrowser() !== 'FF') {
  //                     this.$router.replace({ path: '/compatibility' })
  //                     return
  //                   }
  //                   this.$router.push({ path: '/dashboard' })
  //                   this.loading = false
  //                   return
  //                 }
  //                 if (res.data.moreThan === '1') {
  //                   this.$confirm('密码已过期，请重新设置您的密码', '提示', {
  //                     confirmButtonText: '确认',
  //                     cancelButtonText: res.data.dataType === '1' ? '' : '取消',
  //                     type: 'warning',
  //                     callback: action => {
  //                       if (action === 'confirm') {
  //                         this.passwordVisible = true
  //                         this.formData.oldPassword = ''
  //                         this.formData.password = ''
  //                         this.formData.rePassword = ''
  //                       } else {
  //                         this.checkLicense()
  //                         // 显示低版本浏览器预警页面
  //                         if (
  //                           myBrowser() !== 'Chrome' &&
  //                           myBrowser() !== 'FF'
  //                         ) {
  //                           this.$router.replace({ path: '/compatibility' })
  //                           return
  //                         }
  //                         this.$router.push({ path: '/dashboard' })
  //                         this.loading = false
  //                       }
  //                     }
  //                   })
  //                 } else {
  //                   this.checkLicense()
  //                   // 显示低版本浏览器预警页面
  //                   if (myBrowser() !== 'Chrome' && myBrowser() !== 'FF') {
  //                     this.$router.replace({ path: '/compatibility' })
  //                     return
  //                   }
  //                   this.$router.push({ path: '/dashboard' })
  //                   this.loading = false
  //                 }
  //               }
  //             })
  //             .catch(() => {
  //               // 显示低版本浏览器预警页面
  //               if (myBrowser() !== 'Chrome' && myBrowser() !== 'FF') {
  //                 this.$router.replace({ path: '/compatibility' })
  //                 return
  //               }
  //               this.$router.push({ path: '/dashboard' })
  //               this.loading = false
  //             })
  //         }
  //       }
  //     )
  //   },

  //   getOtherQuery(query) {
  //     return Object.keys(query).reduce((acc, cur) => {
  //       if (cur !== 'redirect') {
  //         acc[cur] = query[cur]
  //       }
  //       return acc
  //     }, {})
  //   },

  //   // 手机登录切换
  //   phoneLogin() {
  //     if (this.phoneShow) {
  //       this.phoneShow = false
  //       this.pwdShow = true
  //       this.captchaShow = true
  //       this.remeberPwdShow = true
  //       this.userKey = '请输入用户名'
  //       this.bottomMsg = ' 手机登录'
  //       this.loginShow = true
  //       this.loginForm.username = ''
  //       this.phoneLoginShow = false
  //     } else {
  //       this.phoneShow = true
  //       this.pwdShow = false
  //       this.captchaShow = false
  //       this.remeberPwdShow = false
  //       this.userKey = '请输入您的手机号码'
  //       this.bottomMsg = ' 返回'
  //       ;(this.loginShow = false), (this.phoneLoginShow = true)
  //       this.loginForm.username = ''
  //     }
  //   },
  //   getPhoneCode() {
  //     if (!this.loginForm.username) {
  //       this.$message({
  //         message: '手机号码不可为空',
  //         type: 'warning'
  //       })
  //       return false
  //     }
  //     const authBaseUrl = window.globalConfig.Authentication_Url
  //     const params = {
  //       phoneNum: this.loginForm.username
  //     }
  //     get(
  //       authBaseUrl + '/auth-authentication/authentication/getPhoneCode',
  //       params
  //     ).then(result => {
  //       if (result.status == 1) {
  //         if (result.data.code == 1) {
  //           const TIME_COUNT = 60
  //           if (!this.timer) {
  //             this.count = TIME_COUNT
  //             this.show = false
  //             this.timer = setInterval(() => {
  //               if (this.count > 0 && this.count <= TIME_COUNT) {
  //                 this.count--
  //               } else {
  //                 this.show = true
  //                 clearInterval(this.timer)
  //                 this.timer = null
  //               }
  //             }, 1000)
  //           }
  //         }
  //         if (result.data.code == -2) {
  //           this.$message({
  //             message: '手机号不可用，可以联系管理员人工重置',
  //             type: 'error'
  //           })
  //         } else if (result.data.code == -1) {
  //           this.$message({
  //             message: '该手机号发送验证码超出次数',
  //             type: 'error'
  //           })
  //         }
  //       }
  //     })
  //   },

  //   forgetPwd() {
  //     this.$router.push({ name: 'ForgetPwd' })
  //   },
  //   verificationImage() {
  //     const authBaseUrl = window.globalConfig.Authentication_Url
  //     this.src =
  //       authBaseUrl +
  //       '/auth-authentication/kaptcha/getLoginVerifiCodeImage?_v=' +
  //       Math.random() +
  //       ''
  //   },

  //   // 忘记密码鼠标悬停事件
  //   forgetPwdMouseover(val) {
  //     val.currentTarget.className = 'kote kote_mouse_over'
  //   },

  //   // 忘记密码鼠标移出事件
  //   forgetPwdMouseout(val) {
  //     val.currentTarget.className = 'kote'
  //   }
  // }
})
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #fff;
$light_gray: rgb(31, 30, 30);
$cursor: rgb(31, 30, 30);

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  position: relative;
  min-height: 100%;
  width: 100%;
  overflow-y: auto;
  background: url('../../../assets/images/dise.jpeg');

  .login-layout {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 1200px;
    height: 644px;
    margin: auto;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 0 40px 5px rgba(28, 68, 136, 0.5);

    .bogin-layout-left {
      position: relative;

      img {
        display: block;
        width: 100%;
        height: 644px;
      }

      .login-logo {
        position: absolute;
        top: 60px;
        left: 50px;
        min-width: 50px;
        height: 100px;

        img {
          display: block;
          width: 100%;
          height: auto;
        }
      }

      .login-position-p1 {
        position: absolute;
        top: 365px;
        left: -44px;
        width: 155px;
        height: 60px;
        z-index: 9999;
      }

      .login-position-p2 {
        position: absolute;
        top: 155px;
        left: -60px;
        width: 120px;
        height: 120px;
        z-index: 999;
      }
    }

    .login-layout-right {
      position: relative;
      height: 644px;
      padding: 30px;
      box-sizing: border-box;
      overflow: hidden;

      .platfrom-name {
        width: 80%;
        margin: 50px auto;
        font-size: 26px;
        text-align: left;
        font-weight: bold;
      }

      .login-form {
        width: 80%;
        margin: 0 auto;

        .el-form-item {
          color: #454545;
          margin-bottom: 40px;
          background: none;
          border-radius: 0;
          border-bottom: 1px solid #dfdfdf;

          .el-form-item__content {
            line-height: 50px;
          }

          img {
            display: inline-block;
            vertical-align: middle;
            margin-left: 15px;
          }

          .input-icon {
            margin-left: 18px;
          }

          .yanzhengma {
            width: 110px;
            height: auto;
          }

          .el-input {
            display: inline-block;
            height: 47px;
            width: 85%;
            background: transparent;

            input {
              background: transparent;
              border: 0px;
              -webkit-appearance: none;
              border-radius: 0px;
              padding: 12px 5px 12px 15px;
              color: $light_gray;
              height: 50px;
              caret-color: $cursor;

              &:-webkit-autofill {
                box-shadow: 0 0 0px 1000px $bg inset !important;
                -webkit-text-fill-color: $cursor !important;
              }
            }

            input::-webkit-input-placeholder {
              /* WebKit browsers 适配谷歌 */
              font-size: 16px;
              color: #666;
            }
            input:-moz-placeholder {
              /* Mozilla Firefox 4 to 18 适配火狐 */
              font-size: 16px;
              color: #666;
            }
            input::-moz-placeholder {
              /* Mozilla Firefox 19+ 适配火狐 */
              font-size: 16px;
              color: #666;
            }
            input:-ms-input-placeholder {
              /* Internet Explorer 10+  适配ie*/
              font-size: 16px;
              color: #666;
            }
          }
        }

        .el-form-item__error {
          font-size: 14px;
        }

        .login-button {
          width: 100%;
          margin-bottom: 20px;
          background-color: #e83435 !important;
          height: 58px;
          border: 1px solid;
          color: white !important;
          font-weight: 800;
          font-size: 16px;
          border-radius: 6px;
        }

        .tips {
          font-size: 14px;
          color: #fff;
          margin-bottom: 10px;

          span {
            &:first-of-type {
              margin-right: 16px;
            }
          }
        }
      }

      .login-opt {
        width: 80%;
        margin: 0 auto;

        #forget-pwd {
          float: right;
          font-size: 15px;
          color: #409eff;
        }

        .kote {
          cursor: pointer;
        }
      }

      #phone-login {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 80px;
        line-height: 80px;
        background-color: #f8f8f8;
        text-align: center;
        border-top: 1px solid #dcdcdc;
        border-radius: 0 0 20px 0;

        img {
          vertical-align: middle;
        }

        #phoneLogin {
          color: #333;
          font-weight: bold;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }

    #msg {
      width: 100%;
      color: #f7f6f6;
      font-size: 14px;
      text-align: center;
      margin-top: 40px;
      margin-bottom: 40px;
    }
  }
}
</style>
