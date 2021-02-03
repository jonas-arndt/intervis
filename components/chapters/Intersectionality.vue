<template>
  <div class="chapter what-is-intersectionality">
    <div class="background" />
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
        <div class="detour">
          <a href="#">Exkurs zur Begriffsentwicklung von Intersektionalität</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.chapter.what-is-intersectionality {

  .narrative {
    .step {
      font-size: $font-size-small;
    }

    .detour a {
      @include red-button;
    }
  }
}

@media (min-width: $media-breakpoint-min-m) {
  .chapter.what-is-intersectionality {
    position: relative;

    & > .background {
      position: sticky;
      top: 0;

      width: 100%;
      height: 100vh;

      z-index: -1;

      background: url('~assets/lines/lines-orange.jpg');
      background-size: cover;
    }

    .narrative {
      position: relative;
      margin-top: -100vh;
      padding: 50vh 10% 50vh 10%;

      .step {
        @include white-boxed-narrative-step;
        margin-bottom: 150vh;

        &:last-child {
          margin-bottom: inherit;
        }
      }

      .detour a {
        @include red-button;
      }
    }
  }
}
</style>
