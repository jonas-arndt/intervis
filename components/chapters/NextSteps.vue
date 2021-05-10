<template>
  <div class="and-now">
    <FullWidthContent>
      <h2 class="chapter-title" v-html="$t('chapter5-title')" />
      <p v-html="$t('chapter5-text1')" />

      <h3 v-html="$t('chapter5-subtitle2')" />
      <p v-html="$t('chapter5-text2')" />
      <PersonalSuggestions />

      <h3 v-html="$t('chapter5-subtitle3')" />
      <p v-html="$t('chapter5-text3')" />
      <FurtherReadingLists />
    </FullWidthContent>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.and-now {
  background-color: $color-light-grey;
  padding-top: 1rem;
  padding-bottom: 1rem;

  .chapter-title {
    font-weight: 700;
    margin-bottom: 0.6em;
  }

  h2 {
    margin-bottom: 1.8rem;
  }

  h3 {
    font-size: $font-size-subtitle;
    margin-top: 4rem;
    margin-bottom: 1.6rem;
    font-weight: 400;
  }

  @media (min-width: $media-breakpoint-min-m) {
    padding-top: 3rem;
    padding-bottom: 5rem;
  }
}
</style>
