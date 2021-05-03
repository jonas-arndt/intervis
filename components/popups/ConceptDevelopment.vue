<template>
  <div class="chapter concept-development">
    <div class="block">
      <p class="text teaser" v-html="$t('overlay1-intro')" />
    </div>

    <div class="block">
      <div class="title usa icon">
        <h3 class="label" v-html="$t('overlay1-subtitle1')" />
      </div>
      <h4 class="block-title" v-html="$t('overlay1-heading1')" />
      <p class="text" v-html="$t('overlay1-text1')" />
    </div>

    <div class="block columned">
      <h4 class="block-title" v-html="$t('overlay1-heading2')" />
      <p class="text" v-html="$t('overlay1-text2')" />
    </div>

    <div class="block">
      <h4 class="block-title" v-html="$t('overlay1-heading3')" />
      <p class="text" v-html="$t('overlay1-text3')" />
    </div>

    <div class="block columned">
      <div class="title germany icon">
        <h3 class="label" v-html="$t('overlay1-subtitle2')" />
      </div>
      <h4 class="block-title" v-html="$t('overlay1-heading4')" />
      <p class="text" v-html="$t('overlay1-text4')" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../styles/_variables";

.concept-development {
  font-size: $font-size-small;

  .block:last-child {
    & > *:last-child {
      margin-bottom: 0;
    }
  }

  p.teaser {
    font-style: italic;
  }

  .block-title {
    font-weight: bold;
    font-style: italic;
    font-size: $font-size-default;

    margin-bottom: 0.5em;
  }

  .title {
    font-size: $font-size-title-caption;
    font-weight: normal;
    margin-top: 2em;
    margin-bottom: 1em;

    &.germany {
      height: 4.5rem;
      background: url('~assets/icons/states/deutschland.svg') no-repeat;
      background-size: contain;

      .label {
        position: relative;
        left: 1.7rem;
        top: 2rem;
      }
    }
    &.usa {
      height: 3.3rem;
      background: url('~assets/icons/states/usa.svg') no-repeat;
      background-size: contain;

      .label {
        position: relative;
        left: 3.5rem;
        top: 2.3rem;
      }
    }
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

    .title {
      position: absolute;
      top: 0;

      margin-top: 1.5rem;
      margin-bottom: 0.75rem;

      .label {
        font-weight: 400;
        font-size: $font-size-subtitle;
      }
    }

    .block-title {
      position: absolute;
      top: 6rem;
    }

    .text {
      position: absolute;
      top: 6.5rem;
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
