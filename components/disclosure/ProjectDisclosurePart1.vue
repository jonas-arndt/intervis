<template>
  <DisclosureContent>
    <h2 v-html="$t('backside-process-subtitle1')" />
    <p v-html="$t('backside-process-intro1')" />

    <img v-if="$i18n.locale == 'de'" src="~/assets/intervis_disclosure_figures/process1_de.png">
    <img v-if="$i18n.locale == 'en'" src="~/assets/intervis_disclosure_figures/process1_en.png">

    <h3 v-html="$t('backside-process-heading1')" />
    <p v-html="$t('backside-process-text1')" />

    <h3 v-html="$t('backside-process-heading2')" />
    <p v-html="$t('backside-process-text2')" />

    <h3 v-html="$t('backside-process-heading3')" />
    <img src="~/assets/intervis_disclosure_figures/designdrafts.png">
    <p v-html="$t('backside-process-text3')" />

    <h3 v-html="$t('backside-process-heading4')" />
    <p v-html="$t('backside-process-text4')" />

    <h2 v-html="$t('backside-process-subtitle2')" />
    <p v-html="$t('backside-process-intro2')" />

    <img v-if="$i18n.locale == 'de'" src="~/assets/intervis_disclosure_figures/process2_de.png">
    <img v-if="$i18n.locale == 'en'" src="~/assets/intervis_disclosure_figures/process2_en.png">

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
