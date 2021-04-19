<template>
  <div class="chapter title">
    <div class="inside">
      <LanguageSwitcher class="language-switcher" />

      <div class="title-block">
        <span class="date" v-html="$t('startscreen-date')" />
        <div class="title-container">
          <h1 v-html="$t('startscreen-title')" />
          <p class="subtitle" v-html="$t('startscreen-subtitle')" />
        </div>
        <p class="introduction" v-html="$t('startscreen-intro')" />
      </div>

      <span class="instruction" v-html="$t('startscreen-hint')" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.chapter.title {
  padding: 1rem;

  .language-switcher {
    margin-bottom: 1.5rem;
  }

  .date {
    font-family: $font-family-signika;
    font-weight: 600;
  }

  h1 {
    font-weight: 700;
  }

  .subtitle {
    font-family: $font-family-signika;
    font-weight: 400;
    font-size: $font-size-title-caption;
  }

  .introduction {
    font-size: $font-size-title-caption;
    font-style: italic;
  }

  .instruction {
    position: absolute;
    left: 1rem;
    bottom: 1rem;

    font-family: $font-family-signika;
    color: $color-red;

    &:before {
      content: "↓";
    }
  }

  @media (min-height: 33rem) {
    height: 100vh;

    .title-block {
      position: relative;
      top: 45vh;
      margin-top: -15rem;
    }
  }

  @media (min-width: $media-breakpoint-min-m) {
    padding: 10%;
    padding-top: 3rem;

    .instruction {
      left: 10%;
      bottom: 2rem;

      &:before {
        display: inline-block;
        position: relative;
        top: 0.4em;
        width: 1.5em;
        height: 1.5em;
        content: " ";
        background: url('~assets/icons/red-arrow-down.svg') no-repeat;
        background-size: contain;
      }
    }
  }
}
</style>
