<template>
  <div class="measures-visualization">
    <div class="visual-container">
      <div class="visual top-left">
        <div class="step-1">
          <img v-if="$i18n.locale == 'en'" src="~/assets/fallback/chapter4_1_english.png">
          <img v-if="$i18n.locale == 'de'" src="~/assets/fallback/chapter4_1_german.png">
        </div>
        <div class="step-2">
          <img v-if="$i18n.locale == 'en'" src="~/assets/fallback/chapter4_3_english.png">
          <img v-if="$i18n.locale == 'de'" src="~/assets/fallback/chapter4_3_german.png">
        </div>
        <div class="step-3">
          <img v-if="$i18n.locale == 'en'" src="~/assets/fallback/chapter4_5_english.png">
          <img v-if="$i18n.locale == 'de'" src="~/assets/fallback/chapter4_5_german.png">
        </div>
      </div>
      <div class="visual bottom-right">
        <div class="step-1">
          <img v-if="$i18n.locale == 'en'" src="~/assets/fallback/chapter4_4_english.png">
          <img v-if="$i18n.locale == 'de'" src="~/assets/fallback/chapter4_4_german.png">
        </div>
        <div class="step-2">
          <img v-if="$i18n.locale == 'en'" src="~/assets/fallback/chapter4_5_english.png">
          <img v-if="$i18n.locale == 'de'" src="~/assets/fallback/chapter4_5_german.png">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.measures-visualization {
  position: relative;
  height: 100vh;
  width: 100%;
  padding: 1rem;

  .visual-container {
    position: relative;
    top: 10%;
    left: 10%;
    width: 80%;
  }

  .visual {
    img {
      max-width: 60%;
      height: auto;
    }

    &.bottom-right {
      position: relative;
      left: 40%;
    }
  }

  @media (min-width: $media-breakpoint-min-m) {
    .visual-container {
      width: 45%;
      height: 80%;
      left: 0;
      padding: 10%;
    }

    .visual {
      width: 60%;

      img {
        width: 100%;
        max-width: none;
        height: auto;
      }

      &.top-left {
        position: absolute;
        top: 0;
        left: 0;
      }

      &.bottom-right {
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
  }
}
</style>
