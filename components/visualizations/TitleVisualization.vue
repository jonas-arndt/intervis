<template>
  <div class="title-visualization" :style="{ opacity }">
    <div class="text">
      <img v-if="$i18n.locale == 'en'" src="~/assets/teaser/teaser-text-en.svg" alt="Access, Inclusion, Participation, Acknowledgment">
      <img v-if="$i18n.locale == 'de'" src="~/assets/teaser/teaser-text-de.svg" alt="Zugang, Integration, Teilhabe, Anerkennung">
    </div>
    <div class="single-lines" :style="singleLinesStyles">
      <div class="horizontal-lines" />
    </div>
    <div class="grid" :style="gridStyles">
      <div class="grid-visualization" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { scaleLinear } from 'd3-scale'

export default {
  computed: {
    ...mapState([
      'introductionStartPosition',
      'intersectionalityChapterStartPosition',
      'verticalScrollPosition',
      'verticalViewportCenter'
    ]),
    staticViewHeight () {
      // start (static) > transition > lines (static) > transition > grid (static) > outro (fade out) > blank screen
      const totalStaticHeight = this.intersectionalityChapterStartPosition - this.introductionStartPosition - 2 * this.transitionHeight - this.outroHeight - 2 * this.verticalViewportCenter
      return Math.round(totalStaticHeight / 3)
    },
    outroHeight () {
      return 2 * this.verticalViewportCenter
    },
    transitionHeight () {
      return 2 * this.verticalViewportCenter
    },
    singleLinesStyles () {
      const domain = [
        this.introductionStartPosition + this.staticViewHeight,
        this.introductionStartPosition + this.staticViewHeight + this.transitionHeight
      ]
      const range = [0, 1]
      const scale = scaleLinear()
        .domain(domain).range(range).clamp(true)
      const opacity = scale(this.verticalScrollPosition)

      return {
        opacity,
        zIndex: opacity > 0.4 ? 30 : 10
      }
    },
    gridStyles () {
      const domain = [
        this.introductionStartPosition + 2 * this.staticViewHeight + this.transitionHeight,
        this.introductionStartPosition + 2 * this.staticViewHeight + 2 * this.transitionHeight
      ]
      const range = [0, 1]
      const scale = scaleLinear()
        .domain(domain).range(range).clamp(true)
      const opacity = scale(this.verticalScrollPosition)

      return {
        opacity,
        zIndex: opacity > 0.4 ? 29 : 9
      }
    },
    opacity () {
      const domain = [
        this.intersectionalityChapterStartPosition - 2 * this.verticalViewportCenter - this.outroHeight,
        this.intersectionalityChapterStartPosition - 2 * this.verticalViewportCenter
      ]
      const range = [1, 0]
      return scaleLinear()
        .domain(domain).range(range).clamp(true)(this.verticalScrollPosition)
    }
  }
}

</script>

<style scoped lang="scss">
@import "../../styles/_variables";

.title-visualization {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  .text {
    position: relative;
    z-index: 20;

    img {
      position: relative;
      display: inline-block;
      vertical-align: middle;
      height: 100%;
      top: 5vh;
      left: 1rem;
      max-width: 90%;
      max-height: 90vh;
    }
  }

  .single-lines, .grid {
    position: absolute;
    top: -50vh;
    left: -50vw;
    width: 200%;
    height: 200%;
    z-index: 10;

    &.single-lines {
      background: url('~assets/lines/red_horizontals.png');
      background-size: cover;
    }

    &.grid {
      background: url('~assets/lines/red_merged_transparent.png');
      background-size: cover;
    }
  }

  @media (min-width: $media-breakpoint-min-m) {
    .text img {
      left: 10%;
    }
  }
}
</style>
