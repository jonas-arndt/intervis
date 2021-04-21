<template>
  <div class="slider-content">
    <div class="inside">
      <slot />
    </div>
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
  height: 100%;

  .inside {
    position: sticky;
    top: 0px;
    height: 100vh;
    padding-top: 20px;
    overflow-y: scroll;
  }
}
</style>
