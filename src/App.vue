<template>
  <div id="app">
    <transition
      appear
      :enter-active-class="animateIn"
	 		:leave-active-class="animateOut"
    >
      <!-- <keep-alive> -->
        <router-view></router-view>
      <!-- </keep-alive> -->

    </transition>
  </div>
</template>

<script>
import { SET_NEXT_PATH } from 'store/y-store/mutation-types'

export default {
  name: 'app',
  data () {
    return {
      animateIn: "animated slideInRight",
      animateOut: "animated slideOutLeft"
    }
  },
  created () {
    this.$store.dispatch("getDemandCount", { goodstype: 1 })
    this.$store.dispatch("getUserInfo")
  },
  watch: {
    '$route' (to, from) {
      if (this.$store.state.NEXT_PATH) {
        this.animateIn = 'animated slideInRight'
        this.animateOut = 'animated slideOutLeft'
      }else {
        this.animateIn = 'animated slideInLeft'
        this.animateOut = 'animated slideOutRight'
      }
      this.$store.commit(SET_NEXT_PATH, false)
      this.$indicator.close()
    }
  }
}
</script>

<style>
  html,body,#app {
    height: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
  }
  div.app {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
