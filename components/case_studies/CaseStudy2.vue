<template>
  <div>
    <CaseStudyContainer class="case-study working-women">
      <template v-slot:background-visualization>
        <SchoolVisualization :active="active" />
      </template>

      <template v-slot:content>
        <div class="step-container">
          <div class="screen-reader">
            <p v-html="$t('alt-tag-chapter3-example2-1')" />
          </div>

          <div class="step step1">
            <h3 class="case-study-title" v-html="$t('chapter3-example2-title')" />
            <p v-html="$t('chapter3-example2-text1')" />
          </div>

          <div class="step step2">
            <p v-html="$t('chapter3-example2-text2')" />
          </div>

          <div class="screen-reader">
            <p v-html="$t('alt-tag-chapter3-example2-2')" />
          </div>

          <div class="step step3">
            <p v-html="$t('chapter3-example2-text3')" />
          </div>

          <div class="screen-reader">
            <p v-html="$t('alt-tag-chapter3-example2-3')" />
          </div>

          <div class="step step4">
            <p v-html="$t('chapter3-example2-text4')" />
            <blockquote v-html="$t('chapter3-example2-trend')" />
            <p v-html="$t('chapter3-example2-text5')" />
          </div>
        </div>
      </template>
    </CaseStudyContainer>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState(['verticalScrollPosition'])
  },
  watch: {
    active (active) {
      if (active) {
        this.updateChapterDimensions()
      }
    }
  },
  mounted () {
    this.$nuxt.$on('windowResized', this.updateChapterDimensions)
    this.updateChapterDimensions()
  },
  methods: {
    ...mapMutations(['setCase2ChapterStartPosition']),
    updateChapterDimensions () {
      const rect = this.$el.getBoundingClientRect()
      const y = this.verticalScrollPosition + Math.round(rect.top)
      this.setCase2ChapterStartPosition(y)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/_variables";

.case-study.working-women {
  .case-study-title {
    font-size: $font-size-subtitle;
    margin-bottom: 0.6em;
  }

  .step-container {
    position: relative;
    height: 675vh;
  }

  .step {
    position: relative;

    &.step2 {
      top: 100vh;
    }
    &.step3 {
      top: 200vh;
    }
    &.step4 {
      top: 300vh;
    }
  }
}
</style>
