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
    <div class="label" :class="labelClass">
      <span class="person a" v-html="$t('teaser-vis2')" />
      <span class="person b" v-html="$t('teaser-vis3')" />
      <span class="person c" v-html="$t('teaser-vis4')" />
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
      // intro > start (static) > transition > lines (static) > transition > grid (static) > outro (fade out) > blank screen
      const totalStaticHeight = this.intersectionalityChapterStartPosition - this.introductionStartPosition - 2 * this.transitionHeight - 2 * this.outroHeight - 2 * this.verticalViewportCenter
      return Math.round(totalStaticHeight / 3)
    },
    outroHeight () {
      return 2 * this.verticalViewportCenter
    },
    transitionHeight () {
      return this.verticalViewportCenter
    },

    // breakpoints
    breakpoint0 () {
      return this.introductionStartPosition
    },
    breakpoint1 () {
      return this.breakpoint0 + this.outroHeight
    },
    breakpoint2 () {
      return this.breakpoint1 + this.staticViewHeight
    },
    breakpoint3 () {
      return this.breakpoint2 + this.transitionHeight
    },
    breakpoint4 () {
      return this.breakpoint3 + this.staticViewHeight
    },
    breakpoint5 () {
      return this.breakpoint4 + this.transitionHeight
    },
    breakpoint6 () {
      return this.breakpoint5 + this.staticViewHeight
    },
    breakpoint7 () {
      return this.breakpoint6 + this.outroHeight
    },
    breakpoint8 () {
      return this.intersectionalityChapterStartPosition
    },

    // label
    labelClass () {
      let classes = []

      if (this.verticalScrollPosition > this.breakpoint1 && this.verticalScrollPosition < this.breakpoint2) {
        classes = ['active', 'person-a']
      } else if (this.verticalScrollPosition > this.breakpoint3 && this.verticalScrollPosition < this.breakpoint4) {
        classes = ['active', 'person-b']
      } else if (this.verticalScrollPosition > this.breakpoint5 && this.verticalScrollPosition < this.breakpoint6) {
        classes = ['active', 'person-c']
      }

      return classes
    },

    // line animation
    singleLinesScale () {
      return scaleLinear()
        .domain([
          this.breakpoint2,
          this.breakpoint3
        ])
        .range([0, 1])
        .clamp(true)
    },
    singleLinesScaleScrollPosition () {
      return Math.max(
        this.breakpoint2,
        Math.min(this.verticalScrollPosition, this.breakpoint3)
      )
    },
    singleLinesStyles () {
      const opacity = this.singleLinesScale(this.singleLinesScaleScrollPosition)

      return {
        opacity,
        zIndex: opacity > 0.4 ? 30 : 10
      }
    },

    // grid animation
    gridScale () {
      return scaleLinear()
        .domain([
          this.breakpoint4,
          this.breakpoint5
        ])
        .range([0, 1])
        .clamp(true)
    },
    gridScaleScrollPosition () {
      return Math.max(
        this.breakpoint4,
        Math.min(this.verticalScrollPosition, this.breakpoint5)
      )
    },
    gridStyles () {
      const opacity = this.gridScale(this.gridScaleScrollPosition)

      return {
        opacity,
        zIndex: opacity > 0.4 ? 29 : 9
      }
    },

    // component opacity
    opacityScale () {
      return scaleLinear()
        .domain([
          this.breakpoint6,
          this.breakpoint7
        ])
        .range([1, 0])
        .clamp(true)
    },
    opacityScaleScrollPosition () {
      return Math.max(
        this.breakpoint6,
        Math.min(this.verticalScrollPosition, this.breakpoint7)
      )
    },
    opacity () {
      return this.opacityScale(this.opacityScaleScrollPosition)
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

  .label {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 40;

    background: $color-white;
    padding: 0.6em 0.9em 0.6em 0.9em;

    border-radius: 1.1em;
    border: none;

    font-family: $font-family-signika;
    font-weight: 700;

    transition: opacity 0.3s;
    opacity: 0;

    &.active {
      opacity: 1;
    }

    .person.a, .person.b, .person.c {
      display: none;
    }

    &.person-a .person.a {
      display: block;
    }
    &.person-b .person.b {
      display: block;
    }
    &.person-c .person.c {
      display: block;
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
      background: url('~assets/grid/chapter2_frontlayer_shape2.png');
      background-size: cover;
    }

    &.grid {
      background: url('~assets/grid/chapter2_frontlayer_shape3.png');
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
