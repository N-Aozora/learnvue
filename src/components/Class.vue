<template>
  <div class="">
    <div class="top-tab border-1px-bottom">
      <a @click="showSlieMenu">{{typename}}&nbsp;&nbsp;<i class="iconfont icon-iconset0417"></i></a>
      <a @click="showSortMenu">{{sorttext}}&nbsp;&nbsp;<i class="iconfont icon-iconset0417"></i></a>
      <ul class="sortmenu" v-if="isShowSortMenu">
        <li :class="{active:sort==0}" @click="changeSort(0, '默认排序')"><a>默认排序</a></li>
        <li :class="{active:sort==1}" @click="changeSort(1, '价格最低')"><a>价格最低</a></li>
        <li :class="{active:sort==2}" @click="changeSort(2, '价格最高')"><a>价格最高</a></li>
      </ul>
    </div>

    <section class="goodslist-box iOSscroll" >
      <div>
        <div class="goodsList">
          <ul
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="20"
            infinite-scroll-immediate-check="fasle"
          >
            <product-item
              v-for="item in productList"
              :item="item"
              @goDetails="goDetails"
            >
              <template scope="props" slot="goodsimg">
                <img v-lazy="props.goods.imageurl" alt="">
              </template>
            </product-item>
          </ul>
          <div class="goods-loading-spinner" v-if="!isLoadAll">
            <mt-spinner type="fading-circle" :size="24"></mt-spinner>
            加载中...
          </div>
        </div>
      </div>
    </section>

    <slide-menu
      :typeList="typeList"
      :selectTypeId="selectTypeId"
      :isShowMenu="isShowMenu"
      @slideMaskClick="hideSlideMenu"
      @slideTypeItemClick="changeType"
    >
    </slide-menu>

  </div>
</template>
<script type="text/ecmascript-6">
  import Product_Item from './y-product-item/product-item.vue'
  import Slide_Menu from './y-class-slide/slide-menu.vue'
  import IsAllLoaded from 'assets/js/isAllLoaded.js'
  import Http from 'assets/js/http.js'

  export default {
    data () {
      return {
        selectTypeId: 0,
        typename: "",
        sorttext: "默认排序",
        sort: "",
        typeList: [],
        productList: [],
        pageIndex: 0,
        pageSize: 10,
        loading: false,
        isShowMenu: false,
        isShowSortMenu: false,
        isLoadAll: false,
        count: 0
      }
    },
    created () {
      Http.get("/Shop/GuestShop/GuestMallState", null, "获取分类失败", result => {
        this.typeList = result.data || []
        this.typename = result.data[0].typename
        this.selectTypeId = result.data[0].ptypeid
        this.loadMore()
      })
    },
    methods: {
      initState () {
        this.productList = []
        this.pageIndex = 0
        this.isLoadAll = false
        this.loading = false
        this.loadMore()
      },
      showSortMenu () {
        this.isShowSortMenu = !this.isShowSortMenu
        this.hideSlideMenu()
      },
      hideSortMenu () {
        this.isShowSortMenu = false
      },
      changeSort (sortid, text) {
        this.sort = sortid
        this.sorttext = text
        setTimeout(() => {
          this.hideSortMenu()
          this.initState()
        }, 200)
      },
      showSlieMenu ()  {
        this.isShowMenu = !this.isShowMenu
        this.hideSortMenu()
      },
      hideSlideMenu () {
        this.isShowMenu = false
      },
      changeType (typeid, typename) {
        this.selectTypeId = typeid
        this.typename = typename
        setTimeout(() => {
          this.hideSlideMenu()
          this.initState()
        }, 200)
      },
      goDetails (gid) {
        this.$router.push({
          path: "/class/goodsDetails",
          query: { goodsid: gid }
        })
      },
      loadMore () {
        let params = {
          pageindex: this.pageIndex + 1,
          pagesize: this.pageSize,
          ptypeid:　this.selectTypeId,
          orderby:　this.sort
        }
        this.loading = true

        Http.get("/Shop/GuestShop/ImportantMall", params, "获取商品列表失败", result => {
          this.productList = this.productList.concat(result.data || [])
          IsAllLoaded(this.pageSize, result.pagedata, index => {
            this.pageIndex = index
          }, () => {
            this.loading = true
            this.isLoadAll = true
          })
        }, response => {
          this.loading = false
        }, response => {
          this.loading = false
        })
      }
    },
    components: {
      "product-item": Product_Item,
      'slide-menu': Slide_Menu
    }
  }
</script>
<style media="screen" lang="stylus">
  .goods-loading-spinner
    text-align: center
    line-height: 25px
    font-size: 14px
    margin-bottom: 10px
    .mint-spinner-fading-circle
      display: inline-block
      vertical-align: middle
      margin-right: 5px
</style>
<style media="screen" lang="stylus" scoped>
  .top-tab
    position: fixed
    z-index: 10
    top: 0
    width: 100%
    display: flex
    height: 2rem
    background-color: #fff
    a
      flex: 1
      display: block
      line-height: 2rem
      text-align: center
      color: #555
      font-size: .8rem
      &.active
        color: #eb6100

  .sortmenu
    position: absolute
    top: 2rem
    right: 0
    background-color: #fff
    width: 50%
    box-shadow: 0px 2px 2px rgba(0,0,0,.3)
    li.active
      background-color: #eee
    &.show
      display: block

  .goodslist-box
    position: absolute
    top: 2rem
    bottom: 55px
    width: 100%
    overflow: auto
    background-color: #f4f4f4
    &::-webkit-scrollbar
      display: none
    .goodsList
      padding: .6rem .6rem 0
      .product-item
        padding: .4rem
        margin-bottom: .6rem

</style>
