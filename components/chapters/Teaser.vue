<template>
  <div class="teaser">
    <LanguageSwitcher class="language-switcher" />

    <div class="title-block">
      <div class="title-container">
        <h1>Inter...was?<br>Intersektionalität!</h1>
        <p class="subtitle">
          Eine visuelle Einführung
        </p>
        <p>
          Ziel dieses Artikels ist es die Themen Intersektionalität, Diskriminierung und Privilegierung mithilfe visueller Elemente anschaulich zu erklären. Intersektionale Perspektiven sind bislang nicht im Alltagswortschatz und in gesellschaftlichen Diskursen in Deutschland angekommen. Das möchten wir ändern, dieser Artikel kann ein Anfang dafür sein. Eine erste Version des Artikels entstand im Rahmen der Design Bachelorarbeit von Hannah Schwan. Anschließend wurde er im UCLAB von Hannah, Jonas Arndt, Sandra Cartes und Marian Dörk weiterentwickelt.
        </p>
        <ButtonLine>
          <button class="red-button" @click="hideTeaser()">
            Zum Artikel
          </button>
          <button class="red-button" @click="toggleDisclosureVisibility()">
            Mehr Einblicke ins Projekt
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
