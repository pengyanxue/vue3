<template>
  <div class="newHomePage">
    <el-row>
      <el-col :span="24">
        <div class="topBar">
          <div class="dis">
            <div class="topBarTitle dis" v-text="`欢迎您使用${sysName}内容管理系统`" />
            <div class="dis">
              <label style="color: #FFFFFF; font-size: 14px">站点选择:</label>
              <el-select v-model="stationId" class="siteSelect" placeholder="请选择" style="color: #EAF2FA;" @change="changeSite">
                <el-option v-for="(item, index) in selectData" :key="index" :value="item.id" :label="item.name" />
              </el-select>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="24" style="margin-left: 10px; margin-right: 10px; position: relative; top:-66px">
      <el-col :span="12">
        <div class="bk" style="padding-bottom: 40px; box-shadow: 0 2px 2px 2px #e4e7ed; ">
          <el-row :gutter="20" style="margin-bottom: 20px; margin-left: 0; margin-right: 0;">
            <div style="margin: 40px 0 30px 50px; font-weight: 600; font-size: 24px;">快速入口</div>
            <el-col :span="6" class="txtCen" style="margin-bottom: 39px;" @click.native="jumpHomePage">
              <img src="/img/yulan.png" alt="" class="marb" style="cursor: pointer">
              <div style="cursor: pointer">预览首页</div>
            </el-col>
            <el-col :span="6" class="txtCen" style="margin-bottom: 39px;" @click.native="jumpArt">
              <img src="/img/wenzhang.png" alt="" class="marb" style="cursor: pointer">
              <div style="cursor: pointer">添加文章</div>
            </el-col>
            <el-col :span="6" class="txtCen" style="margin-bottom: 39px;" @click.native="columnMar">
              <img src="/img/lanmu.png" alt="" class="marb" style="cursor: pointer">
              <div style="cursor: pointer">栏目维护</div>
            </el-col>
            <el-col :span="6" class="txtCen" style="margin-bottom: 39px;" @click.native="uploadFile">
              <img src="/img/wenjian.png" alt="" class="marb" style="cursor: pointer">
              <div style="cursor: pointer">上传文件</div>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="margin-bottom: 20px; margin-left: 0; margin-right: 0;">
            <el-col :span="6" class="txtCen" @click.native="uploadPic">
              <img src="/img/shangchauntupian.png" alt="" class="marb" style="cursor: pointer">
              <div style="cursor: pointer">上传图片</div>
            </el-col>
            <el-col :span="6" class="txtCen" @click.native="uploadVideo">
              <img src="/img/shangchuanshipin.png" alt="" class="marb" style="cursor: pointer">
              <div style="cursor: pointer">上传视频</div>
            </el-col>
            <el-col :span="6" class="txtCen" @click.native="jumpWholeStation">
              <img src="/img/quanzhanzengliang.png" alt="" class="marb" style="cursor: pointer">
              <div style="cursor: pointer">全站增量发布</div>
            </el-col>
            <el-col :span="6" class="txtCen" @click.native="jumpStation">
              <img src="/img/quanzhanfabu.png" alt="" class="marb" style="cursor: pointer">
              <div style="cursor: pointer">全站发布</div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="bk" style="box-shadow: 2px 2px 2px 2px #e4e7ed;">
          <el-row :gutter="20" style="margin-bottom: 20px;">
            <div style="margin: 40px 0 30px 40px; font-weight: 600; font-size: 24px;">概览</div>
            <el-col :span="10" class="txtCen" style="margin-left: 40px;">
              <div v-if="detail.total" class="bigTit">{{ detail.total }}</div>
              <div v-else class="bigTit">0</div>
              <div>站群总文章数</div>
            </el-col>
            <el-col :span="10" class="txtCen" style="margin-left: 59px;">
              <div v-if="detail.siteTotal" class="bigTit">{{ detail.siteTotal }}</div>
              <div v-else class="bigTit">0</div>
              <div>当前站点总文章数</div>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="padding-top: 32px; margin-left: 0; margin-right: 0; border-top: 1px solid #DBDFE6; background-color: #F8F9FB; padding-bottom: 40px;">
            <el-col :span="8" class="txtCen" style="padding-top: 11px; margin-bottom: 18px;">
              <div v-if="detail.releasedTotal" class="number">{{ detail.releasedTotal }}</div>
              <div v-else class="number">0</div>
              <div>您已发布</div>
            </el-col>
            <el-col :span="8" class="txtCen" style="padding-top: 11px; margin-bottom: 18px;">
              <div v-if="detail.draftTotal" class="number">{{ detail.draftTotal }}</div>
              <div v-else class="number">0</div>
              <div>您的草稿</div>
            </el-col>
            <el-col :span="8" class="txtCen" style="padding-top: 11px; margin-bottom: 18px;">
              <div v-if="detail.approvalTotal" class="number">{{ detail.approvalTotal }}</div>
              <div v-else class="number">0</div>
              <div>待审核</div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { homePageSelect, homePageDetail } from '@/api/auth/dept'
export default {
  data() {
    return {
      selectData: [],
      detail: {},
      tplShow: true,
      stationId: '',
      url: '',
      isContent: true,
      isPub: true,
      isPreview: true,
      isCreat: true,
      isPublishStatus: true
    }
  },
  computed: {
    // 应用系统名称
    sysName() {
      if (this.$appId) {
        return this.$store.state.app.apply.appName
      }
      return ''
    }
  },
  created() {
    this.homePageSelect()
  },
  methods: {
    homePageSelect() {
      const that = this
      homePageSelect().then(res => {
        if (res.status == '1' && res.data && res.data.length > 0) {
          that.selectData = res.data
          // that.stationId = that.selectData[0].id
          if (window.sessionStorage.getItem('cms.siteId')) {
            that.stationId = window.sessionStorage.getItem('cms.siteId')
            that.selectData.forEach(item => {
              if (that.stationId == item.id) {
                that.url = item.url
                if (item.publishStatus == '1') {
                  that.isPublishStatus = true
                } else {
                  that.isPublishStatus = false
                }
              }
            })
          } else {
            that.stationId = that.selectData[0].id
            that.url = that.selectData[0].url
            if (that.selectData[0].publishStatus == '1') {
              that.isPublishStatus = true
            } else {
              that.isPublishStatus = false
            }
          }
          that.homePageDetail()
        }
      })
    },
    changeSite() {
      window.sessionStorage.setItem('cms.siteId', this.stationId)
      this.selectData.forEach(item => {
        if (this.stationId == item.id) {
          this.url = item.url
          if (item.publishStatus == '1') {
            this.isPublishStatus = true
          } else {
            this.isPublishStatus = false
          }
        }
      })
      this.homePageDetail()
    },
    homePageDetail() {
      const that = this
      homePageDetail(this.stationId).then(res => {
        if (res.status == '1' && res.data) {
          that.detail = res.data
        }
      })
    },
    mouseenter() {
      this.tplShow = false
    },
    mouseLeave() {
      this.tplShow = true
    },
    jumpWholeStation() {
      this.$router.push({ name: 'addJob', query: { siteId: this.stationId, sitePubLish: 'SITEPUBLISH', incremental: 'INCREMENTAL' }})
    },
    jumpStation() {
      this.$router.push({ name: 'addJob', query: { siteId: this.stationId, sitePubLish: 'SITEPUBLISH', incremental: 'ENTIRELY' }})
    },
    columnMar() {
      this.$router.push({ name: 'SiteColumnManage' })
    },
    uploadFile() {
      this.$router.push({ name: 'fileManage' })
    },
    uploadPic() {
      this.$router.push({ name: 'imagesManage' })
    },
    uploadVideo() {
      this.$router.push({ name: 'videosManage' })
    },
    jumpArt() {
      this.$router.push({ name: 'ArticleManage' })
    },
    jumpHomePage() {
      if (!this.isPublishStatus) {
        this.$message.warning('该网站尚未静态化无法预览')
        return
      } else {
        // window.location.href = this.url
        window.open(this.url)
      }
    },
    contentLeave() {
      this.isContent = true
    },
    contentEnter() {
      this.isContent = false
    },
    pubLeave() {
      this.isPub = true
    },
    pubEnter() {
      this.isPub = false
    },
    previewLeave() {
      this.isPreview = true
    },
    previewEnter() {
      this.isPreview = false
    },
    creatLeave() {
      this.isCreat = true
    },
    creatEnter() {
      this.isCreat = false
    }
  }
}
</script>

<style lang="scss" scoped>
.newHomePage >>> {
  width: 100%;
  min-width: 1220px;
  .topBar {
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url('../../../assets/images/topBar.png');
    padding: 66px 0 119px 30px;
  }
  .bk {
    background-color: #FFFFFF;
  }
  .topBarTitle {
    font-size: 24px;
    color: #FFFFFF;
    margin-right: 51px;
    margin-left: -10px;
    font-family: "PingFangSC";
  }
  .dis {
    display: inline-block;
  }
  .el-select {
    width: 340px;
  }
  .marb {
    margin-bottom: 20px;
  }
  .txtCen {
    text-align: center;
  }
  .bigTit {
    font-size: 50px;
    font-weight: 600;
    color: #1A7AE8;
    margin-bottom: 26px;
  }
  .number {
    font-size: 50px;
    margin-bottom: 25px;
  }
  .footerSty {
    width: 19%;
    box-sizing: border-box;
    padding: 53px 0 33px 0;
    border: 1px solid #DBDFE6;
    background-color: #F8F9FA;
  }
  .footerSty:hover {
    background-color: #1A7AE8;
    color: #DBDFE6;
  }
  .whiteSmTitle {
    font-size: 18px;
    font-family: "PingFangSC";
    color: #FFFFFF;
  }
  .blackSmTitle {
    font-size: 18px;
    font-family: "PingFangSC";
    color: #363636;
  }
  :deep.el-input .el-input__inner {
    height: 30px;
    color: #EAF2FA;
  }
  .contentTitle {
    font-size: 15px;
    font-family: "PingFangSC";
    display: inline-block;
    width: 100%;
    padding-left: 39px;
    margin-top: 20px;
  }
  :deep input::-webkit-input-placeholder {
    color: #EAF2FA;
  }
  :deep .el-input__inner {
    background-color:#5892D4;
    border-color: #89B2E0 !important;
  }
  :deep .el-input__suffix {
    background-color: #9BBEE5;
    margin-right: -4px;
    width: 31px;
    height: 28px;
    margin-top: 1px;
  }
  .siteSelect .el-input .el-select__caret{
    color: #fff;
  }
  .siteSelect .el-input .el-icon-arrow-up:before{
    content: "\e790";
  }
}
</style>
