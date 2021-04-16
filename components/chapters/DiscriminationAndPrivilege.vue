<template>
  <div class="chapter discrimination_and_privilege">
    <SlideInToggleButton />
    <DiscriminationVisualization class="background-visualization" />
    <div class="narrative">
      <div class="step">
        <h2 class="chapter-title">
          2 {{ $t('chapter2-title') }}
        </h2>
        <p>
          {{ $t('chapter2-text1') }}
        </p>
      </div>
      <div class="step">
        <p>
          {{ $t('chapter2-text2') }}
        </p>
      </div>
      <div class="step">
        <p>
          {{ $t('chapter2-text3') }}
        </p>
        <p class="detour">
          <button class="red-button" @click="showDiscriminationDimensions">
            {{ $t('chapter2-button') }}
          </button>
        </p>
      </div>
    </div>

    <PopupOverlay v-if="discriminationDimensionsAreVisible" @close="hideDiscriminationDimensions()">
      <DimensionsDiscrimination />
    </PopupOverlay>

    <SliderContent>
      <DesignDecisions2 />
    </SliderContent>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['discriminationDimensionsAreVisible'])
  },
  methods: {
    ...mapMutations(['showDiscriminationDimensions', 'hideDiscriminationDimensions'])
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
