<template lang="html">
    <button class="own-btn" :class="color">
      <slot></slot>
    </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "red"
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../../assets/stylus/color.styl"
  button
    border: none
    color: #fff
    display: block
    width: 100%
    margin-left: auto
    margin-right: auto
    line-height: 2.45
    font-size: .9rem
    text-align: center
    border-radius: 2px
    &.red
      background-color: $red-base
</style>
