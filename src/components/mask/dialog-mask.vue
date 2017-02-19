<template lang="html">
  <transition name="fade-mask">
    <div class="editcount-mask"></div>
  </transition>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
.editcount-mask
  position: fixed
  z-index: 300
  top: 0
  bottom: 0
  left: 0
  right: 0
  background-color: rgba(0,0,0,.6)
  
.fade-mask-enter-active,.fade-mask-leave-active
  transition: opacity .3s ease
.fade-mask-enter,.fade-mask-leave-active
  opacity: 0
</style>
