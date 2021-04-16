<template>
  <div class="chapter what-is-intersectionality">
    <SlideInToggleButton />
    <div class="narrative">
      <div class="step">
        <h2 class="chapter-title">
          1 {{ $t('chapter1-title') }}
        </h2>
        <p>
          {{ $t('chapter1-text1') }}
        </p>
      </div>
      <div class="step">
        <p>
          {{ $t('chapter1-text2') }}
        </p>
        <p class="detour">
          <button class="red-button" @click="showConceptDevelopment">
            {{ $t('chapter1-button') }}
          </button>
        </p>
      </div>
    </div>

    <PopupOverlay v-if="conceptDevelopmentIsVisible" @close="hideConceptDevelopment()">
      <ConceptDevelopment />
    </PopupOverlay>
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
  position: relative;

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
