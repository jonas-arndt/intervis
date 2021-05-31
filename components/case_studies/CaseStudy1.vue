<template>
  <div>
    <CaseStudyContainer class="case-study working-women">
      <template v-slot:background-visualization>
        <WorkingWomanVisualization :active="active" />
      </template>

      <template v-slot:content>
        <div class="step-container">
          <div class="screen-reader">
            <p v-html="$t('alt-tag-chapter3-example1-1')" />
          </div>

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

          <div class="screen-reader">
            <p v-html="$t('alt-tag-chapter3-example1-2')" />
          </div>

          <div class="step">
            <p v-html="$t('chapter3-example1-text5')" />
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
    ...mapMutations(['setCase1ChapterStartPosition']),
    updateChapterDimensions () {
      const rect = this.$el.getBoundingClientRect()
      const y = this.verticalScrollPosition + Math.round(rect.top)
      this.setCase1ChapterStartPosition(y)
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
    height: 800vh;
  }
}
</style>
