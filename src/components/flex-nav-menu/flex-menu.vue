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
  align-items: flex-end
  padding: 10px 0

</style>
