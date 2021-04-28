<template>
  <a :href="link" target="_blank" class="google-link">
    <span v-html="$t('evaluation-link')" />
  </a>
</template>

<script>
export default {
  data () {
    return {
      germanLink: 'https://docs.google.com/forms/d/e/1FAIpQLSd9kykOGH0PTMdTi5de8w3Oz17lMRH-IjS0JNmIGfgBNdBp5w/viewform?usp=sf_link',
      englishLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeynkCObZU11Vxb9PIy6e58I-US1x4FR_bl7oeX3MpGxowZpA/viewform?usp=sf_link'
    }
  },
  computed: {
    link () {
      if (this.$i18n.locale === 'de') {
        return this.germanLink
      } else {
        return this.englishLink
      }
    }
  }
}

</script>

<style lang="scss">
@import "../../styles/_variables";

$circle-radius: 11em;

.google-link {
  display: block;
  width: $circle-radius;
  height: $circle-radius;
  border-radius: $circle-radius;

  padding-top: 1.8em;

  font-family: $font-family-signika;
  font-size: $font-size-default;
  line-height: 1.2 * $font-size-default;
  font-weight: normal;
  text-align: center;
  color: $color-white;

  background-color: $color-red;
  cursor: pointer;
}

</style>
