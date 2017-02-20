<template lang="html">
  <div id="y-payment" class="app">
    <address-select :address="address"></address-select>
    <ul class="product-list">
      <product-item v-for="item in productList" :product="item"></product-item>
    </ul>
    <div class="allinfo top-border bottom-border">
      <p class="alltoatl">参考总额<span class="pull-right">{{allPrice|currency}}</span></p>
      <p class="shipfee">+运费<span class="pull-right">{{freight|currency}}</span></p>
    </div>
    <div class="usermsg bottom-border">
      <textarea name="" id="ordermsg" rows="3" placeholder="想对卖家说点什么吗？请在这留言吧"></textarea>
    </div>
  <!-- <div class="btm-fixed">
      <a href="javascript:;" ms-click="submit" id="submitOrder" class="pull-right">提交需求</a>
      <div class="total-price-box top-border">
          <p class="total-price">预计付款：<span>{{allPrice|currency}}</span></p>
      </div>
  </div> -->
</div>
</template>

<script>
import AddressSelect from 'components/address-select/address-select'
import ProductItem from 'components/payment-product-item/payment-item'
import Http from 'assets/js/http'

export default {
  data () {
    return {
      address: {
        receiver: "姓名",
        gpsaddress: "xaxasdxsdxsddsd",
        phone: "14557766454"
      },
      productList: [],
      allPrice: "",
      freight: ""
    }
  },
  created () {
    Http.get("/User/OrderUser/OrderAddCookie", { orderselec: this.$route.query.orderselec }, result => {
      this.productList = result.data[0].orderdata || []
      this.allPrice = result.data[0].basicstotal || ""
      this.freight = result.data[0].shipfee || 0
    })
  },
  components: {
    AddressSelect,
    ProductItem
  }
}
</script>

<style lang="stylus" scoped>
#y-payment
  background-color: #f4f4f4
  font-size: 14px
  .product-list
    margin-bottom: 10px
  .allinfo
    padding: .5rem
    background-color: #fff
    p
      line-height: 1.2rem
    span
      color: #de6262

  .usermsg
    margin-bottom: 3rem
    line-height: 1rem
    padding: .5rem
    background-color: #fff
    #ordermsg
      width: 100%
      border: none
      border-radius: 3px
      font-size: .7rem
      color: #444

</style>
