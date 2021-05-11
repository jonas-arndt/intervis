<template>
  <div class="chapter-4-visualization">
    <div class="visual top-left">
      <img v-if="$i18n.locale == 'en'" src="~/assets/fallback/chapter4_5_english.png">
      <img v-if="$i18n.locale == 'de'" src="~/assets/fallback/chapter4_5_german.png">
    </div>

    <div class="visual bottom-right">
      <img v-if="$i18n.locale == 'en'" src="~/assets/fallback/chapter4_5_english.png">
      <img v-if="$i18n.locale == 'de'" src="~/assets/fallback/chapter4_5_german.png">
    </div>
  </div>
</template>
