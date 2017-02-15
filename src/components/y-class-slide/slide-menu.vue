<template>
  <div class="class-list">
    <transition name="slide-menu" >
      <div class="class-menu" v-if="isShowMenu">
        <div class="class-menu-inner iOSscroll">
          <ul >
            <li class="border-1px-bottom" v-for="item in typeList">
              <a :class="item.ptypeid==selectTypeId?'active':''" @click="changeClass(item.ptypeid, item.typename)" href="javascript:;">{{item.typename}}</a>
            </li>
          </ul>
        </div>
      </div>
    </transition>
    <transition name="fade-mask">
      <div class="menu-mask" v-if="isShowMenu" @click="hideClassMenu"></div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    isShowMenu: Boolean,
    typeList: Array,
    selectTypeId: Number
  },
  methods: {
    changeClass (typeid, typename) {
      this.$emit("slideTypeItemClick", typeid, typename)
    },
    hideClassMenu () {
      this.$emit("slideMaskClick")
    }
  }
}
</script>

<style lang="stylus" scoped>
  .slide-menu-enter-active,.slide-menu-leave-active
    transition: transform .3s ease
  .fade-mask-enter-active,.fade-mask-leave-active
    transition: opacity .3s ease
  .slide-menu-enter,.slide-menu-leave-active
    transform: translate(-100%,0)
  .fade-mask-enter,.fade-mask-leave-active
    opacity: 0

  .class-list
    position: fixed
    left: 0
    top: 2.5rem
    bottom: 55px
    text-align: center
    .class-menu
      height: 100%
      background-color: #fff
      position: relative
      z-index: 100
      .class-menu-inner
        overflow: auto
        height: 100%
        &::-webkit-scrollbar
          display: none
      &::before
        content: ""
        height: 0
        width: 0
        border-color: transparent transparent #fff transparent
        border-width: 5px
        border-style: solid
        position: absolute
        top: -10px
        left: 1rem
        z-index: 100
    ul li a
      border-left: 3px solid transparent
      padding: 8px 20px 8px 17px
      font-size: 14px
      color: #666
      display: block
      line-height: 1.6
      &.active
        border-left: 3px solid #eb6100
        color: #eb6100

  .menu-mask
    position: fixed
    left: 0
    right: 0
    top: 2rem
    bottom: 55px
    background-color: rgba(0,0,0,.6)

</style>
