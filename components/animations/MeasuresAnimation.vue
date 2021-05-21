<template>
  <div class="measures-animation">
    <Blob
      ref="shape1"
      :shape="shapes['chapter4_1.svg']"
      clip-path-id="clip-path-4-1"
      class="visual top-left"
      :active="active"
      :style="{ opacity: blobFadeIn }"
      :scale="blobFadeIn"
      @parentPositionRequested="handlePositionRequest"
    >
      <div class="background">
        <div class="lines" :style="{ opacity: linesFadeOut }" />
        <div class="text" :style="shape1TextStyles">
          <img v-if="$i18n.locale == 'en'" src="~/assets/teaser/teaser-text-en.svg" alt="Access, Inclusion, Participation, Acknowledgment">
          <img v-if="$i18n.locale == 'de'" src="~/assets/teaser/teaser-text-de.svg" alt="Zugang, Integration, Teilhabe, Anerkennung">
        </div>
        <div class="grid" :style="{ opacity: gridFadeOut }" />
      </div>
    </Blob>
    <Blob
      ref="shape2"
      :shape="shapes['chapter4_2.svg']"
      clip-path-id="clip-path-4-2"
      class="visual bottom-right"
      :active="active"
      :style="{ opacity: blobFadeIn }"
      :scale="blobFadeIn"
      @parentPositionRequested="handlePositionRequest"
    >
      <div class="background">
        <div class="grid" :style="{ opacity: gridFadeOut }" />
        <div class="text" :style="shape2TextStyles">
          <img v-if="$i18n.locale == 'en'" src="~/assets/teaser/teaser-text-en.svg" alt="Access, Inclusion, Participation, Acknowledgment">
          <img v-if="$i18n.locale == 'de'" src="~/assets/teaser/teaser-text-de.svg" alt="Zugang, Integration, Teilhabe, Anerkennung">
        </div>
      </div>

      <template v-slot:unclipped>
        <div class="unclipped-text" :style="shape2UnclippedTextStyles">
          <img v-if="$i18n.locale == 'en'" src="~/assets/teaser/teaser-text-en.svg" alt="Access, Inclusion, Participation, Acknowledgment">
          <img v-if="$i18n.locale == 'de'" src="~/assets/teaser/teaser-text-de.svg" alt="Zugang, Integration, Teilhabe, Anerkennung">
        </div>
      </template>
    </Blob>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { scaleLinear } from 'd3-scale'
import shapes from '~/data/shapes.json'

export default {
  props: {
    active: {
      type: Boolean,
      default: false
    },
    breakpoints: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data () {
    return {
      shapes
    }
  },
  computed: {
    ...mapState(['verticalScrollPosition', 'viewport']),
    trimmedScrollPosition () {
      if (this.verticalScrollPosition <= this.breakpoints[0]) {
        return this.breakpoints[0]
      }

      if (this.verticalScrollPosition >= this.breakpoints[this.breakpoints.length - 1]) {
        return this.breakpoints[this.breakpoints.length - 1]
      }

      return this.verticalScrollPosition
    },

    // blob animation
    blobFadeInScale () {
      return scaleLinear()
        .domain([
          this.breakpoints[1],
          this.breakpoints[2]
        ])
        .range([0, 1])
        .clamp(true)
    },
    blobFadeIn () {
      return this.blobFadeInScale(this.trimmedScrollPosition)
    },

    // lines animation
    linesFadeOutScale () {
      return scaleLinear()
        .domain([
          this.breakpoints[2],
          this.breakpoints[3]
        ])
        .range([1, 0])
        .clamp(true)
    },
    linesFadeOut () {
      return this.linesFadeOutScale(this.trimmedScrollPosition)
    },

    // grid animations
    gridFadeOutScale () {
      return scaleLinear()
        .domain([
          this.breakpoints[3],
          this.breakpoints[4]
        ])
        .range([1, 0])
        .clamp(true)
    },
    gridFadeOut () {
      return this.gridFadeOutScale(this.trimmedScrollPosition)
    },

    // text animation
    textScale () {
      return scaleLinear()
        .domain([
          this.breakpoints[4],
          this.breakpoints[5]
        ])
        .range([1, 0])
        .clamp(true)
    },
    textOpacity () {
      return this.textScale(this.trimmedScrollPosition)
    },

    // text styles
    shape1TextPositionStyles () {
      const styles = {}

      if (this.active) {
        const rect = this.$refs.shape1.$el.getBoundingClientRect()
        const parentRect = this.$el.getBoundingClientRect()

        const verticalPadding = 0.25
        const horizontalPadding = 0.1

        const top = rect.top - parentRect.top
        const left = rect.left - parentRect.left

        styles.left = (left + horizontalPadding * rect.width) + 'px'
        styles.width = ((1 - 2 * horizontalPadding) * rect.width) + 'px'
        styles.top = (top + verticalPadding * rect.height) + 'px'
        styles.height = ((1 - 2 * verticalPadding) * rect.height) + 'px'
      }

      return styles
    },
    shape1TextStyles () {
      return { opacity: this.textOpacity, ...this.shape1TextPositionStyles }
    },
    shape2TextPositionRawStyles () {
      const styles = {}

      if (this.active) {
        const rect = this.$refs.shape2.$el.getBoundingClientRect()
        const parentRect = this.$el.getBoundingClientRect()

        const verticalPadding = 0.25
        const horizontalPadding = 0.1

        const top = rect.top - parentRect.top
        const left = rect.left - parentRect.left

        styles.left = (left + horizontalPadding * rect.width)
        styles.width = ((1 - 2 * horizontalPadding) * rect.width)
        styles.top = (top + verticalPadding * rect.height)
        styles.height = ((1 - 2 * verticalPadding) * rect.height)
      }

      return styles
    },
    shape2TextPositionStyles () {
      const styles = {}
      for (const [key, value] of Object.entries(this.shape2TextPositionRawStyles)) {
        styles[key] = value + 'px'
      }
      return styles
    },
    shape2TextStyles () {
      return { opacity: this.gridFadeOut, ...this.shape2TextPositionStyles }
    },
    shape2UnclippedTextStyles () {
      const styles = { opacity: 1 - this.gridFadeOut, ...this.shape2TextPositionStyles }

      const transformations = {}
      if ('top' in styles) {
        const rect = this.shape2TextPositionRawStyles
        const domain = [this.breakpoints[4], this.breakpoints[5]]

        // scale
        const ratioX = this.viewport.width / rect.width
        const ratioY = this.viewport.height / rect.height
        const ratio = Math.min(ratioX, ratioY)

        const scale = scaleLinear()
          .domain(domain).range([1, ratio]).clamp(true)(this.trimmedScrollPosition)

        // translate
        const widthOffset = (this.viewport.width - ratio * rect.width) / 2
        const translateX = scaleLinear()
          .domain(domain).range([0, rect.left - widthOffset]).clamp(true)(this.trimmedScrollPosition)

        const heightOffset = (this.viewport.height - ratio * rect.height) / 2
        const translateY = scaleLinear()
          .domain(domain).range([0, rect.top - heightOffset]).clamp(true)(this.trimmedScrollPosition)

        transformations.transform = `translate(-${translateX}px, -${translateY}px) scale(${scale})`
      }
      console.log({ ...styles, ...transformations })
      return { ...styles, ...transformations }
    }
  },
  methods: {
    handlePositionRequest (requestingComponent) {
      requestingComponent.updateParentRect(this.$el.getBoundingClientRect())
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/_variables";

  .measures-animation {
    .visual {
      overflow: visible;
    }

    .visual.top-left {
      .background {
        position: absolute;

        .grid, .lines {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          &.grid {
            background: url('~assets/grid/dark_gray.png');
            background-size: cover;
          }
          &.lines {
            background: url('~assets/grid/chapter2_frontlayer_shape2.png');
            background-size: cover;
            z-index: 10;
        }
      }
      .text {
        position: absolute;
        z-index: 5;
      }
    }
  }

  .visual.bottom-right {
    img {
      bottom: auto;
      right: auto;
    }

    .background {
      position: absolute;

      .grid {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background: url('~assets/grid/chapter4_shape2.png');
        background-size: cover;

        z-index: 20;
      }

      .text {
        position: absolute;
        z-index: 10;
      }
    }

    .unclipped-text {
      position: absolute;
      transform-origin: left top;
    }
  }
}
</style>
