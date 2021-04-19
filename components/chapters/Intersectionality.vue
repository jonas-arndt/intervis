<template>
  <div class="chapter what-is-intersectionality">
    <SlideInToggleButton>
      <span v-html="$t('disclosure-hint1')" />
    </SlideInToggleButton>

    <div class="narrative">
      <div class="step">
        <h2 class="chapter-title" v-html="$t('chapter1-title')" />
        <p v-html="$t('chapter1-text1')" />
      </div>
      <div class="step">
        <p v-html="$t('chapter1-text2')" />
        <p class="detour">
          <button class="red-button" @click="showConceptDevelopment" v-html="$t('chapter1-button')" />
        </p>
      </div>
    </div>

    <PopupOverlay v-if="conceptDevelopmentIsVisible" @close="hideConceptDevelopment()">
      <ConceptDevelopment />
    </PopupOverlay>

    <SliderContent>
      <DesignDecisions1 />
    </SliderContent>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['conceptDevelopmentIsVisible'])
  },
  methods: {
    ...mapMutations(['showConceptDevelopment', 'hideConceptDevelopment'])
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/_variables";

.chapter.what-is-intersectionality {
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
}

</style>
