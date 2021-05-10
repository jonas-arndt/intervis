<template>
  <div class="measures-visualization">
    <div class="step-1">
      <div class="inside">
        <div class="visual top-left">
          <img v-if="$i18n.locale == 'en'" src="~/assets/fallback/chapter4_1_english.png">
          <img v-if="$i18n.locale == 'de'" src="~/assets/fallback/chapter4_1_german.png">
        </div>

        <div class="visual bottom-right">
          <img v-if="$i18n.locale == 'en'" src="~/assets/fallback/chapter4_4_english.png">
          <img v-if="$i18n.locale == 'de'" src="~/assets/fallback/chapter4_4_german.png">
        </div>
      </div>
    </div>
    <div class="step-2">
      <div class="inside">
        <div class="visual top-left">
          <img v-if="$i18n.locale == 'en'" src="~/assets/fallback/chapter4_3_english.png">
          <img v-if="$i18n.locale == 'de'" src="~/assets/fallback/chapter4_3_german.png">
        </div>

        <div class="visual bottom-right">
          <img v-if="$i18n.locale == 'en'" src="~/assets/fallback/chapter4_4_english.png">
          <img v-if="$i18n.locale == 'de'" src="~/assets/fallback/chapter4_4_german.png">
        </div>
      </div>
    </div>

    <div class="step-3">
      <div class="inside">
        <div class="visual top-left">
          <img v-if="$i18n.locale == 'en'" src="~/assets/fallback/chapter4_5_english.png">
          <img v-if="$i18n.locale == 'de'" src="~/assets/fallback/chapter4_5_german.png">
        </div>

        <div class="visual bottom-right">
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
  .step-1 {
    position: absolute;
    top: 0%;
    height: 33%;
    min-height: 100vh;
    width: 100%;

    .inside {
      position: sticky;
      top: 0;
      height: 100vh;
      width: 100%;
    }
  }

  .step-2 {
    position: absolute;
    top: 33%;
    height: 33%;
    min-height: 100vh;
    width: 100%;

    .inside {
      position: sticky;
      top: 0;
      height: 100vh;
      width: 100%;
    }
  }

  .step-3 {
    position: absolute;
    top: 67%;
    height: 33%;
    min-height: 100vh;
    width: 100%;

    .inside {
      position: sticky;
      top: 0;
      height: 100vh;
      width: 100%;
    }
  }

  .visual {
    position: absolute;
    height: 45%;
    width: 50%;

    img {
      max-height: 100%;
      max-width: 100%;
    }

    &.top-left {
      top: 5%;
      left: 15%;
    }

    &.bottom-right {
      right: 15%;
      bottom: 5%;

      img {
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
  }
}
</style>
