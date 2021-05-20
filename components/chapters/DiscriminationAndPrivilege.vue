<template>
  <div class="chapter discrimination_and_privilege">
    <SlideInToggleButton>
      <span v-html="$t('disclosure-hint2')" />
    </SlideInToggleButton>

    <DiscriminationVisualization class="background-visualization" />
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
import { mapMutations } from 'vuex'

export default {
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
