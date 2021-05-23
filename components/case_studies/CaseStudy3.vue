<template>
  <div>
    <CaseStudyContainer class="case-study working-women">
      <template v-slot:background-visualization>
        <WorkingHandicappedVisualization />
      </template>

      <template v-slot:content>
        <div class="step">
          <h3 class="case-study-title" v-html="$t('chapter3-example3-title')" />
          <p v-html="$t('chapter3-example3-text1')" />
        </div>

        <div class="step">
          <p v-html="$t('chapter3-example3-text2')" />
        </div>

        <div class="step">
          <p v-html="$t('chapter3-example3-text3')" />
        </div>

        <div class="step">
          <p v-html="$t('chapter3-example3-text4')" />
          <blockquote v-html="$t('chapter3-example3-trend')" />
          <p v-html="$t('chapter3-example3-text5')" />
        </div>
      </template>
    </CaseStudyContainer>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.case-study.working-women {
  .case-study-title {
    font-size: $font-size-subtitle;
    margin-bottom: 0.6em;
  }
}
</style>
