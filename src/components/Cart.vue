<template lang="html">
  <div id="y-cart">
    <cart-list :cartGroup="this.$store.state.cartList">
    </cart-list>
  </div>
</template>

<script>
import Cart_List from 'components/cart-list/cart-list.vue'
import Http from 'assets/js/http.js'

export default {
  created () {
    Http.get("/User/UserCore/ShoppingCartList", { goodstype: 1 }, "获取购物车数据失败", result => {
      this.$store.commit("updateCartData", result.data)
    })
  },
  computed: {
    cartData () {
      return this.$store.state.cartList
    }
  },
  components: {
    "cart-list": Cart_List
  }
}
</script>

<style lang="stylus">
#y-cart
  background-color: #f5f5f5
</style>
