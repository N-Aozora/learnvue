<template>
  <div class="app" id="y-details">
    <mt-swipe :auto="4000" :loop="false">
      <mt-swipe-item v-for="item in pics">
        <img :src="item.imageurl" alt="">
      </mt-swipe-item>
    </mt-swipe>

    <section class="goodsinfo clearfix">
      <p class="gname">{{goodsname}}</p>
      <p class="gprice">参考价<span>{{price|currency}}</span></p>
      <div class="gcount clearfix">
        <i :class="['iconfont','icon-jian',{disabled:buycount<=1}]" @click="countMinus"></i>
        <div class="small-input">
          <quantity-input id="buy-num"
            :value="buycount"
            :max="999"
            :defaultValue="1"
            @input="changeBuyCount">
          </quantity-input>
        </div>
        <i :class="['iconfont','icon-jia',{disabled:buycount>=999}]" @click="countPlus"></i>
      </div>
    </section>

    <div class="tuwendetails" v-html="goodsdescribe"></div>

    <btm-action
      :iconText="'需求单'"
      :btn1Text="'加入需求单'"
      :btn2Text="'提交需求'"
      :cartcount="cartcount"
      @addCart="addCart"
      @buynow="buynow"
      @goToCart="goToCart"
    >
    </btm-action>
  </div>
</template>

<script>
import Btm_Action from './details-btm-action/btm-fixed-action.vue'
import Quantity_Input from './input/quantity-input.vue'
import Http from 'assets/js/http.js'

export default {
  data () {
    return {
      goodsid: this.$route.query.goodsid,
      pics: [],
      goodsname: "",
      price: 0,
      applyshopid: "",
      goodstype: "",
      basicsprice: "",
      goodsdescribe: "",
      buycount: 1
    }
  },
  computed: {
    cartcount () {
      return this.$store.state.demand_count
    }
  },
  created () {
    let params = {
      goodsid: this.goodsid
    }
    this.buycount = 1
    //获取商品详情
    Http.get("/Shop/GuestShop/ImportantDetails", params, "获取商品信息失败", result => {
      this.pics = result.data.listpicture || []
      this.goodsname = result.data.goodsname
      this.price = result.data.price
      this.applyshopid = result.data.applyshopid
      this.goodstype = result.data.goodstype
      this.basicsprice = result.data.basicsprice
      this.goodsdescribe = result.data.goodsdescribe || "暂无商品参数"
    }, { text: '加载中...', spinnerType: 'fading-circle' })
  },
  methods: {
    changeBuyCount (count) {
      this.buycount = count
    },
    countMinus () {
      this.buycount > 1 && --this.buycount
    },
    countPlus (el) {
      this.buycount < 1000 && ++this.buycount
    },
    addCart () {
      if (this.buycount < 1) return
      let params = {
          goodscount:　this.buycount,
          goodsid: this.goodsid,
          applyshopid: this.applyshopid,
          goodstype: this.goodstype
      }
      Http.get("/User/UserCore/ShoppingCart", params, "添加失败", result => {
        this.$toast({
          message: '添加成功',
          iconClass: 'mintui mintui-success',
          className: 'mintui-toast-success',
          duration: 2000
        })
        this.$store.commit("update_demand_count", this.buycount)
      })
    },
    buynow () {
      let params = {
        orderdata: [{
          ordertype: 1,
          applyid: 0,
          goodsdata: [{
            buycount: this.buycount,
            goodsid: this.goodsid,
            goodsname: this.goodsname,
            goodsprice: this.price,
            goodsimageurl: this.pics[0].imageurl,
          }]
        }]
      }
      Http.get("/User/OrderUser/GenerateOrderSet", {orderdata: JSON.stringify(params)}, "提交信息失败", result => {
        this.$router.push({
          path: '/class/goodsdetails/order',
          query: {
            orderselec: result.orderselec
          }
        })
      })
    },
    goToCart () {
      this.$router.push({path: '/cart'})
    }
  },
  components: {
    "btm-action": Btm_Action,
    "quantity-input": Quantity_Input
  }
}
</script>
<style media="screen" lang="stylus">
  #y-details .mint-swipe-items-wrap
    position: absolute
    width: 100%
</style>
<style lang="stylus" scoped>
.mint-swipe
  height: 0
  padding-bottom: 54.6875%
  .mint-swipe-item img
    display: block
    width: 100%
    height: 100%

.goodsinfo
  padding: .5rem 1rem .5rem
  color: #444
  border-bottom: .5rem solid #f4f4f4
  .gname
    font-size: .9rem
    margin-bottom: .5rem
    text-align: center
  .gprice
    font-size: .6rem
    font-weight: bold
    float: left
    letter-spacing: 1px
    color: #888
    span
      color: #ff5565
      font-size: 1rem
      margin-right: .3rem
  .gcount
    color: #ff5565
    font-size: .9rem
    float: right
    .iconfont
      padding-top: .1rem
      font-size: 1.1rem
      float: left
      line-height: 1
      &.disabled
        color: #e5e5e5

.small-input
  float:left
  display: table-cell
  width: 2rem
  height: 1.3rem
  font-size: 0
  margin: 0 .5rem

#buy-num
  text-align: center
  width: 100%
  height: 100%
  color: black
  font-size: .8rem
  border: none
  color: #ff5565

.tuwendetails
  margin-bottom: 60px
  padding: 1rem
  word-break: break-all

</style>
