import * as types from './mutation-types.js'

export default {
  [types.SET_NEXT_PATH] (state, bl) {
    state.NEXT_PATH = Boolean(bl)
  },
  [types.UPDATE_CART_COUNT] (state, n) {
    state.totalCount += n
  },
  [types.UPDATE_USER_INFO] (state, user) {
    state.user = user
  },
  [types.UPDATE_CART_LIST] (state, data) {
    state.cartList = data
  },
  [types.CHANGE_CART_ITEM_COUNT] (state, { elem, n }) {  //改变购物车某项数量
    elem.goodscount += n
  },
  [types.SHOW_CART_COUNT_DIALOG] (state, elem) { //  触发购物车数量编辑弹出框
    state.nowEditingCartItem = elem
    state.isOpenEditCountDialog = true
  },
  [types.HIDE_CART_COUNT_DIALOG] (state) {  //隐藏购物车数量编辑弹出框
    state.isOpenEditCountDialog = false
  },
  [types.CHANGE_CART_ITEM_CHOICE] (state, { elem, ischoice }) {
    elem.ischoice = ischoice
  },
  [types.REMOVE_CART_ITEM] (state, elem) {
    state.cartList.some(function (item, index) {
      if (item === elem) {
        state.cartList.splice(index, 1)
        return false
      }
    })
  },
  [types.UPDATE_CART_DATA] (state, { totalPrice, totalCount }) {
    state.totalPrice = totalPrice
    state.totalCount = totalCount
  },
  [types.CHANGE_ALL_CART_CHOICE] (state, isallchioce) {
    isallchioce === 2
    ? state.cartList.forEach(item => {
      item.ischoice = 1
    })
    : state.cartList.forEach(item => {
      item.ischoice = 0
    })
  }
}
