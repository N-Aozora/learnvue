<template lang="html">
  <div id="y-cart">
    <cart-list :cartGroup="cartData">
      <cart-item v-for="item in cartData" :elem="item">
        <span slot="price">{{item.goodsprice|currency}}</span>
      </cart-item>
    </cart-list>
    <cart-control>
      <span slot="total-price">参考价合计: {{this.$store.state.totalPrice|currency}}</span>
    </cart-control>
    <transition name="show-dialog">
      <cart-edit-count v-if="this.$store.state.isOpenEditCountDialog">
      </cart-edit-count>
    </transition>
    <dialog-mask v-if="this.$store.state.isOpenEditCountDialog"></dialog-mask>
    <div class="" id="noGoodsTips" v-if="cartData.length < 1">
 	   <a href="/view/creditmall/Cindex.html">去逛逛</a>
    </div>
  </div>
</template>

<script>
import Cart_List from 'components/cart-list/cart-list.vue'
import Cart_Item from 'components/cart-item/cart-item.vue'
import CartControl from 'components/cart-control/cart-control.vue'
import CartEditCount from 'components/cart-edit-count/count-dialog.vue'
import dialogMask from 'components/mask/dialog-mask.vue'
import Http from 'assets/js/http.js'
import * as types from 'store/y-store/mutation-types.js'

export default {
  created () {
    Http.get("/User/UserCore/ShoppingCartList", { goodstype: 1 }, result => {
      const data = result.data
      this.$store.commit(types.UPDATE_CART_LIST, data.shoppdata || [])
      this.$store.commit(types.UPDATE_CART_DATA, { totalPrice: data.ordertotal, totalCount: data.goodstotal })
    }, { wrongMsg: "获取购物车数据失败", cache: true })
  },
  data () {
    return {
      isShowEditDiaolog: false
    }
  },
  computed: {
    cartData () {
      return this.$store.state.cartList
    }
  },
  components: {
    "cart-list": Cart_List,
    "cart-item": Cart_Item,
    CartControl,
    CartEditCount,
    dialogMask
  }
}
</script>

<style lang="stylus" scoped>
#y-cart
  background-color: #f5f5f5
  min-height: 100%
  padding-bottom: 110px
  padding-top: 10px
  .show-dialog-enter-active,.show-dialog-leave-active
    transition: transform .3s ease
  .show-dialog-enter,.show-dialog-leave-active
    transform: translate(-50%,-300%)

#noGoodsTips
  margin: 3rem auto 0
  padding-top: 7.5rem
  width: 7rem
  height: 7rem
  text-align: center
  background: url(./cart_no_goods_bg_03.png) no-repeat center
  background-size: 100%
  a
    padding: .6rem 1rem
    font-size: .8rem
    color: #fff
    background-color: #f1917c
    border-radius: 3px

</style>
