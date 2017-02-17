<template>
  <div id="y-index">
    <mt-swipe :auto="4000" :loop="false">
      <mt-swipe-item v-for="item in bannerList">
        <a :href="item.linkurl">
          <img :src="item.photourl" alt="">
        </a>
      </mt-swipe-item>
    </mt-swipe>
    <flex-menu class="nav">
      <flex-menu-item title="签到" to="/view/user/signin.html">
        <img slot="icon" src="./home_i_03.png" alt="" width="40">
      </flex-menu-item>
      <flex-menu-item title="足迹" to="/view/user/browsHistory.html">
        <img slot="icon" src="./home_i_05.png" alt="" width="40">
      </flex-menu-item>
      <flex-menu-item title="人工" to="/view/vipmall/cusSupport.html">
        <img slot="icon" src="./home_i_09.png" alt="" width="40">
      </flex-menu-item>
      <flex-menu-item title="关于" to="/view/user/jysm.html">
        <img slot="icon" src="./home_i_11.png" alt="" width="40">
      </flex-menu-item>
    </flex-menu>
    <section class="goodslist">
      <div class="title">
          <p>天子帮你看</p>
      </div>
      <ul>
        <product-item
          v-for="item in goodsList"
          :item="item"
          @goDetails="goDetails"
        >
          <template scope="props" slot="goodsimg">
            <img v-lazy="props.goods.goodphoto" alt="">
          </template>
        </product-item>
      </ul>
    </section>
  </div>
</template>
<script type="text/ecmascript-6">
  import Product_Item from 'components/y-product-item/product-item.vue'
  import Flex_Menu from 'components/flex-nav-menu/flex-menu.vue'
  import Flex_Menu_item from 'components/flex-nav-menu/flex-menu-item.vue'
  import Http from 'assets/js/http.js'

  export default {
    data () {
      return {
        bannerList: [],
        goodsList: []
      }
    },
    methods: {
      goDetails (gid) {
        this.$router.push({
          path: "/index/goodsDetails",
          query: { goodsid: gid }
        })
      }
    },
    created () {
      Http.get("/Shop/GuestShop/ImportantShopHome", null, "获取数据失败", result => {
        this.bannerList = result.data.phonedata || []
        this.goodsList = result.data.picturedata || []
      })
    },
    components: {
      "product-item": Product_Item,
      "flex-menu": Flex_Menu,
      "flex-menu-item": Flex_Menu_item
    }
  }
</script>
<style media="screen" lang="stylus">
  #y-index .mint-swipe-items-wrap
    position: absolute
    width: 100%
</style>
<style media="screen" lang="stylus" rel="stylesheet/stylus" scoped >
  .mint-swipe
    height: 0
    padding-bottom: 48.4375%
    .mint-swipe-item
      a, img
        display: block
        width: 100%
        height: 100%

  .flex-nav-menu.nav
    padding: 1rem .5rem .5rem

  .title
    text-align: center
    margin-bottom: .5rem;
    p
      position: relative
      display: inline-block
      background: url(./home_i_6.png) no-repeat left center
      background-size: 1.2rem
      padding-left: 1.5rem
      font-size: 14px
      color: #333
      &::before
        content: ""
        width: 2.5rem
        height: 1px
        background-color: #eee
        position: absolute
        left: -3rem
        top: 50%
      &::after
        content: ""
        width: 2.5rem
        height: 1px
        background-color: #eee
        position: absolute
        right: -3rem
        top: 50%

  .goodslist
    margin: 0 .6rem .6rem
    h2
      color: #eb6100
      text-align: center
      font-size: 18px
      margin-bottom: .3rem
</style>
