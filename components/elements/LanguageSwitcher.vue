<template>
  <div class="language-switcher">
    <ul>
      <li :class="{ 'active': language == 'de' }">
        <a href="#" @click.prevent="language = 'de'">DE</a>
      </li>
      <li :class="{ 'active': language == 'en' }">
        <a href="#" @click.prevent="language = 'en'">EN</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      language: 'de'
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
