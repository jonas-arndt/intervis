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

    <CaseStudy1 id="case1" class="intersecting" :active="'case1' in chapterActiveState && chapterActiveState.case1" />
    <CaseStudy2 id="case2" class="intersecting" :active="'case1' in chapterActiveState && chapterActiveState.case2" />
    <CaseStudy3 id="case3" class="intersecting" :active="'case1' in chapterActiveState && chapterActiveState.case3" />

    <SliderContent>
      <DesignDecisions3 />
    </SliderContent>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { scaleLinear } from 'd3-scale'

export default {
  props: {
    chapterActiveState: {
      type: Object,
      default: () => { return {} }
    }
  },
  data () {
    return {
      slideInButtonOpacity: 0,
      triggeredSlideIn: false
    }
  },
  computed: {
    ...mapState([
      'verticalScrollPosition',
      'viewport',
      'caseStudyChapterStartPosition',
      'measuresChapterStartPosition',
      'designDecisionsAreVisible'
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
          this.caseStudyChapterStartPosition + 2.75 * this.viewport.height,
          this.caseStudyChapterStartPosition + 3 * this.viewport.height,

          // 1 > 0
          this.measuresChapterStartPosition - 1.25 * this.viewport.height,
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

      if (!this.triggeredSlideIn && !this.designDecisionsAreVisible && this.slideInButtonOpacity === 1) {
        this.toggleDesignDecisionsVisibility()
        this.triggeredSlideIn = true
      }
    }
  },
  methods: {
    ...mapMutations(['toggleDesignDecisionsVisibility'])
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
