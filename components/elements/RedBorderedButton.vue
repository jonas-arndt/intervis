<template>
  <button class="red-bordered-button" @click="action()">
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

.red-bordered-button {
  display: inline-block;
  padding: 0.5em 0.8em 0.5em 0.8em;

  border-radius: 1.7em;
  border: 1px solid $color-red;
  background-color: $color-white;
  outline: none;

  font-family: $font-family-signika;
  color: $color-red;

  cursor: pointer;
}
</style>
