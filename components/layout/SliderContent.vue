<template>
  <div class="slider-content">
    <div class="inside">
      <h2 class="title" v-html="$t('slidein-title')" />
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
    overflow-y: scroll;

    padding: 1.5rem 1rem 1.5rem 1rem;

    .title {
      font-weight: 700;
      font-size: $font-size-title-caption;
    }
  }
}
</style>
