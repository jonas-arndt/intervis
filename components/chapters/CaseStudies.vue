<template>
  <div class="chapter case_studies_from_germany">
    <div class="narrative">
      <div class="step">
        <h2 class="chapter-title" v-html="$t('chapter3-title')" />
        <p v-html="$t('chapter3-intro1')" />
      </div>
    </div>

    <CaseStudy1 />
    <CaseStudy2 />
    <CaseStudy3 />
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.chapter.case_studies_from_germany {
  padding-top: 30vh;
  padding-bottom: 20vh;

  h2 {
    color: $color-red;
    margin-bottom: 0.5em;
  }

  p {
    margin-bottom: 3em;
  }

  @media (min-width: $media-breakpoint-min-m) {
  }
}

</style>
