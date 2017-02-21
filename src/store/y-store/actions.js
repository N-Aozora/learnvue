import Vue from 'vue'
import Http from 'assets/js/http'
import * as types from './mutation-types'

export default {
  getDemandCount ({ commit }, params) {
    Http.get("/User/UserCore/ShopCatContentAggregate", params, result => {
      commit(types.UPDATE_CART_COUNT, result.content || 0)
    }, { wrongMsg: "获取用户信息失败" })
  },

  getUserInfo ({ commit }) {
    Http.get("/User/UserCore/UserBasic", null, result => {
      commit(types.UPDATE_USER_INFO, result.data)
    }, { wrongMsg: "获取购物车数量失败" })
  },

  changeCartCount ({ commit }, { elem, n }) {
    const _count = elem.goodscount
    if ((_count <= 1 && n === -1) || (_count >= 999 && n === 1)) return
    const params = {
      goodsid: elem.goodsid,
      status: 1,
      goodscount: _count + n
    }
    Http.get("/Shop/GuestShop/GuestShopCatUser", params, result => {
      commit(types.CHANGE_CART_ITEM_COUNT, { elem, n })
      commit(types.CHANGE_CART_ITEM_CHOICE, { elem, ischoice: 1 })
    }, {
      wrongMsg: "删除失败",
      before: () => Vue.$indicator.open(),
      complete: () => Vue.$indicator.close()
    })
  },

  changeCartChioce ({ commit }, elem) {
    const params = {
      cartid: elem.cartid,
      status: elem.ischoice ? 0 : 1
    }
    Http.get("/Shop/GuestShop/GuestShopCatUptend", params, result => {
      commit(types.CHANGE_CART_ITEM_CHOICE, { elem, ischoice: params.status })
    })
  },

  removeCart ({ commit }, elem) {
    Vue.$messagebox.confirm("确认删除吗").then(() => {
      const params = {
        goodsid: elem.goodsid,
        status: 0
      }
      Http.get("/Shop/GuestShop/GuestShopCatUser", params, result => {
        commit(types.REMOVE_CART_ITEM, elem)
      }, {
        wrongMsg: "删除失败",
        before: () => Vue.$indicator.open(),
        complete: () => Vue.$indicator.close()
     })
    })
  },

  changeAllCartChoice ({ commit, getters }) {
    const params = {
      status: getters.cartIsAllChoice ? -1 : 2
    }
    Http.get("/Shop/GuestShop/GuestShopCatUptend", params, result => {
      commit(types.CHANGE_ALL_CART_CHOICE, params.status)
    })
  },

  getAddressList ({ commit, state }) {
    Http.get("/User/UserCore/ReceiptAddressList", null, result => {
      const address_list = result.listaddress || []
      commit(types.UPDATE_ADDRESS_LIST, address_list)
      if (!(state.nowSelectAddress instanceof Object) && address_list.length > 0) {
        commit(types.UPDATE_SELECT_ADDRESS, address_list.find(item => {
          return item.defaultaddress === 1
        }))
      }
    }, {
      wrongMsg: "获取地址列表失败",
      before: () => Vue.$indicator.open({ text: '加载中...', spinnerType: 'fading-circle' }),
      complete: () => Vue.$indicator.close()
    })
  }
}
