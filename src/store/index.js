import Vue from 'vue'
import Vuex from 'vuex'
// import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    demand_count: 0,  //需求单数量
    user: {},   //用户信息
    NEXT_PATH: false,
    cartList: [], //需求单列表
    nowEditingCartItem: {}, //当前编辑数量的商品对象
    isOpenEditCountDialog: false, //是否打开购物车数量编辑弹出来
    totalPrice: 0,  //购物车总价
    totalCount: 0 //购物车总数量
  },
  getters: {
    avatar (state) {
      return state.user.avatar
    },
    name (state) {
      return state.user.name
    },
    phone (state) {
      return state.user.iphone
    },
    birthday (state) {
      return state.user.birthday
    },
    score (state) {           //我的总积分数
      return state.user.score
    },
    myordercount (state) {  //我的订单数量
      return state.user.myorderrecord
    },
    reserveordercount (state) {   //预订货单数量
      return state.user.reserveorderrecord
    },
    msgcount (state) {       //消息数量
      return state.user.msgcount
    },
    isvip (state) {          //是否是要客
      return state.user.isvip
    },
    islicense (state) {      //是否是经烟户
      return state.user.islicense
    },
    levelInfo (state) {      //等级相关
      return {
        level: state.user.msgcount,
        nowEXP: state.user.historyscore,
        nextEXP: state.user.criticalvalue,
        isMax: state.user.istoplever
      }
    },
    authorization (state) {    //个人中心商家菜单权限
      return []
    },
  },
  mutations: {
    set_next_path (state, bl) {
      state.NEXT_PATH = Boolean(bl)
    },
    update_demand_count (state, n) {
      state.demand_count += n
    },
    update_userinfo (state, user) {
      state.user = user
    },
    update_cart_list (state, data) {
      state.cartList = data
    },
    change_cart_item_count (state, payload) {  //改变购物车某项数量
      payload.elem.goodscount = payload.count
    },
    show_cart_count_dialog (state, elem) { //  触发购物车数量编辑弹出框
      state.nowEditingCartItem = elem
      state.isOpenEditCountDialog = true
    },
    hide_cart_count_dialog (state) {  //隐藏购物车数量编辑弹出框
      state.isOpenEditCountDialog = false
    },
    changeChoiceState (state, elem) {
      elem.ischoice = !elem.ischoice
    },
    removeCartItem (state, elem) {
      state.cartList.some(function (item, index) {
        if (item === elem) {
          state.cartList.splice(index, 1)
          return false
        }
      })
    },
    updateCartData (state, data) {
      state.cartList = data.shoppdata || []
      state.totalPrice = data.ordertotal
      state.totalCount = data.goodstotal
    }
  },
  actions: {
    getDemandCount ({ commit }, params) {
      Vue.http.get("/User/UserCore/ShopCatContentAggregate", { params }).then(response => {
        if (response.body.code === 0) {
          commit("update_demand_count", response.body.content || 0)
        } else {
          Vue.$toast(response.body.msg || "获取购物车数量失败")
        }
      }, response => {
        Vue.$toast("error code " + response.status)
      })
    },
    getUserInfo ({ commit }) {
      Vue.http.get("/User/UserCore/UserBasic").then(response => {
        if (response.body.code === 0) {
          commit("update_userinfo", response.body.data)
        } else {
          Vue.$toast(response.body.msg || "获取用户信息失败")
        }
      }, response => {
        Vue.$toast("error code " + response.status)
      })
    },
  },
  modules: {

  },
  strict: debug,
  // plugins: debug ? [createLogger()] : []
})
