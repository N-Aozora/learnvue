<template>
  <input type="number" name="" :value="value" @input="updateValue" @blur="inputblur">
</template>

<script>
export default {
  props: {
    value: Number,
    defaultValue: Number,
    max: Number,
    stock: Number
  },
  methods: {
    updateValue (event) {
      let value = parseInt(event.target.value)
      if (isNaN(value)) {
        if (!event.target.validity.valid) {
          value = this.defaultValue || 0
        }
      }
      if (value > this.max) value = this.max
      if (value > this.stock) value = this.stock
      event.target.value = value
      this.$emit("input", value)
    },
    inputblur (event) {
      let val = parseInt(event.target.value)
      isNaN(val) && (val = 1)
      if (val !== event.target.value) {
        event.target.value = val
        this.$emit("input", val)
      }
    }
  }

}
</script>
