<template>
  <div class="teaser">
    <LanguageSwitcher class="language-switcher" />

    <div class="title-block">
      <div class="title-container">
        <h1>{{ $t('startscreen-title') }}</h1>
        <p class="subtitle">
          {{ $t('startscreen-subtitle') }}
        </p>
        <p>
          {{ $t('startscreen-preamble') }}
        </p>
        <ButtonLine>
          <button class="red-button" @click="hideTeaser()">
            {{ $t('startscreen-preamble-button1') }}
          </button>
          <button class="red-button" @click="toggleDisclosureVisibility()">
            {{ $t('startscreen-preamble-button2') }}
          </button>
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
