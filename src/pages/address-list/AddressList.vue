<template lang="html">
  <div id="address-list" class="app" >
    <p class="noaddresstips" v-if="addressList.length<1">还没有收货地址</p>
    <ul class="address-wrap">
      <li v-for="item in addressList" class="border-1px-bottom" :class="{'select': item.defaultaddress==1}">
        <p class="baseinfo clearfix">
          <span class="name">{{item.receiver}}</span>
          <span class="phone">{{item.phone}}</span>
        </p>
        <p class="address">{{item.gpsaddress}}</p>
        <div class="actions clearfix">
          <a class="setDefault" @click="setDefault(item)">
            <i class="check_icon"></i>
            <span>设为默认</span>
          </a>
          <a class="action-del" @click="delAddress(item)">删除</a>
          <a class="action-edit" @click="editAddress(item.addressid)">编辑</a>
        </div>
      </li>
    </ul>
    <div class="btn-box">
      <own-button @click.native="addNewAddress">添加新的地址</own-button>
    </div>
  </div>
</template>

<script>
import OwnButton from "components/button/button"
import Http from "assets/js/http"

export default {
  computed: {
    addressList () {
      return this.$store.state.addressList
    }
  },
  created () {
    this.addressList.length < 1 && this.$store.dispatch("getAddressList")
  },
  methods: {
    setDefault (el) {
      this.$store.dispatch("setAddressDefault", el)
    },
    delAddress (el) {
      this.$messagebox.confirm("确定删除吗").then(() => {
        this.$store.dispatch("deleteAddress", el)
      })
    },
    editAddress (addressid) {
      this.$router.push("/editAddress?addressid=" + addressid)
    },
    addNewAddress () {
      this.$router.push("/editAddress")
    }
  },
  components: {
    OwnButton
  }
}
</script>

<style lang="stylus">
  #address-list
    min-height: 100%
    position: relative
    .btn-box
      position: absolute
      bottom: .5rem
      width: 100%
      padding: 0 .5rem
      margin-left: auto
      margin-right: auto

  .address-wrap
    padding-bottom: 5rem
    li
      position: relative
      color: #333
      padding: .7rem .8rem
      &.select .check_icon
        background-color: #f36162
      &::after
        border-color: #ddd

      .baseinfo
        font-size: .8rem
        line-height: 1.4
        .name
          float: left
        .phone
          float: right
        .iconfont
          float: right
          font-size: 18px
          line-height: 1

      .address
        margin-top: .3rem
        font-size: .6rem
        line-height: 1.2
        color: #555

      .actions
        margin-top: .7rem
        .setDefault
          float: left
          font-size: .7rem
          color: #333
          .check_icon
            display: inline-block
            position: relative
            top: -1px
            width: .7rem
            height: .7rem
            margin-right: .1rem
            border-radius: 50%
            border: 1px solid #999999
            vertical-align: middle
        .action-edit,.action-del
          float: right
          font-size: .6rem
          padding: 0 .7rem
          margin-left: .8rem
          color: #c86c71
          border: 1px solid #b27177
          border-radius: 3px
          background-color: #fff

  .noaddresstips
    padding-top: 1rem
    font-size: .9rem
    color: #555
    text-align: center

</style>
