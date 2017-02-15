<template lang="html">
  <div class="flex-nav-menu">
    <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
.flex-nav-menu
  display: flex
  & > *
    flex: 1
    display: block
    text-align: center
    font-size: 13px
    color: #333
    img
      display: block
      margin: 0 auto 6px

</style>
