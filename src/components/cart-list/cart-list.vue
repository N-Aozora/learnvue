<template lang="html">
  <ul>
    <cart-item v-for="item in cartGroup" :elem="item">
    </cart-item>
    <p>{{isGroupAllChoice}}</p>
  </ul>
</template>

<script>
import Cart_Item from 'components/cart-item/cart-item.vue'

export default {
  props: {
    cartGroup: Array
  },
  computed: {
    isGroupAllChoice () {
      return this.cartGroup.every(function (item, index) {
        if (item.isshelves === 0) return true
        console.log(item.isshelves,item.ischoice)
        return item.ischoice
      })
    }
  },
  components: {
    "cart-item": Cart_Item
  }
}
</script>

<style lang="css">
</style>
