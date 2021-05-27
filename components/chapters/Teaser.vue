<template>
  <div class="teaser-content">
    <LanguageSwitcher class="language-switcher" />
    <h1 class="title" v-html="$t('startscreen-title')" />
    <p class="subtitle" v-html="$t('startscreen-subtitle')" />
    <p class="description" v-html="$t('startscreen-preamble')" />
    <div class="button-line">
      <RedButton :action="hideTeaser">
        <span v-html="$t('startscreen-preamble-button1')" />
      </RedButton>
      <RedButton :action="showProjectDisclosure">
        <span v-html="$t('startscreen-preamble-button2')" />
      </RedButton>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['hideTeaser', 'toggleDisclosureVisibility']),
    showProjectDisclosure () {
      this.toggleDisclosureVisibility()
      this.hideTeaser()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/_variables";

.teaser-content {
  .language-switcher {
    margin-bottom: 1em;
  }
  .title {
    font-size: $font-size-title;
    font-weight: bolder;
    line-height: 1.2em;
    margin-bottom: 0.2em;
  }

  .subtitle {
    font-size: $font-size-subtitle;
    font-family: $font-family-signika;
    margin-bottom: 0.5em;
  }

  .description {
    margin-bottom: 1.5em;
  }

  .button-line {
    margin-bottom: -1.25em;

    button {
      margin-right: 0.75em;
      margin-bottom: 1.25em;

      &:last-child {
        margin-right: inherit;
      }
    }
  }

}
</style>
