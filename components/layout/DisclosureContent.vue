<template>
  <div class="disclosure content">
    <slot />

    <RedBorderedButton class="return-button" :action="toggleDisclosureVisibility">
      <span v-html="$t('backside-button')" />
    </RedBorderedButton>
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

<style lang="scss">
@import "../../styles/_variables";

.disclosure.content {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  overflow-y: auto;

  h2 {
    margin-bottom: 1.2rem;

    &.spaced-title {
      margin-top: 3.2rem;
      margin-bottom: -1.2rem;
    }
  }

  h3 {
    font-size: $font-size-title-caption;
    font-style: italic;
    font-family: $font-family-pt-serif;
    margin-top: 2.4rem;
    margin-bottom: 0.8rem;
  }

  img {
    max-width: 100%;
  }

  .return-button {
    position: relative;
    margin-top: 1.5em;
    background-color: $color-white;
    width: 100%;
  }

  @media (min-width: $media-breakpoint-min-m) {
    .return-button {
      display: none;
    }
  }
}
</style>
