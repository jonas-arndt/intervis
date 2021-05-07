<template>
  <button class="red-button" @click="action()">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    action: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/_variables";

.red-button {
  display: inline-block;
  padding: 0.8em 1.2em 0.8em 1.2em;

  border-radius: 1.7em;
  border: none;
  background: $color-red;
  outline: none;

  font-family: $font-family-signika;
  color: white;

  cursor: pointer;
}
</style>
