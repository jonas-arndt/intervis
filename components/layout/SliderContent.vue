<template>
  <div class="slider-content">
    <slot />
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
@import "../../styles/_variables";

.slider-content {
  position: absolute;
  top: 0;
  left: 100%;
  width: 50%;
}

</style>
