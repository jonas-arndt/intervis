<template>
  <div class="chapter what-is-intersectionality">
    <SlideInToggleButton />
    <div class="narrative">
      <div class="step">
        <h2 class="chapter-title">
          1 Intersektionalität – Eine erste Definition
        </h2>
        <p>
          Wir sind alle unterschiedliche Individuen, mit ganz unterschiedlichen Interessen, Stärken, Zielen etc. Darüber hinaus prägen uns mehrere sogenannte soziale Kategorien, wie Geschlecht (einschließlich Geschlechtsidentität, sexuelle Orientierung), ›Rasse‹ (einschließlich Ethnizität, Nationalität, Hautfarbe, Migrationsstatus, Sprache, Kultur, Religion), Klasse (einschließlich sozio-ökonomische Position und Herkunft), Behinderung, Alter etc. Diese sozialen Kategorien sind Dimensionen sozialer Machtverhältnisse: Personen und Gruppen werden im Rahmen vorherrschender Gesellschaftssysteme (Kapitalismus, Kolonialismus/weiße Vorherrschaft und Patriarchat) basierend auf diesen sozialen Kategorien unterschiedlich benachteiligt, also diskriminiert, und bevorteilt, also privilegiert. Das führt zu sozialer Ungleichheit und asymmetrischer Machtverteilung in unserer Gesellschaft.
        </p>
      </div>
      <div class="step">
        <p>
          Aus intersektionaler Perspektive sind diese sozialen Kategorien bzw. Machtverhältnisse nicht isoliert voneinander zu betrachten und existieren nie unabhängig voneinander. Intersektionalität beschreibt die Verflechtung und Verwobenheit mehrerer sozialer Kategorien bzw. Machtverhältnisse. Sie wirken stetig gleichzeitig zusammen und stehen in einer ständigen Wechselwirkung zueinander.
        </p>
        <p>
          In den folgenden Kapiteln findest du dazu anschauliche Erklärungen und Beispiele.
        </p>
        <p class="detour">
          <button class="red-button" @click="showConceptDevelopment">
            Erfahre mehr zur Begriffsentwicklung von Intersektionalität
          </button>
        </p>
      </div>
    </div>

    <PopupOverlay v-if="conceptDevelopmentIsVisible" @close="hideConceptDevelopment()">
      <ConceptDevelopment />
    </PopupOverlay>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['conceptDevelopmentIsVisible'])
  },
  methods: {
    ...mapMutations(['showConceptDevelopment', 'hideConceptDevelopment'])
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/_variables";

.chapter.what-is-intersectionality {
  position: relative;

  .narrative {
    padding-top: 50vh;
    padding-bottom: 50vh;

    .detour {
      margin-top: 3em;
    }

    .step {
      margin-bottom: 100vh;

      &:last-child {
        margin-bottom: inherit;
      }
    }
  }

  @media (min-width: $media-breakpoint-min-m) {
    .narrative {
      position: relative;
      padding-left: 10%;
      padding-right: 10%;

      .step {
        margin-bottom: 80vh;
      }
    }
  }
}

</style>
