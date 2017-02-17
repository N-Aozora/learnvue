<template lang="html">
  <li class="clearfix cart-item">
    <div class="item-media">
      <a @click="goToDetails(elem.goodsid)"><img :src="elem.goodsimageurl"></a>
      <div class="img-msk" v-if="elem.isshelves==0">已下架</div>
    </div>
    <div class="item-inner">
      <div class="item-title">
        <span class="iconfont icon-yduishanchu i-remove" @click="removeCart"></span>
        <a @click="goToDetails(elem.goodsid)">
          <p class="gname">{{elem.goodsname}}</p>
          <p class="item-title-skuinfo">{{elem.skuinfo}}</p>
        </a>
      </div>
      <p class="price-info">{{elem.goodsprice}}天子币</p>
      <div class="item-operating clearfix" v-if="elem.isshelves!=0">
        <div class="quantity-warp">
          <i class="iconfont icon-jian"
            :class="{'countbtn-disabled':elem.goodscount<=1}"
            @click="changeCount(-1)">
          </i>
          <span class="gcount border-1px-left border-1px-right" @click="inputClick(elem)">{{elem.goodscount}}</span>
          <i class="iconfont icon-jia"
            :class="{'countbtn-disabled':elem.goodscount>=999}"
            @click="changeCount(1)">
          </i>
        </div>
      </div>
    </div>
    <i class="iconfont icon-gou i-checkbox"
      v-if="elem.isshelves!=0"
      :class="{'active-choice':elem.ischoice==1}"
      @click="choice"
      >
    </i>
    <i class="i-disabled" v-if="elem.isshelves==0"></i>
  </li>
</template>

<script>
export default {
  props: {
    elem: Object,
  },
  methods: {
    goToDetails (gid) {
      if (elem.isupdown == 0) return
      this.$router.push("/goodsDetails?goodsid=" + gid)
    },
    changeCount (n) {
      const _count = this.elem.goodscount
      if ((_count <= 1 && n === -1) || (_count >= 999 && n === 1)) return
      this.$store.commit("change_cart_item_count", {
        elem: this.elem,
        count: _count + n
      })
    },
    inputClick () {
      this.$store.commit("show_cart_count_dialog", this.elem)
    },
    removeCart () {
      this.$store.commit("removeCartItem", this.elem)
    },
    choice () {
      this.$store.commit("changeChoiceState", this.elem)
    }
  }
}
</script>

<style lang="stylus" scoped>
.cart-item
  background-color: #fff
  padding: .5rem
  margin-top: 1px
  padding-left: 2rem
  position: relative

  &:first-child
    margin-top: 0

  .i-disabled
    position: absolute
    top: 1.8rem
    left: .5rem
    width: .9rem
    height: .9rem
    border-radius: 50%
    border: 2px solid #ccc
    background: linear-gradient(30deg,#fff 45%,#ccc 43%,#ccc 57%,#fff 55%)

  .i-checkbox
    position: absolute
    top:1.8rem
    left: .5rem
    font-size: 1rem
    -webkit-text-stroke-width: .2px

  .item-media
    float: left
    position: relative
    img
      display: block
      width: 4rem
      height: 4rem
    .img-msk
      position: absolute
      top: 0
      bottom: 0
      width: 100%
      background-color: rgba(0,0,0,.4)
      color: #fff
      font-size: .7rem
      text-align: center
      line-height: 4rem

  .item-inner
    padding-left: 4.5rem

  .item-title
    margin-top: .2rem
    min-height: 2.4rem
    .i-remove
      float: right
      color: #bbb
      margin-left: 1rem
    a
      overflow: hidden
    .item-title-skuinfo
      font-size: .6rem
      color: #aaa
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
    .gname
      font-size: .65rem
      line-height: 1.3
      color: #464646
      multiline-text(2)

  .item-operating
    overflow: hidden

  .quantity-warp
    float: left
    position: relative
    border-radius: 3px
    &::after
      content: ""
      position: absolute
      width: 200%
      height: 200%
      top: 0
      left: 0
      border: 1px solid #D9D9D9
      transform: scale(0.5)
      transform-origin: 0 0
      box-sizing: border-box
      // border-radius: 6px

    .gcount,i
      position: relative
      z-index: 100
      float: left
      height: 1.3rem
      line-height: 1.3rem

    .gcount
      position: relative
      font-size: .7rem
      height: 1.3rem
      width: 2rem
      text-align: center
      //color: #e84e45
      color: #666
      &:hover
        &::after
          content: ""
          position: absolute
          width: 200%
          height: 200%
          top: 0
          left: 0
          border: 1px solid #e64138
          transform: scale(0.5)
          transform-origin: 0 0
          box-sizing: border-box

    .iconfont
      line-height: 1.4rem
      color: #666
      width: 1.3rem
      text-align: center
      font-size: .8rem
      &.countbtn-disabled
        color: #bbb

  .price-info
    float: left
    width: 45%
    font-size: .7rem
    line-height: 1.3rem
    color: #de6262

  .icon-gou
    color: #bbb
    &.active-choice
      color: #eb6100



</style>
