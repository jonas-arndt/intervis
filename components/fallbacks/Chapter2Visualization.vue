<template>
  <div class="chapter2-visualization">
    <div class="case-container">
      <div class="visual">
        <div class="inside">
          <img v-if="$i18n.locale == 'de'" src="~/assets/fallback/chapter2_1_german.png">
          <img v-if="$i18n.locale == 'en'" src="~/assets/fallback/chapter2_1_english.png">
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
          <img v-if="$i18n.locale == 'de'" src="~/assets/fallback/chapter2_2_german.png">
          <img v-if="$i18n.locale == 'en'" src="~/assets/fallback/chapter2_2_english.png">
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
          <img v-if="$i18n.locale == 'de'" src="~/assets/fallback/chapter2_3_german.png">
          <img v-if="$i18n.locale == 'en'" src="~/assets/fallback/chapter2_3_english.png">
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

<style lang="scss" scoped>
@import "../../styles/_variables";

.chapter2-visualization {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
