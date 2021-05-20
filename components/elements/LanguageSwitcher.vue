<template>
  <div class="language-switcher">
    <ul>
      <li v-for="localeName, localeKey in locales" :key="localeKey" :class="{ 'active': $i18n.locale == localeKey }">
        <a href="#" @click.prevent="switchLang(localeKey)">{{ localeName }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import deModule from '../../locales/de.js'
import enModule from '../../locales/en.js'

export default {
  data () {
    return {
      deModule,
      enModule,
      locales: {
        de: 'DE',
        en: 'EN'
      }
    }
  },
  methods: {
    switchLang (locale) {
      // from https://github.com/nuxt-community/i18n-module/issues/68#issuecomment-475792915

      if (locale === this.$store.state.i18n.locale) {
        return
      }

      // update i18n's locale instance
      this.$i18n.locale = locale
      // set new messages from new locale file
      this.$i18n.setLocaleMessage(locale, locale === 'de' ? deModule : enModule)
      // update url to point to new path, without reloading the page
      window.history.replaceState('', '', this.switchLocalePath(locale))
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/_variables";

.language-switcher {
  li {
    display: inline-block;
    margin-right: 1em;

    a {
      position: relative;
      display: block;
      font-family: $font-family-signika;
      font-weight: 600;
      color: $color-black;
    }

    &.active {
      a {
        border: 2px solid $color-black;
        border-radius: 1.2em;
        padding: 0.1em 0.4em 0.1em 0.4em;
      }
    }
  }
}
</style>
