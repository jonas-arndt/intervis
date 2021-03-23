<template>
  <div class="chapter grid-visualization">
    <TitleVisualization class="background-visualization" />
    <div class="narrative">
      <div class="step">
        <p>
          Zugang zu Ressourcen wie zu Bildung, zum Arbeitsmarkt und zu Wohnraum, soziale und politische Teilhabe, gesellschaftliche Einbeziehung und Anerkennung. Als Person A kannst Du diese Wörter ohne Probleme lesen.
        </p>
        <p>
          Was passiert, wenn du in andere Personen schlüpfst und aus ihrer Sicht auf diese Begriffe schaust?
        </p>
      </div>
      <div class="step">
        <p>
          Fällt Dir etwas auf?
          <br>Die Begriffe sind aus der Sicht dieser Person nur noch schwer zu erkennen, fast unleserlich.
        </p>
      </div>
      <div class="step">
        <p>
          Verschiedene Personen haben ungleiche Bedingungen, wenn es um Zugang zu Ressourcen, soziale und politische Teilhabe, gesellschaftliche Einbeziehung und Anerkennung etc. geht. Sie werden unterschiedlich benachteiligt und bevorteilt.
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
  position: relative;

  .narrative {
    position: relative;
    padding-top: 30vh;
    padding-bottom: 150vh;

    .step {
      margin-bottom: 150vh;

      &:last-child {
        margin-bottom: inherit;
      }
    }
  }

  .background-visualization {
    z-index: -100;
    position: sticky;
    top: 0;
  }

  @media (min-width: $media-breakpoint-min-m) {
    padding-top: 80vh;
    padding-bottom: 80vh;

    .narrative {
      padding-top: 10rem;
      padding-bottom: 100vh;
    }
  }
}

</style>
