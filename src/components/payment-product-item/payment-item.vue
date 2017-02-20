<template lang="html">
  <li class="payment-item">
      <img class="goodsimg" :src="product.goodsimageurl" alt="">
      <div class="goodsinfo">
          <p class="gname">{{product.goodsname}}</p>
          <p class="gskuinfo">{{product.skuinfo}}</p>
          <p class="gprice" style="text-align:left;">
            {{product.goodsprice}}天子币
            <span class="gcount pull-right">×{{product.buycount}}</span>
          </p>
      </div>
  </li>
</template>

<script>
export default {
  props: {
    product: Object
  }
}
</script>

<style lang="stylus" scoped>
@import "../../assets/stylus/mixin.styl"

.payment-item
  padding: 0 .5rem 0 .8rem
  min-height: 4.5rem
  overflow: hidden
  padding: .25rem .5rem
  background-color: #fff
  margin-bottom: 1px
  &:last-child::after
    content: none

  .goodsimg
    width: 4rem
    height: 4rem
    float: left

  .goodsinfo
    margin-left: 5rem
    font-size: 14px
    .gname
      font-size: 13px
      multiline-text(2)
    .gcount
      font-size: 13px
      text-align: right
    .gprice
      text-align: right
      color: #de6262

</style>
