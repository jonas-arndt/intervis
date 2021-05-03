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
  font-size: $font-size-small;

  .block:last-child {
    & > *:last-child {
      margin-bottom: 0;
    }
  }

  .block-title {
    font-size: $font-size-default;
    font-weight: normal;
    margin-bottom: 0.5em;
  }

  .icon {
    width: 4rem;
    margin-top: 2em;
    margin-bottom: 1em;
  }

  @media (min-width: $media-breakpoint-min-m) {
    white-space: nowrap;

    .block {
      display: inline-block;
      position: relative;
      white-space: normal;
      height: 100%;

      // popup overlay padding 1rem
      // content padding: 2rem
      width: 42vw;
      margin-right: 5vw;

      &:first-child {
        margin-left: 2rem;
      }

      &:last-child {
        margin-right: 2rem;
      }
    }

    .icon {
      position: absolute;
      top: 0.5rem;
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

  @media (min-width: $media-breakpoint-min-l) {
    .block {
      width: 28vw;
      margin-right: 4vw;
    }
  }
}
</style>
