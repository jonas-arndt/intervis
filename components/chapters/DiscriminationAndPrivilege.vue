<template>
  <div class="chapter discrimination_and_privilege">
    <DiscriminationVisualization class="background-visualization" />
    <div class="narrative">
      <div class="step">
        <h2 class="chapter-title">
          2 Diskriminierung &amp; Privilegierung
        </h2>
        <p>
          Individuen und Gruppen werden basierend auf sozialen Kategorien unterschiedlich diskriminiert und privilegiert. Sie erleben deswegen ungleiche Bedingungen, wenn es um Zugang zu Ressourcen, soziale und politische Teilhabe, gesellschaftliche Einbeziehung und Anerkennung etc. geht. Privilegien führen zu Bedingungen, die Bevorteilung und Machtpositionen reproduzieren.
        </p>
      </div>
      <div class="step">
        <p>
          Diskriminierung und Privilegierung müssen immer zusammen gedacht werden, denn die jeweils privilegierte Identität innerhalb einer sozialen Kategorie – also z.B. weiß, Mann, heterosexuell, cis-geschlechtlich oder ohne Behinderung – bildet die sogenannte »Norm«. Und damit die Ausgangsbasis für diskriminierende Strukturen.
        </p>
        <p>
          Diskriminierung und Privilegierung können innerhalb eines Individuums oder einer bestimmten sozialen Gruppe zusammen und gleichzeitig existieren.
        </p>
        <p>
          Beispiele für Diskriminierungsformen sind Rassismus, Sexismus, Ableismus, Klassismus, Cis- und Heterosexismus, Anti-muslimischer Rassismus, Antisemitismus, Anti-Rom*nja Rassismus.
        </p>
      </div>
      <div class="step">
        <p>
          Die Schwierigkeit liegt darin, dass Privilegien meist selbstverständlich und nicht sichtbar für diejenigen sind, die sie besitzen. Privilegierte Menschen tendieren dazu, ihre Privilegien nicht als solche wahrzunehmen und folglich nicht zu erkennen, welche Hürden und Benachteiligungen für andere Menschen entstehen, die diese Privilegien nicht haben. Es fehlt die gelebte Erfahrung, die alltäglich daran erinnert, von der Norm abzuweichen.
        </p>
        <p>
          Ein erster, wichtiger Schritt ist es, sich seinen eigenen Privilegien bewusst zu werden, sie zu reflektieren und anzuerkennen. Das kann beispielsweise damit beginnen, sich über Erfahrungen von Menschen, die Diskriminierung ausgesetzt sind, zu informieren.
        </p>
        <div class="detour">
          <a href="#" class="button">Erfahre mehr zu den Dimensionen von Diskriminierung</a>
        </div>
      </div>
    </div>
    <PopupOverlay>
      <DimensionsDiscrimination />
    </PopupOverlay>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.chapter.discrimination_and_privilege {
  .narrative {
    padding-top: 50vh;
    padding-bottom: 50vh;

    .step {
      margin-bottom: 100vh;
    }
  }

  h2 {
    color: $color-red;
    margin-bottom: 1rem;
  }

  .detour {
    margin-top: 3em;
  }

  .background-visualization {
    z-index: -100;
    position: sticky;
    top: 0;
  }

  @media (min-width: $media-breakpoint-min-m) {
    .narrative {
      .step {
        margin-bottom: 20vh;
      }
    }
  }
}
</style>
