<template lang="html">
  <a class="flex-nav-menu-item">
    <slot name="icon" class="flex-nav-menu-item-icon"></slot>
    <slot></slot>
  </a>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
.flex-nav-menu-item
  display: block
  flex: 1
  text-align: center
  font-size: 13px
  color: #333
  img
    display: block
    margin: 0 auto 6px
</style>
