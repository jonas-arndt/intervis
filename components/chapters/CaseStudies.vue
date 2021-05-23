<template>
  <div class="chapter case_studies_from_germany">
    <SlideInToggleButton class="slide-in-toggle-button" :style="slideInButtonStyles">
      <span v-html="$t('disclosure-hint3')" />
    </SlideInToggleButton>

    <div class="narrative">
      <div class="step">
        <h2 class="chapter-title" v-html="$t('chapter3-title')" />
        <p v-html="$t('chapter3-intro1')" />
      </div>
    </div>

    <CaseStudy1 id="case-study-1" class="intersecting" />
    <CaseStudy2 id="case-study-2" class="intersecting" />
    <CaseStudy3 id="case-study-3" class="intersecting" />

    <SliderContent>
      <DesignDecisions3 />
    </SliderContent>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { scaleLinear } from 'd3-scale'

export default {
  data () {
    return {
      slideInButtonOpacity: 0
    }
  },
  computed: {
    ...mapState([
      'verticalScrollPosition',
      'viewport',
      'caseStudyChapterStartPosition',
      'measuresChapterStartPosition'
    ]),
    slideInButtonStyles () {
      return {
        opacity: this.slideInButtonOpacity
      }
    },
    slideInButtonOpacityScale () {
      return scaleLinear()
        .domain([
          // 0 > 1
          this.caseStudyChapterStartPosition + 1.5 * this.viewport.height,
          this.caseStudyChapterStartPosition + 2 * this.viewport.height,

          // 1 > 0
          this.measuresChapterStartPosition - 1.5 * this.viewport.height,
          this.measuresChapterStartPosition - this.viewport.height
        ])
        .range([0, 1, 1, 0])
        .clamp(true)
    }
  },
  watch: {
    verticalScrollPosition (scrollPosition) {
      if (scrollPosition >= this.caseStudyChapterStartPosition && scrollPosition <= this.measuresChapterStartPosition) {
        this.slideInButtonOpacity = this.slideInButtonOpacityScale(scrollPosition)
      }
    }
  }
}
</script>

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

  .slide-in-toggle-button {
    opacity: 0;
  }

  @media (min-width: $media-breakpoint-min-m) {
  }
}

</style>
