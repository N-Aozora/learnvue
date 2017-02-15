import Vue from 'vue'
import Router from 'vue-router'
import RootPage from 'components/RootPage'
import Index from 'components/Index'
import Class from 'components/Class'
import Cart from 'components/Cart'
import Home from 'components/Home'
import GoodsDetails from 'components/GoodsDetails'

Vue.use(Router)

const router = new Router({
  mode: "history",
  routes: [{
    path: '/',
    component: RootPage,
    children: [{
      path: '',
      component: Index
    }, {
      path: 'index',
      component: Index
    }, {
      path: 'class',
      component: Class
    }, {
      path: 'cart',
      component: Cart
    }, {
      path: 'home',
      component: Home
    }]
  }, {
    path: '/index/goodsdetails',
    component: GoodsDetails
  }, {
    path: '/class/goodsdetails',
    component: GoodsDetails
  }],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
