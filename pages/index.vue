<template>
  <div ref="page" class="page index">
    <DialogContainer v-if="teaserIsVisible" class="intro">
      <Teaser />
    </DialogContainer>

    <FlipContainer ref="flipContainer" :flipped="projectDisclosureIsVisible">
      <!-- FlipContainer: front content start -->
      <template v-slot:front>
        <GridVisualization class="article-background" />
        <VerticalScrollContainer>
          <SliderContainer :slided-in="designDecisionsAreVisible" class="design-decisions-container">
            <ArticleContent />
          </SliderContainer>
        </VerticalScrollContainer>
      </template>
      <!-- FlipContainer: front content end -->

      <!-- FlipContainer: back content start-->
      <template v-slot:back>
        <ProjectDisclosure />
      </template>
      <!-- FlipContainer: back content end -->
    </FlipContainer>

    <PopupOverlay v-if="conceptDevelopmentIsVisible" class="overlay" @close="hideConceptDevelopment()">
      <template v-slot:title>
        <span v-html="$t('overlay1-title')" />
      </template>
      <template v-slot:content>
        <ConceptDevelopment />
      </template>
    </PopupOverlay>

    <PopupOverlay v-if="discriminationDimensionsAreVisible" class="overlay" @close="hideDiscriminationDimensions()">
      <template v-slot:title>
        <span v-html="$t('overlay2-title')" />
      </template>
      <template v-slot:content>
        <DimensionsDiscrimination />
      </template>
    </PopupOverlay>

    <QuickNavigation v-if="!projectDisclosureIsVisible" class="article-navigation" :style="quickNavigationStyles" />
    <GoogleLink v-show="questionnaireLinkIsVisible" class="google-link" />
    <Logger @logSendErrorOccured="handleLogSendError" @loggingIdDefined="handleDefinedLoggingId" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { scaleLinear } from 'd3-scale'

export default {
  data () {
    return {
      jsClass: 'js',
      questionnaireLinkTimeout: undefined,
      quickNavigationOpacity: 0
    }
  },
  computed: {
    ...mapState([
      'conceptDevelopmentIsVisible',
      'discriminationDimensionsAreVisible',
      'projectDisclosureIsVisible',
      'designDecisionsAreVisible',
      'teaserIsVisible',
      'questionnaireLinkIsVisible',
      'verticalScrollPosition',
      'nextStepsChapterStartPosition',
      'intersectionalityChapterStartPosition',
      'viewport'
    ]),
    quickNavigationStyles () {
      return {
        opacity: this.quickNavigationOpacity
      }
    },
    quickNavigationOpacityScaleDomain () {
      return [
        // 0 > 1
        this.intersectionalityChapterStartPosition + this.viewport.height,
        this.intersectionalityChapterStartPosition + 1.5 * this.viewport.height
      ]
    },
    quickNavigationOpacityScaleDomainMin () {
      return Math.min(...this.quickNavigationOpacityScaleDomain)
    },
    quickNavigationOpacityScaleDomainMax () {
      return Math.max(...this.quickNavigationOpacityScaleDomain)
    },
    quickNavigationOpacityScale () {
      return scaleLinear()
        .domain(this.quickNavigationOpacityScaleDomain)
        .range([0, 1])
        .clamp(true)
    }
  },
  watch: {
    verticalScrollPosition (scrollPosition) {
      if (!this.questionnaireLinkIsVisible && scrollPosition > this.nextStepsChapterStartPosition) {
        this.showQuestionnaireLink()
      }

      if (scrollPosition > this.quickNavigationOpacityScaleDomainMin) {
        if (scrollPosition < this.quickNavigationOpacityScaleDomainMax) {
          this.quickNavigationOpacity = this.quickNavigationOpacityScale(scrollPosition)
        } else if (this.quickNavigationOpacity !== 1) {
          this.quickNavigationOpacity = 1
        }
      } else if (this.quickNavigationOpacity !== 0) {
        this.quickNavigationOpacity = 0
      }
    }
  },
  mounted () {
    this.addJsClass()
    this.updateViewport()
    window.addEventListener('resize', this.handleResize)

    this.questionnaireLinkTimeout = setTimeout(this.showQuestionnaireLink, 300000) // 5 min => 5 * 60 * 1000
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
    clearTimeout(this.questionnaireLinkTimeout)
  },
  methods: {
    ...mapMutations([
      'hideConceptDevelopment',
      'hideDiscriminationDimensions',
      'setQuestionnaireLinkIsVisible',
      'setLoggingId',
      'setViewport'
    ]),
    addJsClass () {
      this.$refs.page.classList.add(this.jsClass)
    },
    handleResize () {
      this.updateViewport()
      this.$nuxt.$emit('windowResized')
    },
    updateViewport () {
      const width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
      const height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
      this.setViewport({ width, height })
    },
    handleDefinedLoggingId (loggingId) {
      this.setLoggingId(loggingId)
    },
    showQuestionnaireLink () {
      if (!this.questionnaireLinkIsVisible) {
        this.setQuestionnaireLinkIsVisible(true)
      }
    },
    handleLogSendError (error) {
      console.log('LogSendError:', error)
    }
  },
  head () {
    return {
      title: this.$t('page-title')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_variables";

.page {
  height: 100%;
  overflow: hidden;
  background-color: $color-white;

  .intro, .overlay {
    z-index: 500;
  }

  .design-decisions-container {
    height: 100%;
  }

  .article-background {
    position: absolute;
    width: 100vw;
    height: 100vh;

    z-index: -100;
  }

  .google-link {
    display: none;
    position: fixed;
    bottom: 3rem;
    left: 0;
    z-index: 400;
  }

  .article-navigation {
    display: none;
    position: fixed;
    top: 2rem;
    left: 0;

    z-index: 400;
  }

  @media (min-width: $media-breakpoint-min-m) {
    .feedback-button {
      display: block;
    }
  }
}

.page.js {
  .article-navigation {
    display: block;
  }

  .google-link {
    display: block;
  }
}
</style>
