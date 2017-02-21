<template lang="html">
  <div id="y-payment" class="app">
    <address-select :address="this.$store.state.nowSelectAddress" @click.native="goToSlecteAddress"></address-select>
    <ul class="product-list border-1px-top border-1px-bottom">
      <product-item v-for="item in productList" :product="item">
        <span slot="price">{{item.goodsprice|currency}}</span>
      </product-item>
    </ul>
    <div class="allinfo top-border border-1px-bottom border-1px-top">
      <p class="alltoatl">参考总额<span class="pull-right">{{allPrice|currency}}</span></p>
      <p class="shipfee">+运费<span class="pull-right">{{freight|currency}}</span></p>
    </div>
    <div class="usermsg border-1px-bottom">
      <textarea class="ordermsg" v-model="message" rows="3" placeholder="想对卖家说点什么吗？请在这留言吧"></textarea>
    </div>
    <payment-btm-fixed title="预计付款" @submit="submitOrder">
      <span slot="total-info">{{allPrice|currency}}</span>
    </payment-btm-fixed>
</div>
</template>

<script>
import AddressSelect from 'components/address-select/address-select'
import ProductItem from 'components/payment-product-item/payment-item'
import PaymentBtmFixed from 'components/payment-btm-fixed/payment-btm-fixed'
import Http from 'assets/js/http'

export default {
  data () {
    return {
      productList: [],
      allPrice: "",
      freight: "",
      message: "",
      disabled: false
    }
  },
  created () {
    Http.get("/User/OrderUser/OrderAddCookie", { orderselec: this.$route.query.orderselec }, result => {
      this.productList = result.data[0].orderdata || []
      this.allPrice = result.data[0].basicstotal || ""
      this.freight = result.data[0].shipfee || 0
    })
    if (this.$store.state.addressList.length > 0) return
    this.$store.dispatch("getAddressList")
  },
  methods: {
    submitOrder () {
      if (this.disabled) return

      const address = this.$store.state.nowSelectAddress
      if (!address) {
        this.$toast("请选择收货地址")
        return
      }
      let params = {
        orderdata: [{
          orderselec: this.$route.query.orderselec,
          goodsdata: this.productList,
          message: this.message,
          ordertype: 1,
          applyid: 0,
          addressid: address.addressid,
          gpsaddress: address.gpsaddress,
          receiver: address.receiver,
          phone: address.phone,
          latitude: address.latitude,
          longitude: address.longitude
        }]
      }
      Http.post("/User/OrderUser/GenerateOrder", { orderdata:JSON.stringify(params) }, result => {
        this.$toast({
          message: '提交成功',
          iconClass: 'mintui mintui-success',
          className: 'mintui-toast-success',
          duration: 2000
        })
        setTimeout(() => {
          this.$router.replace("/cart")
        }, 2500)
      }, {
        wrongMsg: "提交订单失败",
        before: () => {
          this.disabled = true
          this.$indicator.open({ text: "正在提交...", spinnerType: "fading-circle" })
        },
        complete: () => this.$indicator.close(),
        error: () => this.disabled = false,
        wrong: () => this.disabled = false
      })
    },
    goToSlecteAddress () {
      this.$router.push("/paymentAddress")
    }
  },
  components: {
    AddressSelect,
    ProductItem,
    PaymentBtmFixed
  }
}
</script>

<style lang="stylus" scoped>
#y-payment
  background-color: #f4f4f4
  overflow: auto
  font-size: 14px
  &::-webkit-scrollbar
    display: none
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
    margin-bottom: 4rem
    line-height: 1rem
    padding: .5rem
    background-color: #fff
    .ordermsg
      width: 100%
      border: none
      border-radius: 3px
      font-size: .7rem
      color: #444

</style>
