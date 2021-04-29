<template>
  <div ref="page" class="page index no-js">
    <DialogContainer v-if="teaserIsVisible" class="intro">
      <Teaser />
    </DialogContainer>

    <FlipContainer ref="flipContainer" :flipped="projectDisclosureIsVisible">
      <!-- FlipContainer: front content start -->
      <template v-slot:front>
        <SliderContainer :slided-in="designDecisionsAreVisible" class="design-decisions-container">
          <ArticleContent />
        </SliderContainer>
      </template>
      <!-- FlipContainer: front content end -->

      <!-- FlipContainer: back content start-->
      <template v-slot:back>
        <ProjectDisclosure />
      </template>
      <!-- FlipContainer: back content end -->
    </FlipContainer>

    <PopupOverlay v-if="conceptDevelopmentIsVisible" class="overlay" @close="hideConceptDevelopment()">
      <ConceptDevelopment />
    </PopupOverlay>

    <PopupOverlay v-if="discriminationDimensionsAreVisible" class="overlay" @close="hideDiscriminationDimensions()">
      <DimensionsDiscrimination />
    </PopupOverlay>

    <QuickNavigation class="article-navigation" />
    <MailFeedbackButton class="feedback-button" />
    <GoogleLink class="google-link" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      noJsClass: 'no-js'
    }
  },
  computed: {
    ...mapState([
      'conceptDevelopmentIsVisible',
      'discriminationDimensionsAreVisible',
      'projectDisclosureIsVisible',
      'designDecisionsAreVisible',
      'teaserIsVisible'
    ])
  },
  mounted () {
    this.removeNoJsClass()
  },
  methods: {
    ...mapMutations(['hideConceptDevelopment', 'hideDiscriminationDimensions']),
    removeNoJsClass () {
      if (this.$refs.page.classList.contains(this.noJsClass)) {
        this.$refs.page.classList.remove(this.noJsClass)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_variables";

.page {
  height: 100%;

  .intro, .overlay {
    z-index: 500;
  }

  .design-decisions-container {
    height: 100%;
  }

  .feedback-button {
    display: none;

    position: fixed;
    bottom: 3rem;
    left: 0;

    z-index: 400;
  }

  .google-link {
    position: fixed;
    right: 2rem;
    bottom: 2rem;
  }

  .article-navigation {
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

</style>
