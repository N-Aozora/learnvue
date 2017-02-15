<template>
  <div class="cart-btm-fixed">
     <div class="concern-cart top-border">
       <a class="cart-car-icn" @click="goToCart">
         <i class="iconfont icon-cart"></i>
         <p class="focus-info">{{iconText}}</p>
         <span class="cartcount" v-if="cartcount>0">{{cartcount>99?'99+':cartcount}}</span>
       </a>
     </div>
     <div class="action-list">
       <a class="addCart" @click="addCart"> {{btn1Text}} </a>
       <a class="buynow" @click="buynow">{{btn2Text}}</a>
     </div>
   </div>
</template>

<script>
export default {
  props: {
    iconText: String,
    btn1Text: String,
    btn2Text: String,
    cartcount: Number
  },
  methods: {
    addCart () {
      this.$emit("addCart")
    },
    buynow () {
      this.$emit("buynow")
    },
    goToCart () {
      this.$emit("goToCart")
    }
  }
}
</script>

<style lang="stylus" scoped>
.cart-btm-fixed
  position: fixed
  left: 0
  bottom: 0
  z-index: 10
  text-align: center
  width: 100%
  height: 50px
  background-color: #fff
  .concern-cart, .action-list
    float: left
    a
      display: inline-block;
      height: 50px;
      line-height: 50px;
      float: left;

  .concern-cart
    position: relative;
    width: 30%
    .cart-car-icn
      margin-left: 30%
      padding-top: 8px
      position: relative
      line-height: 1
      i
        font-size: 1.2rem
        color: #888
      p
        font-size: .6rem
        color: #888

  .action-list
    width: 70%
    a
      width: 50%
      color: #fff;
      font-size: 15px;

  .addCart
    background-color: #ffb03f
  .buynow
    background-color: #f23030
  .cartcount
    position: absolute
    text-align: center
    line-height: 10px
    border-radius: 50%
    background-color: #f23030
    color: #fff
    font-size: 8px
    padding: 0 4px
    right: 2px
    top: 5px

</style>
