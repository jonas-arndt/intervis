<template>
  <div>
    <CaseStudyContainer class="case-study working-women">
      <template v-slot:background-visualization>
        <WorkingWomanVisualization />
      </template>

      <template v-slot:content>
        <div class="step">
          <h3 class="case-study-title" v-html="$t('chapter3-example1-title')" />
          <p v-html="$t('chapter3-example1-text1')" />
        </div>

        <div class="step">
          <p v-html="$t('chapter3-example1-text2')" />
          <blockquote v-html="$t('chapter3-example1-trend')" />
          <p v-html="$t('chapter3-example1-text3')" />
        </div>

        <div class="step">
          <p v-html="$t('chapter3-example1-text4')" />
        </div>

        <div class="step">
          <p v-html="$t('chapter3-example1-text5')" />
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
