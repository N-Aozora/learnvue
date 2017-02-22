import Vue from 'vue'
import Router from 'vue-router'
import RootPage from 'pages/RootPage'
import Index from 'pages/y-index/Index'
import Class from 'pages/y-class/Class'
import Cart from 'pages/y-cart/Cart'
import Home from 'pages/home/Home'
import Payment from 'pages/y-payment/Payment'
import ProductDetails from 'pages/y-details/ProductDetails'
import PaymentAddress from 'pages/payment-address/payment-address'
import UserInfo from 'pages/user-info/UserInfo'
import GradeExplain from 'pages/grade-explain/GradeExplain'
import ChangePassword from 'pages/change-password/ChangePassword'
import SignIn from 'pages/sign-in/SignIn'

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
    path: '/productDetails',
    component: ProductDetails
  }, {
    path: '/payment',
    component: Payment
  }, {
    path: '/paymentAddress',
    component: PaymentAddress
  }, {
    path: '/userInfo',
    component: UserInfo
  }, {
    path: '/gradeExplain',
    component: GradeExplain
  }, {
    path: '/changePassword',
    component: ChangePassword
  }, {
    path: '/signIn',
    component: SignIn
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
