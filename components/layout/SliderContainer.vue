<template>
  <div :class="['slider-container', 'layout', slidedIn ? 'slided-in' : '']">
    <div class="main-content">
      <slot name="main" />
    </div>
    <div class="slide-in-content">
      <slot name="slide-in" />
    </div>
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

  .main-content {
    height: 100%;
  }

  .slide-in-content {
    position: absolute;
    top: 0;
    left: 100%;
    width: 50%;

  }

  &.slided-in {
    left: -50%;
  }
}

</style>
