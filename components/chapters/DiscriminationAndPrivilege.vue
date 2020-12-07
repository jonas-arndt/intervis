<template>
  <div class="chapter discrimination_and_privilege">
    <div class="background" />
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
            z.B. weißer, heterosexueller, cis-geschlechtlicher, junger, nicht armer Mann ohne Behinderung etc.
          </p>
        </div>
      </div>
      <div class="case-container">
        <div class="visual">
          <img src="~/assets/visualizations/discrimination2.png">
        </div>
        <div class="description">
          <p class="title">
            Aufgrund des Geschlechtes diskriminiert, in Bezug auf andere soziale Kategorien privilegiert
          </p>
          <p class="examples">
            z.B. weiße, heterosexuelle, cis-geschlechtliche, junge, nicht arme Frau ohne Behinderung etc.
          </p>
        </div>
      </div>
      <div class="case-container">
        <div class="visual">
          <img src="~/assets/visualizations/discrimination3.png">
        </div>
        <div class="description">
          <p class="title">
            Aufgrund des Geschlechtes, der ›Rasse‹ und der Klassenzugehörigkeit diskriminiert, in Bezug auf andere soziale Kategorien privilegiert
          </p>
          <p class="examples">
            z.B. heterosexuelle, cis-geschlechtliche, junge, arme Frau of Color ohne Behinderung etc.
          </p>
        </div>
      </div>
    </div>
    <div class="narrative">
      <div class="step">
        <h2>Diskriminierung &amp; Privilegierung</h2>
        <p>
          Individuen und Gruppen werden im Rahmen vorherrschender Machtstrukturen aufgrund ihrer sozialen Kategorien unterschiedlich diskriminiert und privilegiert. Sie erleben deswegen nicht gleiche Bedingungen, wenn es um Zugang zu Ressourcen, soziale und politische Teilhabe, gesellschaftlichen Einschluss etc. geht.
        </p>
      </div>
      <div class="step">
        <p>
          Diskriminierung und Privilegierung müssen immer zusammen gedacht werden, denn die jeweils privilegierte Identität innerhalb einer sozialen Kategorie – also z.B. weiß-sein, Mann, heterosexuell, cis-geschlechtlich, ohne Behinderung – bildet die sogenannte »Norm«. Und damit die Basis für die diskriminierenden Strukturen.
          <br>Diskriminierung und Privilegierung können in einem Individuum oder in einer bestimmten sozialen Gruppe zusammen und gleichzeitig existieren.
        </p>
      </div>
      <div class="step">
        <p>
          Personen und Gruppen, die durch vorherrschende Machtstrukturen Privilegien erhalten, haben Bedingungen, die ihre Machtposition und Überlegenheit reproduzieren. Die Schwierigkeit liegt darin, dass Privilegien meist unsichtbar für diejenigen sind, die sie besitzen. Für privilegierte Personen und Gruppen ist die Leichtigkeit, mit der sie die Welt durchqueren, selbstverständlich und unsichtbar, weil es für sie einfach so ist, wie es ist und sie sich vorstellen, dass es für alle anderen auch so ist. Es fehlt die gelebte Erfahrung, die tagtäglich daran erinnert, von der Norm abzuweichen. Das Ungleichgewicht der Macht bleibt somit oftmals unregistriert.
        </p>
        <div class="detour">
          <a href="#">Exkurs zu den Dimensionen von Diskriminierung</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.chapter.discrimination_and_privilege {
  position: relative;

  & > .visualization {
    position: sticky;
    width: 50%;
    left: 50%;
    top: 0;
    margin-top: -100vh;

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

  & > .background {
    position: sticky;
    top: 0;

    width: 100%;
    height: 100vh;

    z-index: -1;

    background: url('~assets/lines/lines-small.jpg');
    background-size: cover;
  }

  & > .narrative {
    margin-top: -100vh;
    padding: 50vh 10% 50vh 10%;

    .step {
      position: relative;
      width: 40%;
      margin-bottom: 20vh;

      font-size: $font-size-small;
    }
  }

  h2 {
    color: $color-red;
    margin-bottom: 1rem;
  }

  .detour {
    margin-top: 3em;

    a {
      @include red-button;
    }
  }
}
</style>
