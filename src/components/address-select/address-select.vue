<template lang="html">
  <div class="address-select">
      <p v-if="isObj">
        <i class="iconfont icon-shouhuodizhi"></i>
        <span class="username">{{address.receiver}}</span>
        <span class="phone">{{address.phone}}</span>
      </p>
      <p class="address" v-if="isObj">{{address.gpsaddress}}</p>
      <i class="iconfont icon-next" ></i>
      <p class="noAddress" v-if="!isObj">请选择收货地址</p>
  </div>
</template>

<script>
export default {
  props: ["address"],
  computed: {
    isObj () {
      return this.address instanceof Object
    }
  },
}
</script>

<style lang="stylus" scoped>
  .address-select
    position: relative
    background-color: #fff
    padding: .7rem 2rem .7rem .5rem
    margin: .4rem 0
    font-size: 14px
    &::before
      content: ""
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 3px
      background: repeating-linear-gradient(60deg, white 5px, white 9px, #ee9f9f 9px, #ee9f9f 20px, white 20px,white 24px,#cecccc 24px, #cecccc 35px)

    &::after
      content: ""
      position: absolute
      bottom: 0
      left: 0
      width: 100%
      height: 3px
      background: repeating-linear-gradient(60deg, white 5px, white 9px, #ee9f9f 9px, #ee9f9f 20px, white 20px,white 24px,#cecccc 24px, #cecccc 35px)

    span
      margin-right: 1rem

    .icon-shouhuodizhi
      display: inline-block
      width: 1rem
      position: relative
      top: 1px

    .address
      margin-left: 1rem
      color: #777

    .icon-next
      font-size: 1.5rem
      position: absolute
      top: 50%
      right: .5rem
      margin-top: -1.1rem
      color: #eee

    .noAddress
      line-height: 2.4rem
      color: #999
      font-size: 18px


</style>
