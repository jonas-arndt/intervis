<template>
  <div class="teaser">
    <LanguageSwitcher class="language-switcher" />

    <div class="title-block">
      <div class="title-container">
        <h1 v-html="$t('startscreen-title')" />
        <p class="subtitle" v-html="$t('startscreen-subtitle')" />
        <p v-html="$t('startscreen-preamble')" />
        <ButtonLine>
          <button class="red-button" @click="hideTeaser()" v-html="$t('startscreen-preamble-button1')" />
          <button class="red-button" @click="toggleDisclosureVisibility()" v-html="$t('startscreen-preamble-button2')" />
        </ButtonLine>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['hideTeaser', 'toggleDisclosureVisibility'])
  }
}

</script>
