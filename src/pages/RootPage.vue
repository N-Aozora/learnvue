<template>
  <div id="root-page" class="app">
    <div id="root-page-content">
      <router-view></router-view>
    </div>
    <mt-tabbar v-model="selected" :fixed="true">
      <mt-tab-item id="首页" @click.native="changeRouter">
        <i slot="icon" class="iconfont icon-shouye"></i>
        首页
      </mt-tab-item>
      <mt-tab-item id="分类" @click.native="changeRouter">
        <i slot="icon" class="iconfont icon-xiao46"></i>
        分类
      </mt-tab-item>
      <mt-tab-item id="需求单" @click.native="changeRouter">
        <i slot="icon" class="iconfont icon-gouwuche"></i>
        需求单
      </mt-tab-item>
      <mt-tab-item id="个人中心" @click.native="changeRouter">
        <i slot="icon" class="iconfont icon-gerenzhongxin"></i>
        个人中心
      </mt-tab-item>
    </mt-tabbar>
  </div>

</template>
<script>
export default {
  data () {
    const pagetype = this.$route.path
    const routeobj = {
      "/index": "首页",
      "/class": "分类",
      "/cart": "需求单",
      "/home": "个人中心",
    }
    return {
      routeobj,
      selected: routeobj[pagetype] || "首页"
    }
  },
  methods: {
    changeRouter: function () {
      switch (this.selected) {
        case "首页":
          this.$router.push({path: '/index'})
          break
        case "分类":
          this.$router.push({path: '/class'})
          break
        case "需求单":
          this.$router.push({path: '/cart'})
          break
        case "个人中心":
          this.$router.push({path: '/home'})
          break
      }
    }
  },
  watch: {
    '$route' (to, from) {
      const next_path = to.path
      if (next_path in this.routeobj) {
        this.selected = this.routeobj[next_path]
      }
    }
  }
}
</script>
<style media="screen" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../assets/stylus/color.styl"

  #root-page
    .iconfont
      font-size 20px
    .mint-tab-item.is-selected
      color $red-base
  #root-page-content
    padding-bottom 55px
    height: 100%
</style>
