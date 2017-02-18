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
      status: 0,
      goodscount: _count + n
    }
    Http.get("/Shop/GuestShop/GuestShopCatUser", params, result => {
      commit(types.CHANGE_CART_ITEM_COUNT, { elem, n })
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
      commit(types.CHANGE_CART_ITEM_CHOICE, elem)
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
      }, { wrongMsg: "删除失败" })
    })
  }
}