<template>
  <div class="slider-content">
    <div class="inside">
      <div class="close-button">
        <a @click.prevent="toggleDesignDecisionsVisibility">
          <img :src="require('~/assets/icons/close.svg')">
        </a>
      </div>
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
    ...mapMutations(['toggleDisclosureVisibility', 'toggleDesignDecisionsVisibility'])
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/_variables";

.slider-content {
  position: absolute;
  top: 0;
  left: 100%;
  width: 100%;
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
      overflow-y: auto;

      padding: 1.5rem 1rem 1.5rem 1rem;
    }

    .title {
      font-weight: 700;
      font-size: $font-size-title-caption;
      margin-bottom: 2rem;
    }

    .close-button {
      position: absolute;
      right: 1.5rem;
      top: 1.5rem;
      z-index: 10;
      cursor: pointer;

      background-color: $color-white;
    }

    .disclosure-button {
      position: absolute;
      bottom: 2rem;
      right: 2rem;
    }
  }

  @media (min-width: $media-breakpoint-min-m) {
    width: $media-breakpoint-min-s;

    .close-button {
      display: none;
    }
  }
}
</style>
