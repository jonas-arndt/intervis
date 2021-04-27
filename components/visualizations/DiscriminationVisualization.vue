<template>
  <div class="discrimination-visualization">
    <div class="case-container">
      <div class="visual">
        <!-- <Blob :point-list="pointsFirstShape" /> -->
        <img v-if="$i18n.locale == 'de'" src="~/assets/fallback/chapter2_1_german.png">
        <img v-if="$i18n.locale == 'en'" src="~/assets/fallback/chapter2_1_english.png">
      </div>
      <div class="description">
        <p class="title" v-html="$t('chapter2-vis2-title1')" />
        <p class="examples" v-html="$t('chapter2-vis2-examples1')" />
      </div>
    </div>
    <div class="case-container">
      <div class="visual">
        <!-- <Blob :point-list="pointsSecondShape" /> -->
        <img v-if="$i18n.locale == 'de'" src="~/assets/fallback/chapter2_2_german.png">
        <img v-if="$i18n.locale == 'en'" src="~/assets/fallback/chapter2_2_english.png">
        <img>
      </div>
      <div class="description">
        <p class="title" v-html="$t('chapter2-vis2-title2')" />
        <p class="examples" v-html="$t('chapter2-vis2-examples2')" />
      </div>
    </div>
    <div class="case-container">
      <div class="visual">
        <!-- <Blob :point-list="pointsThirdShape" /> -->
        <img v-if="$i18n.locale == 'de'" src="~/assets/fallback/chapter2_3_german.png">
        <img v-if="$i18n.locale == 'en'" src="~/assets/fallback/chapter2_3_english.png">
      </div>
      <div class="description">
        <p class="title" v-html="$t('chapter2-vis2-title3')" />
        <p class="examples" v-html="$t('chapter2-vis2-examples3')" />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pointsFirstShape: [
        [680, 20],
        [606, 0],
        [270, 43],
        [0, 400],
        [54, 742],
        [161, 863],
        [303, 887],
        [397, 840],
        [550, 744],
        [694, 681],
        [814, 644],
        [900, 617],
        [987, 528],
        [1000, 428],
        [949, 259],
        [758, 60],
        [680, 20]
      ],
      pointsSecondShape: [
        [896, 521],
        [853, 724],
        [562, 983],
        [421, 1000],
        [151, 893],
        [0, 625],
        [36, 368],
        [169, 191],
        [389, 44],
        [540, 1],
        [587, 0],
        [770, 96],
        [839, 219],
        [889, 405],
        [896, 521]
      ],
      pointsThirdShape: [
        [373, 0],
        [373, 1],
        [278, 14],
        [82, 142],
        [0, 412],
        [33, 532],
        [109, 650],
        [240, 785],
        [372, 893],
        [485, 963],
        [602, 1000],
        [682, 988],
        [763, 925],
        [839, 793],
        [891, 631],
        [906, 450],
        [882, 358],
        [818, 249],
        [624, 80],
        [438, 7],
        [373, 0]
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/_variables";

.discrimination-visualization {
  position: relative;
  height: 100vh;
  width: 90%;
  padding: 1rem;

  .case-container {
    position: relative;
    height: 30vh;

    .visual {
      display: inline-block;

      position: relative;
      width: 35%;
      vertical-align: middle;
      margin-right: 0%;

      img {
        position: relative;
        width: 100%;
        height: auto;
      }
    }

    .description {
      display: inline-block;

      position: relative;
      width: 60%;
      vertical-align: middle;

      font-size: $font-size-smaller;

      .title {
        font-weight: 700;
      }
    }
  }

  @media (min-width: $media-breakpoint-min-m) {
    left: 60%;
    width: 30%;
  }
}

</styles>
