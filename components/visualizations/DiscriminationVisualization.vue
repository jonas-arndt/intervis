<template>
  <div class="discrimination-visualization">
    <div class="case-container">
      <div class="visual">
        <div class="inside">
          <div class="fallback">
            <img v-if="$i18n.locale == 'de'" src="~/assets/fallback/chapter2_1_german.png">
            <img v-if="$i18n.locale == 'en'" src="~/assets/fallback/chapter2_1_english.png">
          </div>
          <div class="interactive-visualization shape-1">
            <Blob
              :shape="shapes['chapter2_1.svg']"
              clip-path-id="clip-path-2-1"
              @parentPositionRequested="handlePositionRequest"
            >
              <div class="background" />
            </Blob>
          </div>
        </div>
      </div>
      <div class="description">
        <span class="title" v-html="$t('chapter2-vis2-title1')" />
        <span class="examples" v-html="$t('chapter2-vis2-examples1')" />
      </div>
    </div>
    <div class="case-container">
      <div class="visual">
        <div class="inside">
          <div class="fallback">
            <img v-if="$i18n.locale == 'de'" src="~/assets/fallback/chapter2_2_german.png">
            <img v-if="$i18n.locale == 'en'" src="~/assets/fallback/chapter2_2_english.png">
          </div>
          <div class="interactive-visualization shape-2">
            <Blob
              :shape="shapes['chapter2_2.svg']"
              clip-path-id="clip-path-2-2"
              @parentPositionRequested="handlePositionRequest"
            >
              <div class="background" />
            </Blob>
          </div>
        </div>
      </div>
      <div class="description">
        <span class="title" v-html="$t('chapter2-vis2-title2')" />
        <span class="examples" v-html="$t('chapter2-vis2-examples2')" />
      </div>
    </div>
    <div class="case-container">
      <div class="visual">
        <div class="inside">
          <div class="fallback">
            <img v-if="$i18n.locale == 'de'" src="~/assets/fallback/chapter2_3_german.png">
            <img v-if="$i18n.locale == 'en'" src="~/assets/fallback/chapter2_3_english.png">
          </div>
          <div class="interactive-visualization shape-3">
            <Blob
              :shape="shapes['chapter2_3.svg']"
              clip-path-id="clip-path-2-3"
              @parentPositionRequested="handlePositionRequest"
            >
              <div class="background" />
            </Blob>
          </div>
        </div>
      </div>
      <div class="description">
        <span class="title" v-html="$t('chapter2-vis2-title3')" />
        <span class="examples" v-html="$t('chapter2-vis2-examples3')" />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import shapes from '~/data/shapes.json'

export default {
  data () {
    return {
      shapes
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

.discrimination-visualization {
  position: relative;
  height: 100vh;
  width: 100%;
  padding: 15vh 1rem 10vh 1rem;

  .interactive-visualization {
    display: none;
  }

  .case-container {
    position: relative;
    height: 25vh;

    .visual {
      position: relative;
      top: 10%;
      display: inline-block;
      width: 30%;
      vertical-align: middle;
      margin-right: 5%;
      height: 90%;
      overflow: hidden;

      & > .inside {
        position: relative;
        display: block;
        height: 90%;

        margin: 0 auto;
        text-align: right;
      }

      img {
        position: relative;
        max-width: 100%;
        max-height: 100%;
      }
    }

    .description {
      display: inline-block;

      position: relative;
      width: 60%;
      vertical-align: middle;

      font-family: $font-family-signika;
      font-size: $font-size-small;
      line-height: 1.3em;

      .title {
        display: block;
        font-weight: 700;
        margin-bottom: 0.6em;
      }
    }
  }

  @media (min-width: $media-breakpoint-min-m) {
    left: 55%;
    width: 40%;

    padding-left: 0;
    padding-right: 0;
  }
}

.page.js .discrimination-visualization {
  .fallback {
    display: none;
  }

  .interactive-visualization {
    display: block;

    &.shape-1 .background {
      background: url('~assets/grid/dark_gray.png');
      background-size: cover;
    }
    &.shape-2 .background {
      background: url('~assets/grid/chapter2_frontlayer_shape2.png');
      background-size: cover;
    }
    &.shape-3 .background {
      background: url('~assets/grid/chapter2_frontlayer_shape3.png');
      background-size: cover;
    }
  }
}
</styles>
