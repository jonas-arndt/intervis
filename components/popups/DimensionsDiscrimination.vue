<template>
  <div class="chapter dimensions-of-discrimination horizontal-content">
    <h2 class="chapter-title">
      {{ $t('overlay2-title') }}
    </h2>
    <div class="content">
      <div class="block">
        <h3 class="block-title">
          {{ $t('overlay2-subtitle1') }}
        </h3>
        <p class="text">
          {{ $t('overlay2-text1') }}
        </p>
      </div>

      <div class="block">
        <img class="icon" :src="require('~/assets/icons/dimensions/dimension_individuell.svg')">
        <h3 class="block-title">
          {{ $t('overlay2-subtitle2') }}
        </h3>
        <p class="text">
          {{ $t('overlay2-text2') }}
        </p>
      </div>

      <div class="block">
        <img class="icon" :src="require('~/assets/icons/dimensions/dimension_strukturell.svg')">
        <h3 class="block-title">
          {{ $t('overlay2-subtitle3') }}
        </h3>
        <p class="text">
          {{ $t('overlay2-text3') }}
        </p>
      </div>

      <div class="block">
        <img class="icon" :src="require('~/assets/icons/dimensions/dimension_institutionell.svg')">
        <h3 class="block-title">
          {{ $t('overlay2-subtitle4') }}
        </h3>
        <p class="text">
          {{ $t('overlay2-text4') }}
        </p>
      </div>

      <div class="block">
        <img class="icon" :src="require('~/assets/icons/dimensions/dimension_historisch.svg')">
        <h3 class="block-title">
          {{ $t('overlay2-subtitle5') }}
        </h3>
        <p class="text">
          {{ $t('overlay2-text5') }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../styles/_variables";

.chapter.dimensions-of-discrimination {
  h3 {
    font-size: $font-size-subtitle;
    font-weight: 400;
  }

  @media (min-width: $media-breakpoint-min-m) {
    .icon {
      position: absolute;
      top: 2rem;
      width: 3rem;
    }

    .block-title {
      position: absolute;
      top: 6rem;
    }

    .text {
      position: absolute;
      top: 7rem;
      padding-top: 1rem;
    }
  }
}
</style>
