import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    demand_count: 0,
    user: {}
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
    update_demand_count (state, n) {
      state.demand_count += n
    },
    update_userinfo (state, user) {
      state.user = user
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
    }
  },
  modules: {

  },
  strict: debug,
  // plugins: debug ? [createLogger()] : []
})
