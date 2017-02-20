<template lang="html">
  <div id="y-cart" class="iOSscroll">
    <cart-list :cartGroup="cartData">
      <cart-item v-for="item in cartData" :elem="item">
        <span slot="price">{{item.goodsprice|currency}}</span>
      </cart-item>
    </cart-list>
    <cart-control @goToPay="goToPay">
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
  computed: {
    cartData () {
      return this.$store.state.cartList
    }
  },
  data () {
    return {
      isShowEditDiaolog: false
    }
  },
  methods: {
    goToPay () {
      const isHasProduct = this.cartData.every(item => {
        if (item.isshelves == 0 || item.ischoice !== 1) return true
        return false
      })
      if (isHasProduct) {
        this.$toast("请选择商品")
        return
      }
      
      const params = {
        orderdata: [{ ordertype: 1, applyid: 0, goodsdata: [] }]
      }
      this.cartData.forEach((item, index) => {
        if (item.isshelves == 0 || item.ischoice !== 1) return
        params.orderdata[0].goodsdata.push({
          goodsid: item.goodsid,
          buycount: item.goodscount,
          goodsname: item.goodsname,
          goodsprice: item.goodsprice,
          cartid: item.cartid,
          goodsimageurl: item.goodsimageurl
        })
      })

      Http.post("/User/OrderUser/GenerateOrderSet", { orderdata: JSON.stringify(params) }, result => {
        this.$router.push("/payment?orderselec=" + result.orderselec)
      }, {
        wrongMsg: "提交信息失败",
        before: () => this.$indicator.open,
        compelete: () => this.$indicator.close
      })
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
  position: absolute
  top: 0
  bottom: 0
  width: 100%
  overflow: auto
  background-color: #f5f5f5
  /*padding-bottom: 60px*/
  padding-top: 10px
  &::-webkit-scrollbar
    display: none
  ul
    margin-bottom: 110px
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
