<template>
  <div class="chapter discrimination_and_privilege">
    <div class="narrative">
      <div class="step">
        <h2 class="chapter-title">
          2 Diskriminierung &amp; Privilegierung
        </h2>
        <p>
          Individuen und Gruppen werden basierend auf sozialen Kategorien unterschiedlich diskriminiert und privilegiert. Sie erleben deswegen ungleiche Bedingungen, wenn es um Zugang zu Ressourcen, soziale und politische Teilhabe, gesellschaftliche Integration etc. geht.
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
          Personen und Gruppen, die auf Basis sozialer Kategorien, viele Privilegien innehaben, haben Bedingungen, die ihre Bevorteilung und Machtposition reproduzieren. Die Schwierigkeit liegt darin, dass Privilegien meist selbstverständlich und nicht sichtbar für diejenigen sind, die sie besitzen. Privilegierte Menschen tendieren dazu, ihre Privilegien nicht als solche wahrzunehmen und folglich nicht zu erkennen, welche Hürden und Benachteiligungen für andere Menschen entstehen, die diese Privilegien nicht haben. Es fehlt die gelebte Erfahrung, die alltäglich daran erinnert, von der Norm abzuweichen.
        </p>
        <p>
          Ein erster, wichtiger Schritt ist es, sich seinen eigenen Privilegien bewusst zu werden, sie zu reflektieren und anzuerkennen. Das kann beispielsweise damit beginnen, sich über Erfahrungen von Menschen, die zum Beispiel Diskriminierung in Deutschland ausgesetzt sind, zu informieren.
        </p>
        <div class="detour">
          <a href="#">Exkurs zu den Dimensionen von Diskriminierung</a>
        </div>
      </div>
    </div>

    <div class="visualization">
      <div class="case-container">
        <div class="visual">
          <img src="~/assets/visualizations/discrimination1.png">
        </div>
        <div class="description">
          <p class="title">
            In allen sozialen Kategorien privilegiert
          </p>
          <p class="examples">
            z.B. weißer, heterosexueller, cis-geschlechtlicher, junger, nicht armer Mann ohne Behinderung
          </p>
        </div>
      </div>
      <div class="case-container">
        <div class="visual">
          <img src="~/assets/visualizations/discrimination2.png">
        </div>
        <div class="description">
          <p class="title">
            Aufgrund des Geschlechtes diskriminiert (Sexismus), in Bezug auf andere soziale Kategorien privilegiert
          </p>
          <p class="examples">
            z.B. weiße, heterosexuelle, cis-geschlechtliche, junge, nicht arme Frau ohne Behinderung
          </p>
        </div>
      </div>
      <div class="case-container">
        <div class="visual">
          <img src="~/assets/visualizations/discrimination3.png">
        </div>
        <div class="description">
          <p class="title">
            Aufgrund des Geschlechtes (Sexismus), der ›Rasse‹ (Rassismus) und der Klassenzugehörigkeit (Klassismus) diskriminiert, in Bezug auf andere soziale Kategorien privilegiert
          </p>
          <p class="examples">
            z.B. heterosexuelle, cis-geschlechtliche, junge, arme Frau of Color ohne Behinderung
          </p>
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

  h2 {
    color: $color-red;
    margin-bottom: 1rem;
  }

  .narrative .step {
    font-size: $font-size-small;
  }

  .detour {
    margin-top: 3em;

    a {
      @include red-button;
    }
  }

  .case-container {
    position: relative;
    height: 30vh;
    padding: 1rem;

    .visual {
      display: inline-block;

      position: relative;
      width: 35%;
      vertical-align: middle;
      margin-right: 10%;

      img {
        position: relative;
        width: 100%;
        height: auto;
      }
    }

    .description {
      display: inline-block;

      position: relative;
      width: 45%;
      vertical-align: middle;

      font-size: $font-size-smaller;

      .title {
        font-weight: 700;
      }
    }
  }
}

@media (min-width: $media-breakpoint-min-m) {
  .chapter.discrimination_and_privilege {
    position: relative;

    & > .visualization {
      position: sticky;
      width: 50%;
      left: 50%;
      top: 0;
      margin-top: -100vh;

    }

    & > .narrative {
      margin-top: -100vh;
      padding: 50vh 10% 50vh 10%;

      .step {
        position: relative;
        width: 40%;
        margin-bottom: 20vh;
      }
    }
  }
}
</style>
