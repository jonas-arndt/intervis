<template>
  <div>
    <CaseStudyContainer class="case-study working-women">
      <template v-slot:background-visualization>
        <WorkingHandicappedVisualization :active="active" />
      </template>

      <template v-slot:content>
        <div class="screen-reader">
          <p v-html="$t('alt-tag-chapter3-example3-1')" />
        </div>

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

        <div class="screen-reader">
          <p v-html="$t('alt-tag-chapter3-example3-2')" />
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
    ...mapMutations(['setCase3ChapterStartPosition']),
    updateChapterDimensions () {
      const rect = this.$el.getBoundingClientRect()
      const y = this.verticalScrollPosition + Math.round(rect.top)
      this.setCase3ChapterStartPosition(y)
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
}
</style>
