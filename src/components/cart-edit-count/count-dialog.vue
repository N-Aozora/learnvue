<template lang="html">
  <div class="editcount-dialog" >
    <div class="editcount-hd"><strong>{{title}}</strong></div>
    <div class="editcount-bd">
      <div class="editcount-inner clearfix">
        <a class="reduce-btn border-1px-right" :class=" {'countbtn-disabled': count <= 1}" @click="reduce">
          <i class="iconfont icon-jian"></i>
        </a>
        <quantity-input class="editgcount"
          :value="count"
          :max="max"
          :stock="stock"
          :defaultValue="1"
          :autoSelected="true"
          @input="changeBuyCount">
        </quantity-input>
        <a class="plus-btn border-1px-left" :class="{'countbtn-disabled': count >= stock || count >= max}" @click="plus">
          <i class="iconfont icon-jia"></i>
        </a>
      </div>
    </div>
    <div class="editcount-ft">
      <a class="editcount-cancel-btn border-1px-top" @click="cancel">取消</a>
      <a class="editcount-primary-btn" @click="compelete">确定</a>
    </div>
  </div>
</template>

<script>
import quantityInput from 'components/input/quantity-input'
import { HIDE_CART_COUNT_DIALOG } from 'store/y-store/mutation-types'

export default {
  props: {
    title: {
      type: String,
      default: "修改购买数量"
    },
    max: {
      type: Number,
      default: 999
    }
  },
  data () {
    return {
      stock: this.$store.state.nowEditingCartItem.stock,
      count: this.$store.state.nowEditingCartItem.goodscount,
      item: this.$store.state.nowEditingCartItem
    }
  },
  methods: {
    reduce () {
      if (this.count > 1) this.count --
    },
    plus () {
      if ((this.stock && this.count < this.stock) || this.count >= this.max) return
      this.count ++
    },
    changeBuyCount (n) {
      this.count = n
    },
    cancel () {
      this.$store.commit(HIDE_CART_COUNT_DIALOG)
    },
    compelete () {
      this.$store.commit(HIDE_CART_COUNT_DIALOG)
      if (this.count === this.item.goodscount) return
      this.$store.dispatch("changeCartCount", {
        elem: this.item,
        n: this.count - this.item.goodscount
      })
    }
  },
  components: {
    quantityInput
  }
}
</script>

<style lang="stylus" scoped>
.editcount-dialog
  position: fixed
  z-index: 5000
  width: 80%
  max-width: 300px
  top: 40%
  left: 50%
  transition: transform 12s eas
  transform: translate(-50%,-50%)
  background-color: #fff
  text-align: center
  border-radius: 7px
  overflow: hidden

.editcount-hd
  padding: .8rem 0
  strong
    font-size: 18px
    font-weight: 400

.editcount-bd
  box-sizing: content-box
  padding: 0 1rem 1.4rem
  min-height: 40px
  font-size: 15px
  line-height: 1.3
  color: #999999
  text-align: center
  .editcount-inner
    margin: 0 auto
    width: 8rem
    height: 2rem
    position: relative
    &::after
      content: ""
      position: absolute
      width: 200%
      height: 200%
      top: 0
      left: 0
      border: 1px solid #aaa
      transform: scale(0.5)
      transform-origin: 0 0
      box-sizing: border-box
      border-radius: 6px

  .plus-btn,.reduce-btn
    position: absolute
    z-index: 200
    top: 0
    height: 2rem
    width: 2rem
    line-height: 1.8rem
    color: #666
    text-align: center
    i
      font-size: 1.2rem

  .reduce-btn::before,.plus-btn::after
     border-color: #aaa
  .plus-btn
    right: 0
  .reduce-btn
    left: 0
  .editgcount
    position: relative
    z-index: 100
  .editgcount
    border: none
    background-color: transparent
    font-size: 1rem
    height: 2rem
    width: 4rem
    text-align: center
    color: #333
  .countbtn-disabled
    i
      color: #bbb

.editcount-ft
  position: relative
  line-height: 2.2rem
  font-size: .8rem
  display: flex
  a
    display: block
    flex: 1
  .editcount-cancel-btn:active
    background-color: #ddd
  .editcount-primary-btn
    background-color: #e64138
    color: #fff
    &:active
      background-color: #c73229




</style>
