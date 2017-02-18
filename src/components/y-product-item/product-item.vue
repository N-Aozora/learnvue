<template>
  <li class="product-item">
      <a @click="imgclick(item.goodsid)">
          <div class="imgbox">
              <slot name="goodsimg" :goods="item"></slot>
          </div>
      </a>
      <div class="addcart" @click="addCart(item.goodsid)">
          <div><p>加入</p><p>需求单</p></div>
          <i class="iconfont icon-cart"></i>
      </div>
      <div class="goodsinfo">
          <a @click="imgclick(item.goodsid)" class="name">{{item.goodsname}}</a>
          <p class="price">参考价<span>{{item.price|currency}}</span></p>
      </div>
  </li>
</template>

<script>
import Http from 'assets/js/http.js'
import { UPDATE_CART_COUNT } from "store/y-store/mutation-types"

export default {
  props: {
    item: Object
  },
  methods: {
    imgclick (goodsid) {
      this.$emit("goDetails", goodsid)
    },
    addCart (goodsid) {
      let params = {
          goodscount:　1,
          goodsid: goodsid,
          applyshopid: 0,
          goodstype: 1
      }
      Http.get("/User/UserCore/ShoppingCart", params, result => {
        this.$toast({
          message: '添加成功',
          iconClass: 'mintui mintui-success',
          className: 'mintui-toast-success',
          duration: 2000
        })
        this.$store.commit(UPDATE_CART_COUNT, 1)
      }, {
        wrongMsg: "添加购物车失败",
        before: () => this.$indicator.open({ spinnerType: 'fading-circle' }),
        complete: () => this.$indicator.close()
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
  .product-item
    background-color: #fff
    padding: .4rem 0
    a
      display: block
      color: #333

    .imgbox
      position: relative
      /*overflow: hidden*/
      width: 100%
      height: 0
      padding-bottom: 54.6875%
      margin-bottom: .2rem
      img
        position: absolute
        display: block
        width: 100%
        height: 100%

    .addcart
      position: relative
      border-radius: 5px
      line-height: 40px
      float: right
      margin-left: 2px
      padding: 0 10px
      border-radius: 5px
      &::after
        content: ""
        position: absolute
        top: 0
        left: 0
        height: 200%
        width: 200%
        transform-origin: left top
        border: 1px solid #ddd
        transform: scale(.5)
        border-radius: 10px
      i
        font-size: 20px
        float: right
        color: #999
      div
        position: relative
        color: #de6262
        padding: 4px 10px 0 0
        margin-right: 10px
        height: 40px
        width: 60px
        display: inline-block
        font-size: 12px
        text-align: center
        vertical-align: bottom
        &::after
          content: ""
          width: 0px
          border-left: 1px solid #ddd
          height: 24px
          position: absolute
          right: 0
          top: 8px
          transform: scaleX(.5)
        p
          line-height: 16px

    .goodsinfo
      font-size: 14px
      overflow: hidden
      .name, .price
        height: 20px
        line-height: 20px
      .name
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis
      .price
        font-size: 12px
        color: #888
        span
          margin-right: 6px
          font-size: 14px
          color: #de6262

</style>
