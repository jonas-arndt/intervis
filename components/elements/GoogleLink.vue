<template>
  <a :href="questionnaireLink" target="_blank" class="google-link" @click="$nuxt.$emit('questionnaireLinkWasClicked')">
    <span class="label" v-html="$t('evaluation-link')" />
  </a>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      germanLink: 'https://docs.google.com/forms/d/e/1FAIpQLSd9kykOGH0PTMdTi5de8w3Oz17lMRH-IjS0JNmIGfgBNdBp5w/viewform?usp=pp_url&entry.1771559805=',
      englishLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeynkCObZU11Vxb9PIy6e58I-US1x4FR_bl7oeX3MpGxowZpA/viewform?usp=pp_url&entry.1201035339='
    }
  },
  computed: {
    ...mapState(['loggingId']),
    questionnaireLink () {
      const baseUrl = this.$i18n.locale === 'de' ? this.germanLink : this.englishLink
      return baseUrl + this.loggingId
    }
  }
}

</script>

<style lang="scss">
@import "../../styles/_variables";

.google-link {
  display: inline-block;
  right: 0px;

  width: 14rem;
  height: 3rem;
  border-radius: 0 1.5rem 1.5rem 0;

  background: $color-red;
  background-image: url('~assets/icons/speech_bubble.svg');
  background-repeat: no-repeat;
  background-position: -2rem 0.75rem;
  background-size: 50% 50%;

  font-weight: 600;
  color: $color-white;

  .label {
    display: block;
    position: relative;
    top: 50%;

    padding-left: 2.75rem;

    font-size: $font-size-smaller;
    font-family: $font-family-signika;
    line-height: 1.4em;
    transform: translateY(-50%);
  }
}

</style>
