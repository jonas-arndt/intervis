<template>
  <div class="chapter what-is-intersectionality">
    <div class="screen-reader">
      <p v-html="$t('alt-tag-chapter1')" />
    </div>

    <SlideInToggleButton class="slide-in-toggle-button" :style="slideInButtonStyles">
      <span v-html="$t('disclosure-hint1')" />
    </SlideInToggleButton>

    <div class="narrative with-background">
      <div class="step">
        <h2 class="chapter-title" v-html="$t('chapter1-title')" />
        <p v-html="$t('chapter1-text1')" />
      </div>
      <div class="step">
        <p v-html="$t('chapter1-text2')" />
        <p class="detour">
          <RedBorderedButton :action="showConceptDevelopment">
            <span v-html="$t('chapter1-button')" />
          </RedBorderedButton>
        </p>
      </div>
    </div>

    <SliderContent>
      <DesignDecisions1 />
    </SliderContent>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
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
      'intersectionalityChapterStartPosition',
      'discriminationChapterStartPosition'
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
          this.intersectionalityChapterStartPosition + 0.25 * this.viewport.height,
          this.intersectionalityChapterStartPosition + 0.75 * this.viewport.height,

          // 1 > 0
          this.discriminationChapterStartPosition - 0.75 * this.viewport.height,
          this.discriminationChapterStartPosition - 0.25 * this.viewport.height
        ])
        .range([0, 1, 1, 0])
        .clamp(true)
    }
  },
  watch: {
    verticalScrollPosition (scrollPosition) {
      if (scrollPosition >= this.intersectionalityChapterStartPosition && scrollPosition <= this.discriminationChapterStartPosition) {
        this.slideInButtonOpacity = this.slideInButtonOpacityScale(scrollPosition)
      }
    }
  },
  methods: {
    ...mapMutations(['showConceptDevelopment'])
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/_variables";

.chapter.what-is-intersectionality {
  .slide-in-toggle-button {
    opacity: 0;
  }

  .narrative {
    padding-top: 50vh;
    padding-bottom: 50vh;

    .detour {
      margin-top: 3em;
    }

    .step {
      margin-bottom: 100vh;

      &:last-child {
        margin-bottom: inherit;
      }
    }
  }

  @media (min-width: $media-breakpoint-min-m) {
    .narrative {
      position: relative;
      padding-left: 10%;
      padding-right: 10%;

      .step {
        margin-bottom: 80vh;
      }
    }
  }

  @media (min-width: $media-breakpoint-min-l) {
    .narrative .step {
      width: $media-breakpoint-min-s;
    }
  }
}

</style>
