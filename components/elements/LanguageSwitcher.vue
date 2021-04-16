<template>
  <div class="language-switcher">
    <ul>
      <li v-for="localeName, localeKey in locales" :key="localeKey" :class="{ 'active': $i18n.locale == localeKey }">
        <a href="#" @click.prevent="$i18n.setLocale(localeKey)">{{ localeName }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      locales: {
        de: 'DE',
        en: 'EN'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/_variables";

.language-switcher {
  li {
    display: inline-block;
    margin-right: 0.5em;

    a {
      display: block;
      font-family: $font-family-signika;
      font-weight: 700;
      color: $color-black;
    }

    &.active {
      a {
        border: 2px solid $color-red;
        border-radius: 1.2em;
        padding: 0.1em 0.4em 0.1em 0.4em;

        color: $color-red;
      }
    }
  }
}
</style>
