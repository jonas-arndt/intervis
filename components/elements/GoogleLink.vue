<template>
  <a :href="link" target="_blank" class="google-link">
    <span class="label" v-html="$t('evaluation-link')" />
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

.google-link {
  display: inline-block;
  right: 0px;

  width: 16rem;
  height: 3rem;
  border-radius: 0 1.5rem 1.5rem 0;

  background: $color-red;
  background-image: url('~assets/icons/speech_bubble.svg');
  background-repeat: no-repeat;
  background-position: -2.5rem 0.75rem;
  background-size: 50% 50%;

  font-weight: 600;
  color: $color-white;

  .label {
    display: block;
    position: relative;

    top: 0.5rem;
    padding-left: 2.75rem;

    font-size: $font-size-small;
    font-family: $font-family-signika;
    line-height: 1.4em;
  }
}

</style>
