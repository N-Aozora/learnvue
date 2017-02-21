<template lang="html">
  <div class="payment-btm-fixed">
    <a href="javascript:;" @click="submit" class="submitOrder pull-right">提交需求</a>
    <div class="total-price-box border-1px-top">
      {{title}}:<slot name="total-info"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    btnText: {
      type: String,
      default: "提交订单",
    },
    title: {
      type: String,
      default: "实付款"
    }
  },
  methods: {
    submit () {
      this.$emit("submit")
    }
  }
}
</script>

<style lang="stylus" scoped>
  .payment-btm-fixed
    position: fixed
    bottom: 0
    width: 100%
    height: 2.5rem
    font-size: 14px
    color: #444
    background-color: #fff
    .total-price-box
      text-align: right
      padding-right: .8rem
      overflow: hidden
      line-height: 2.5rem
      span
        color: #de6262
        font-size: 18px
    .submitOrder
      font-size: .8rem
      height: 2.5rem
      line-height: 2.5rem
      color: #fff
      background-color: #de6262
      width: 7rem
      text-align: center

</style>
