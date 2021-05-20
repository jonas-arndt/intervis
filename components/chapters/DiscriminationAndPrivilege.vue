<template>
  <div class="chapter discrimination_and_privilege">
    <SlideInToggleButton class="slide-in-toggle-button" :style="slideInButtonStyles">
      <span v-html="$t('disclosure-hint2')" />
    </SlideInToggleButton>

    <DiscriminationVisualization class="background-visualization" :active="active" />
    <div class="narrative">
      <div class="step">
        <h2 class="chapter-title" v-html="$t('chapter2-title')" />
        <p v-html="$t('chapter2-text1')" />
      </div>
      <div class="step">
        <p v-html="$t('chapter2-text2')" />
      </div>
      <div class="step">
        <p v-html="$t('chapter2-text3')" />
        <p class="detour">
          <RedBorderedButton :action="showDiscriminationDimensions">
            <span v-html="$t('chapter2-button')" />
          </RedBorderedButton>
        </p>
      </div>
    </div>

    <SliderContent>
      <DesignDecisions2 />
    </SliderContent>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { scaleLinear } from 'd3-scale'

export default {
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      slideInButtonOpacity: 0
    }
  },
  computed: {
    ...mapState([
      'verticalScrollPosition',
      'viewport',
      'discriminationChapterStartPosition',
      'caseStudyChapterStartPosition'
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
          this.discriminationChapterStartPosition + this.viewport.height,
          this.discriminationChapterStartPosition + 1.5 * this.viewport.height,

          // 1 > 0
          this.caseStudyChapterStartPosition - 1.5 * this.viewport.height,
          this.caseStudyChapterStartPosition - this.viewport.height
        ])
        .range([0, 1, 1, 0])
        .clamp(true)
    }
  },
  watch: {
    verticalScrollPosition (scrollPosition) {
      if (scrollPosition >= this.discriminationChapterStartPosition && scrollPosition <= this.caseStudyChapterStartPosition) {
        this.slideInButtonOpacity = this.slideInButtonOpacityScale(scrollPosition)
      }
    }
  },
  methods: {
    ...mapMutations(['showDiscriminationDimensions'])
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/_variables";

.chapter.discrimination_and_privilege {
  .narrative {
    padding-top: 50vh;
    padding-bottom: 50vh;

    .step {
      margin-bottom: 100vh;
    }
  }

  h2 {
    color: $color-red;
    margin-bottom: 1rem;
  }

  .slide-in-toggle-button {
    opacity: 0;
  }

  .detour {
    margin-top: 3em;
  }

  .background-visualization {
    z-index: -100;
    position: sticky;
    top: 0;
  }

  @media (min-width: $media-breakpoint-min-m) {
    .narrative {
      .step {
        margin-bottom: 20vh;
      }
    }
  }
}
</style>
