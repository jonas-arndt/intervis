<template>
  <div class="slider-content">
    <div class="inside">
      <div class="scroll-container">
        <h2 class="title" v-html="$t('slidein-title')" />
        <slot />
      </div>
      <RedButton class="disclosure-button" :action="toggleDisclosureVisibility">
        <span v-html="$t('slidein-button')" />
      </RedButton>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['toggleDisclosureVisibility'])
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/_variables";

.slider-content {
  position: absolute;
  top: 0;
  left: 100%;
  width: 50%;
  height: 100%;
  z-index: 10;
  background-color: $color-white;

  .inside {
    position: sticky;
    top: 0px;
    height: 100vh;

    .scroll-container {
      position: relative;
      width: 100%;
      height: 100%;
      overflow-y: scroll;

      padding: 1.5rem 1rem 1.5rem 1rem;
    }

    .title {
      font-weight: 700;
      font-size: $font-size-title-caption;
      margin-bottom: 2rem;
    }

    .disclosure-button {
      position: absolute;
      bottom: 2rem;
      right: 2rem;

      font-size: $font-size-small;
    }
  }
}
</style>
