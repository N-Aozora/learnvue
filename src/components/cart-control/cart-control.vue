<template lang="html">
  <div class="settleAccounts" v-if="this.$store.state.cartList.length>0">
      <div class="pull-right">
        <a href="javascript:;" @click="submitorder" class="product-btn btn-red">{{goPayText}}({{amount>99?'99+':amount}})</a>
      </div>
      <div class="border-1px-top settleAccounts_left">
        <span class="mint-checkbox i-checkall" @click="choiceall">
          <input class="mint-checkbox-input" type="checkbox" :checked="this.$store.getters.cartIsAllChoice">
          <span class="mint-checkbox-core"></span>
          <span style="font-size:14px">全选</span>
        </span>
        <div class="pull-right total-price-box">
              <!-- <span>商品金额总计</span> -->
          <p class="total-price"><slot name="total-price"></slot></p>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  props: {
    goPayText: {
      type: String,
      default: "去结算"
    }
  },
  computed: {
    amount () {
      return this.$store.state.totalCount
    }
  },
  methods: {
    submitorder () {
      this.$emit("goToPay")
    },
    choiceall () {
      this.$store.dispatch("changeAllCartChoice")
    }
  }
}
</script>

<style lang="stylus" scoped>
.i-checkall
  position: absolute
  top: 50%
  margin-top: -11px
  left: .5rem
  line-height: 1
  .mint-checkbox-input:checked + .mint-checkbox-core
    background-color: #e64138
    border-color: #e64138

.settleAccounts
  position: fixed
  z-index: 10
  bottom: 55px
  overflow: hidden;
  width: 100%
  height: 50px
  background-color: #fff
  color: #464646
  .settleAccounts_left
    overflow: hidden
  .product-btn
    height: 50px
    line-height: 50px
    padding: 0 14px
    background-color: #e64138
    color: #fff
    display: block
    font-size: 14px
  .total-price-box
    text-align: right
    margin-right: 10px
    font-size: 0
    p
      margin: 0
    .total-price
      line-height: 50px
      font-size: 14px
      color: #505050
      color: #e64138
    .total-info
      font-size: 12px
      color: #878686


</style>
