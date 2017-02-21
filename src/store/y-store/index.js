import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
// import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    user: {},   //用户信息
    NEXT_PATH: false,
    cartList: [], //需求单列表
    nowEditingCartItem: {}, //当前编辑数量的商品对象
    isOpenEditCountDialog: false, //是否打开购物车数量编辑弹出来
    totalPrice: 0,  //购物车总价
    totalCount: 0, //购物车总数量
    addressList: [],  //收货地址列表
    nowSelectAddress: null, //当前选中的收货地址
  },
  getters,
  mutations,
  actions,
  modules: {

  },
  strict: debug,
  // plugins: debug ? [createLogger()] : []
})
