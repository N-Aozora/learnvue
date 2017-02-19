export default {
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
  cartIsAllChoice (state) {
    return state.cartList.every((item, index) => {
      return item.isshelves === 0 ? true : item.ischoice === 1
    })
  }
}
