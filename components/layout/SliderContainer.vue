<template>
  <div :class="['slider-container', 'layout', slidedIn ? 'slided-in' : '']">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    slidedIn: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/_variables";

.slider-container {
  position: relative;
  height: 100%;
  left: 0;

  transition: 1s;

  &.slided-in {
    left: -50%;
  }
}

</style>
