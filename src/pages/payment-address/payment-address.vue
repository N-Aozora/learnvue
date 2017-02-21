<template lang="html">
  <div id="payment-address" class="app">
     <div class="address-list border-1px-bottom" v-if="addressList.length>0">
       <div class="title">选择收货地址</div>
       <div class="border-1px-top" style="padding-top:1px">
        <div class="address-item border-1px-bottom"
          v-for="item in addressList"
          :class="{'checkaddress': item.addressid===nowSelectId}">
          <i class="i-choice"></i>
          <div class="address-item-info" @click="changeSelect(item)">
            <p class="baseinfo clearfix">
              <span class="name">{{item.receiver}}</span>
              <span class="phone">{{item.phone}}</span>
            </p>
            <p class="address">{{item.gpsaddress}}</p>
          </div>
          <div class="address-item-edit border-1px-left">
            <i class="iconfont icon-bianji" @click="editAddress(item.addressid)"></i>
          </div>
        </div>
       </div>
     </div>
     <p class="noaddress" v-if="addressList.length<1">目前还没有收货地址</p>
     <div class="btn-box">
      <own-button @click.native="addAddress">添加新的地址</own-button>
     </div>
   </div>
</template>

<script>
import OwnButton from 'components/button/button'
import { UPDATE_SELECT_ADDRESS } from 'store/y-store/mutation-types'

export default {
  data () {
    return {
      addressList: this.$store.state.addressList,
      nowSelectId: this.$store.state.nowSelectAddress.addressid
    }
  },
  methods: {
    changeSelect (el) {
      this.$store.commit(UPDATE_SELECT_ADDRESS, el)
      this.$router.go(-1)
    },
    editAddress (id) {
      this.$router.push("/editAddress?addressid=" + id)
    },
    addAddress () {
      this.$router.push("/editAddress")
    }
  },
  components: {
    OwnButton
  }
}
</script>

<style lang="stylus" scoped>
@import "../../assets/stylus/mixin.styl"

  #payment-address
    background-color: #f4f4f4
    font-size: 14px

    .noaddress
      font-size: 18px
      text-align: center
      margin-top: 1rem
      color: #888

    .title
      margin-top: .77em;
      margin-bottom: .3em;
      padding-left: 15px;
      padding-right: 15px;
      color: #999;
      font-size: 14px;

    .address-list
      position: absolute
      top: 0
      bottom: 3.5rem
      width: 100%

    .address-item
      display: flex
      min-height: 3.5rem
      padding: .5rem 0 .5rem .5rem
      align-items: center
      background-color: #f9f9f9
      &.checkaddress
        .i-choice
          display: block
        .baseinfo
          color: #de6262
      .address-item-info
        display: block
        flex: 1
        .baseinfo
          margin-bottom: .3rem
        .name
          float: left
          width: 4rem
          margin-right: .2rem
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap
        .address
            line-height: 1.4
            font-size: .65rem
            color: #555
            multiline-text(2)

      .i-choice
        display: none
        width: 1.5rem
        &::after
          margin-left: 5px
          border: 2px solid #de6262
          border-left: 0
          border-top: 0
          content: " "
          display: block
          width: 6px
          height: 12px
          transform: rotate(45deg) scale(1)

      .address-item-edit
        display: block
        width: 3rem
        margin-left: .5rem
        padding-right: .5rem
        text-align: right
        i
          color: #999
          font-size: 1.4rem

    .btn-box
      position: absolute
      bottom: .5rem
      width: 100%;
      padding: 0 .5rem;
      margin-left: auto;
      margin-right: auto;

</style>
