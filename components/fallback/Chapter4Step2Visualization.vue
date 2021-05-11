<template>
  <div class="chapter-4-visualization">
    <div class="visual top-left">
      <img v-if="$i18n.locale == 'en'" src="~/assets/fallback/chapter4_3_english.png">
      <img v-if="$i18n.locale == 'de'" src="~/assets/fallback/chapter4_3_german.png">
    </div>

    <div class="visual bottom-right">
      <img v-if="$i18n.locale == 'en'" src="~/assets/fallback/chapter4_4_english.png">
      <img v-if="$i18n.locale == 'de'" src="~/assets/fallback/chapter4_4_german.png">
    </div>
  </div>
</template>
