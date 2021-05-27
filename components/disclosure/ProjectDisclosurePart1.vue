<template>
  <DisclosureContent class="project-disclosure-part1">
    <h2 v-html="$t('backside-process-subtitle1')" />
    <p v-html="$t('backside-process-intro1')" />

    <img v-if="$i18n.locale == 'de'" src="~/assets/disclosure/process1_de.svg">
    <img v-if="$i18n.locale == 'en'" src="~/assets/disclosure/process1_en.svg">

    <h3 v-html="$t('backside-process-heading1')" />
    <p v-html="$t('backside-process-text1')" />

    <h3 v-html="$t('backside-process-heading2')" />
    <p v-html="$t('backside-process-text2')" />

    <h3 v-html="$t('backside-process-heading3')" />
    <img src="~/assets/disclosure/designdrafts.jpg">
    <p v-html="$t('backside-process-text3')" />

    <h3 v-html="$t('backside-process-heading4')" />
    <p v-html="$t('backside-process-text4')" />

    <h2 v-html="$t('backside-process-subtitle2')" />
    <p v-html="$t('backside-process-intro2')" />

    <img v-if="$i18n.locale == 'de'" src="~/assets/disclosure/process2_de.svg">
    <img v-if="$i18n.locale == 'en'" src="~/assets/disclosure/process2_en.svg">

    <h3 v-html="$t('backside-process-heading5')" />
    <p v-html="$t('backside-process-text5')" />

    <h3 v-html="$t('backside-process-heading6')" />
    <p v-html="$t('backside-process-text6')" />

    <h3 v-html="$t('backside-process-heading7')" />
    <p v-html="$t('backside-process-text7')" />

    <h3 v-html="$t('backside-process-heading8')" />
    <p v-html="$t('backside-process-text8')" />
  </DisclosureContent>
</template>

<style lang="scss" scoped>
.project-disclosure-part1 {
  img {
    width: 100%;
    height: auto;
  }
}
</style>
