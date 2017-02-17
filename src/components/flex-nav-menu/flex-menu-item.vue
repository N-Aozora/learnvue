<template lang="html">
  <a :class="['flex-nav-menu-item',{'flex-nav-menu-item-disabled':disabled}]" @click="toLink">
    <div class="flex-nav-menu-item-icon">
      <slot name="icon"></slot>
    </div>
    <span>{{title}}</span>
    <mt-badge color="#de6262" size="small" v-if="badgeCount>0">{{badgeCount>99?'99+':badgeCount}}</mt-badge>
  </a>
</template>

<script>
export default {
  props: {
    title:　String,
    to: String,
    badgeCount: Number,
    disabled: Boolean
  },
  methods: {
    toLink () {
      if (this.disabled) return
      this.to && this.$router.push({path:this.to})
    }
  }
}
</script>

<style lang="stylus" scoped>
.flex-nav-menu-item
  position: relative
  display: block
  flex: 1
  text-align: center
  font-size: 13px
  color: #333
  &.flex-nav-menu-item-disabled
    opacity: .3
  .flex-nav-menu-item-icon
    line-height: 1.6rem
    display: block
    img
      display: block
      margin: 0 auto 6px
    i
      font-size: 1rem
  .mint-badge
    position: absolute
    top: -5%
    left: 55%
    line-height: 1
</style>
