<template>
<div id="y-home">
  <div class="user-info">
    <div class="bg-msk" :style="{backgroundImage:'url('+avatar+')'}"></div>
    <div class="user-img clearfix">
      <img :src="avatar" class="avatar" alt="">
      <!-- <span class="user-lv">LV{{levelInfo.level}}</span> -->
    </div>
    <div class="user-name-box">
      <span class="u-name">{{name}}<i>{{levelInfo.level}}</i></span>
    </div>
    <p class="user-phone">{{phone}}</p>
    <a href="#" id="user-msg">
      <i class="iconfont icon-xiaoxi"></i>
      <span v-if="msgcount>0" class="user-msg_count">{{msgcount}}</span>
    </a>
    <router-link to="/userInfo" id="edit-info">
      编辑资料
    </router-link>
  </div>

  <section class="user-panel">
    <div class="mylevel">
      <div class="mylevel_title border-1px-bottom">
        <span>我的等级</span>
        <router-link to="/gradeExplain" class="pull-right">经验说明</router-link>
      </div>
      <div class="mylevel_content">
        <p class="mylevel_value">
          <span>{{levelInfo.nowEXP}}</span>/{{levelInfo.isMax==1?levelInfo.nextEXP:levelInfo.nowEXP}}
        </p>
        <div class="mylevel_process"><p :style="{width:levelInfo.nowEXP/levelInfo.nextEXP*100+'%'}"></p></div>
        <div class="mylevel_lv">
          <span class="now_lv">LV{{levelInfo.nowEXP}}</span>
          <span class="next_lv pull-right">LV{{levelInfo.isMax==1?'max':levelInfo.level*1+1}}</span>
        </div>
      </div>
    </div>

    <flex-menu class="user-menu border-1px-top">
      <flex-menu-item title="我的积分" to="/class/goodsDetails">
        <span slot="icon" style="font-size:16px">{{score}}</span>
      </flex-menu-item>
      <flex-menu-item title="我的需求" to="/class/gooodsDetails" :badgeCount="myordercount">
        <i class="iconfont icon-copy" slot="icon"></i>
      </flex-menu-item>
      <flex-menu-item title="收货地址" to="/class/gooodsDetails">
        <i class="iconfont icon-map" slot="icon"></i>
      </flex-menu-item>
      <flex-menu-item title="每日签到" to="signIn">
        <i class="iconfont icon-qiandao1" slot="icon"></i>
      </flex-menu-item>
      <flex-menu-item title="修改密码" to="/changePassword">
        <i class="iconfont icon-mima" slot="icon"></i>
      </flex-menu-item>
    </flex-menu>
  </section>

  <section class="sj-panel">
    <p class="sj-panel-title border-1px-bottom">商家相关</p>
    <flex-menu class="other-menu">
      <flex-menu-item title="与订货单" to="/class/gooodsDetails" :badgeCount="reserveordercount" :disabled="authorization.indexOf(21)>-1" id="reserveOrder">
        <img slot="icon" src="./menu_i_25.png" alt="" width="28" height="28">
      </flex-menu-item>
      <flex-menu-item title="商品管理" to="/class/gooodsDetails" :disabled="authorization.indexOf(22)>-1">
        <img slot="icon" src="./menu_i_05.png" alt="" width="28" height="28">
      </flex-menu-item>
      <flex-menu-item title="员工管理" to="/class/gooodsDetails" :disabled="authorization.indexOf(23)>-1">
        <img slot="icon" src="./menu_i_17.png" alt="" width="28" height="28">
      </flex-menu-item>
      <flex-menu-item title="店铺管理" to="/class/gooodsDetails" :disabled="authorization.indexOf(24)>-1">
        <img slot="icon" src="./menu_i_03.png" alt="" width="28" height="28">
      </flex-menu-item>
      <flex-menu-item title="我要开店" to="/class/gooodsDetails" :disabled="authorization.indexOf(25)>-1">
        <img slot="icon" src="./menu_i_13.png" alt="" width="28" height="28">
      </flex-menu-item>
    </flex-menu>
  </section>

  <section style="margin-bottom:.5rem">
    <mt-cell title="商户认证" :is-link="true">
      <img slot="icon" src="./menu_icon_4.png" width="20" height="20">
    </mt-cell>
    <mt-cell title="申请服务" :is-link="true" to="/class/gooodsDetails">
      <img slot="icon" src="./menu_icon_6.png" width="20" height="20">
    </mt-cell>
  </section>
  <section>
    <mt-cell title="浏览记录" :is-link="true">
      <img slot="icon" src="./menu_icon_2.png" width="20" height="20">
    </mt-cell>
    <mt-cell title="联系客服" :is-link="true">
      <img slot="icon" src="./menu_icon_1.png" width="20" height="20">
    </mt-cell>
    <mt-cell title="退出账号" :is-link="true">
      <img slot="icon" src="./menu_icon_5.png" width="20" height="20">
    </mt-cell>
  </section>
</div>
</template>
<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  import Flex_Menu from 'components/flex-nav-menu/flex-menu.vue'
  import Flex_Menu_item from 'components/flex-nav-menu/flex-menu-item.vue'

  export default {
    data () {
      return {}
    },
    computed: {
      ...mapGetters([
        "avatar",
        "name",
        "phone",
        "score",
        "myordercount",
        "reserveordercount",
        "msgcount",
        "isvip",
        "islicense",
        "levelInfo",
        "authorization"
      ])
    },
    components: {
      "flex-menu": Flex_Menu,
      "flex-menu-item": Flex_Menu_item
    }
  }
</script>
<style media="screen" lang="stylus">
  #y-home .mint-cell
    padding-right: 1rem
    &:last-child
      background-image: none
    &:first-child .mint-cell-wrapper
      background: none
      content: none
    .mint-cell-wrapper
      font-size: 15px
      padding-left: 1.1rem
      background-position: 40px 0
      .mint-cell-title img
        margin-right: 15px
    .mint-cell-allow-right::after
      right: 1.1rem
</style>
<style media="screen" lang="stylus" scoped>
#y-home
  background-color: #f5f5f5
  padding-bottom: 20px

.user-info
  height: 9rem
  padding-top: 1.5rem
  padding-bottom: .7rem
  color: #fff
  position: relative
  z-index: 10
  overflow: hidden
  .bg-msk
    position: absolute
    z-index: -100
    top: 0
    height: 9rem
    width: 100%
    background-repeat: no-repeat
    background-position: center
    background-size: cover
    filter: blur(20px)

.user-img
  position: relative
  width: 3.9rem
  height: 3.9rem
  margin: 0 auto
  padding: .2rem
  border-radius: 50%
  border: 1px solid rgba(255,255,255,.15)
  .avatar
    width: 100%
    height: 100%
    border-radius: 50%
    vertical-align: bottom
    border: 1px solid #fff
      /*.user-lv
        position: absolute
        right: .3rem
        bottom: .2rem
        padding: 0 4px
        font-size: 10px
        line-height: 1.4
        background-color: #ffa200
        border-radius: 50px*/

.user-name-box
  margin-top: .5rem
  font-size: .8rem
  color: #fff
  text-align: center
  i
    font-size: .5rem
    font-style: normal
    position: absolute
    width: .9rem
    height: .9rem
    line-height: .9rem
    margin-top: .15rem
    margin-left: .2rem
    background: url(./yk_i.png) no-repeat top center
    background-size: 100%
    background-position: bottom center

.user-phone
  margin-top: .2rem
  font-size: .6rem
  text-align: center
  opacity: .8

#user-msg
  position: absolute
  left: .8rem
  top: .4rem
  font-size: 0
  color: #fff
  i
    font-size: .8rem
    font-weight: bold

.user-msg_count
  position: absolute
  left: 60%
  top: -4px
  height: 16px
  line-height: 16px
  min-width: 16px
  padding: 0 3px
  text-align: center
  background-color: #ffa200
  color: #fff
  font-size: .6rem
  padding: 0 3px
  border-radius: 50px

#edit-info
  position: absolute
  right: .8rem
  top: .4rem
  font-size: .7rem
  color: #fff

.user-panel
    background-color: #fff
    margin-bottom: .5rem

.mylevel
  font-size: .7rem
  margin: 0 .6rem

.mylevel_title
  line-height: 2rem
  span
    border-left: 2px solid #de6262
    padding-left: .2rem
    margin-left: .2rem
  a
    color: #de6262
    margin-right: .5rem

.mylevel_value
  font-size: .6rem
  margin-top: .3rem
  text-indent: .5rem
  span
    color: #de6262

.mylevel_process
  margin: .2rem .7rem
  background-color: #ddd
  height: 4px
  border-radius: 2px
  p
    border-radius: 2px 0 0 2px
    width: 0%
    height: 100%
    background-color: #de6262
    transition: width 1s ease

.mylevel_lv
  margin: .3rem .7rem  .5rem .7rem
  font-size: .6rem
  span
    color: #888
  .now_lv
    color: #de6262

.user-menu
  padding-top: 10px

.sj-panel
  background-color: #fff
  margin-bottom: .5rem
  .sj-panel-title
    font-size: .8rem
    line-height: 2rem
    text-indent: .5rem
  .other-menu .flex-nav-menu-item
    padding-top: 10px

</style>
