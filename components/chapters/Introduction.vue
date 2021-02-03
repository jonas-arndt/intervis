<template>
  <div class="chapter grid-visualization">
    <div class="visualization">
      <img :src="require('~/assets/visualizations/zugang_integration_teilhabe_anerkennung.svg')" alt="Zugang, Integration, Teilhabe, Anerkennung">
    </div>
    <div class="narrative">
      <div class="step">
        <p>
          Zugang zu Ressourcen wie zum Arbeitsmarkt und zu Wohnraum, gesellschaftliche Integration, soziale und politische Teilhabe, gesellschaftliche Anerkennung. Als Person A kannst Du diese Wörter ohne Probleme lesen.
        </p>
        <p>
          Was passiert, wenn du in andere Personen schlüpfst und aus ihrer Sicht auf diese Wörter schaust?
        </p>
      </div>
      <div class="step">
        <p>
          Fällt Dir etwas auf?
          <br>Die Wörter sind aus der Sicht dieser Person nur noch schwer zu erkennen, fast unleserlich.
        </p>
      </div>
      <div class="step">
        <p>
          Verschiedene Personen haben ungleiche Bedingungen, wenn es um Zugang zu Ressourcen, gesellschaftliche Integration, soziale und politische Teilhabe, gesellschaftliche Anerkennung etc. geht. Sie werden unterschiedlich benachteiligt und bevorteilt.
        </p>
        <p>
          Um das genauer verstehen zu können, werfen wir einen Blick darauf, was unter Intersektionalität, Diskriminierung und Privilegierung verstanden wird.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.chapter.grid-visualization {
  .narrative {
    .step {
      font-size: $font-size-small;
    }
  }

  .visualization {
    img {
      max-width: 100%;
      max-height: 90vh;
    }
  }
}

@media (min-width: $media-breakpoint-min-m) {
  .chapter.grid-visualization {
    position: relative;

    & > .visualization, & > .narrative {
      padding-left: 10%;
      padding-right: 10%;
    }

    .visualization {
      position: sticky;
      top: 0;

      z-index: -100;

      width: 100%;
      height: 100vh;

      background: url('~assets/lines/lines-grey.jpg');
      background-size: cover;
    }

    .narrative {
      padding-top: 10rem;
      padding-bottom: 100vh;

      .step {
        @include white-boxed-narrative-step;
        margin-bottom: 150vh;

        &:last-child {
          margin-bottom: inherit;
        }
      }
    }
  }
}
</style>
