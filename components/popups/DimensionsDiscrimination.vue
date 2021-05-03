<template>
  <div class="chapter dimensions-of-discrimination">
    <div class="block">
      <h3 class="block-title" v-html="$t('overlay2-subtitle1')" />
      <p class="text" v-html="$t('overlay2-text1')" />
    </div>

    <div class="block">
      <img class="icon" :src="require('~/assets/icons/dimensions/dimension_individuell.svg')">
      <h3 class="block-title" v-html="$t('overlay2-subtitle2')" />
      <p class="text" v-html="$t('overlay2-text2')" />
    </div>

    <div class="block">
      <img class="icon" :src="require('~/assets/icons/dimensions/dimension_strukturell.svg')">
      <h3 class="block-title" v-html="$t('overlay2-subtitle3')" />
      <p class="text" v-html="$t('overlay2-text3')" />
    </div>

    <div class="block">
      <img class="icon" :src="require('~/assets/icons/dimensions/dimension_institutionell.svg')">
      <h3 class="block-title" v-html="$t('overlay2-subtitle4')" />
      <p class="text" v-html="$t('overlay2-text4')" />
    </div>

    <div class="block">
      <img class="icon" :src="require('~/assets/icons/dimensions/dimension_historisch.svg')">
      <h3 class="block-title" v-html="$t('overlay2-subtitle5')" />
      <p class="text" v-html="$t('overlay2-text5')" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../styles/_variables";

.chapter.dimensions-of-discrimination {
  .block:last-child {
    & > *:last-child {
      margin-bottom: 0;
    }
  }

  h3 {
    font-size: $font-size-subtitle;
    font-weight: 400;
  }

  @media (min-width: $media-breakpoint-min-m) {
    white-space: nowrap;

    .block {
      display: inline-block;
      position: relative;
      height: 100%;
      width: 80vw;

      white-space: normal;
    }

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
