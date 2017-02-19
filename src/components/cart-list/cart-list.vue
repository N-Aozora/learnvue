<template lang="html">
  <ul>
    <slot></slot>
  </ul>
</template>

<script>
export default {
  props: {
    cartGroup: Array
  },
  computed: {
    isGroupAllChoice () {
      return this.cartGroup.every(function (item, index) {
        return item.isshelves === 0 ? true : item.ischoice
      })
    }
  },
  components: {
    
  }
}
</script>

<style lang="css">
</style>
