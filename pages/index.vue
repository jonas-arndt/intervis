<template>
  <div ref="page" class="page index">
    <DialogContainer v-if="teaserIsVisible" class="intro">
      <Teaser />
    </DialogContainer>

    <FlipContainer ref="flipContainer" :flipped="projectDisclosureIsVisible">
      <!-- FlipContainer: front content start -->
      <template v-slot:front>
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

    <QuickNavigation v-if="!projectDisclosureIsVisible" class="article-navigation" />
    <GoogleLink v-show="questionnaireLinkIsVisible" class="google-link" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      jsClass: 'js',
      questionnaireLinkTimeout: undefined
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
      'nextStepsChapterStartPosition'
    ])
  },
  watch: {
    verticalScrollPosition (scrollPosition) {
      if (!this.questionnaireLinkIsVisible && scrollPosition > this.nextStepsChapterStartPosition) {
        this.showQuestionnaireLink()
      }
    }
  },
  mounted () {
    this.addJsClass()
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
      'setQuestionnaireLinkIsVisible'
    ]),
    addJsClass () {
      this.$refs.page.classList.add(this.jsClass)
    },
    handleResize () {
      this.$nuxt.$emit('windowResized')
    },
    showQuestionnaireLink () {
      if (!this.questionnaireLinkIsVisible) {
        this.setQuestionnaireLinkIsVisible(true)
      }
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

  .intro, .overlay {
    z-index: 500;
  }

  .design-decisions-container {
    height: 100%;
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
