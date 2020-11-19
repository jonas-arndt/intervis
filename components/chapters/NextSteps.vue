<template>
  <div class="chapter and-now">
    <h2>Und jetzt?</h2>
    <p>
      Intersektionalität ist bislang in allgemein gesellschaftlichen Diskursen und im Alltagswortschatz in Deutschland nicht fundiert und effektiv verbreitet und das politische und transformative Potenzial wird weitestgehend ausgeblendet.
    </p>
    <p>
      <span class="quote">Das ist zu bedauern, denn es ist wünschenswert, dass sich Intersektionalität als kritische Perspektive auf Machtverhältnisse im allgemein gesellschaftlichen Diskurs durchsetzt und in selbstverständlicher Weise einbezogen wird, wann immer es um Macht, Ungleichheit und diskursive Ausschlüsse geht.</span> (Meyer, 2017, S.155)
    </p>
    <p>
      Intersektionalität kann analysieren und uns ermöglichen zu begreifen, wie Macht- und Herrschaftsstrukturen komplex zusammenhängen und zusammenwirken, sich gegenseitig stabilisieren und verstärken, ohne dabei subjektive, erlebte Erfahrungen von Individuen und Gruppen aus dem Blick zu verlieren. Intersektionale Ansätze konzentrieren sich also nicht nur auf die individuelle Dimension von Diskriminierung, sondern gleichermaßen auf die institutionelle und strukturelle Diskriminierung, was die Art und Weise von Maßnahmen, die Diskriminierung entgegenwirken können, erweitert. Sie bieten das Potenzial, Personen und Gruppen, die in herkömmlichen Anti-Diskriminierungsrahmen tendenziell unsichtbar gemacht werden, einzuschließen.
    </p>
    <p>
      Europäische rechtliche und politische Rahmenbedingungen konzeptualisieren Diskriminierung aus einer eindimensionalen Perpsketive. Das Center for Intersectional Justice in Berlin gibt einige <a href="#" class="cross-reference">Handlungsempfehlungen</a>, um die notwendige intersektionelle Perspektive in den Antidiskriminierungsbemühungen in Europa voranzubringen.
    </p>

    <h3>Und was kann ich da jetzt machen?</h3>
    <ul class="intented-list">
      <li>
        Anerkennen, dass intersektionale Diskriminierung, Marginalisierung und Unterdrückung ein strukturelles Problem ist!
      </li>
      <li>
        Sich Privilegien bewusst werden, sich selbst reflektieren und kritisieren!
      </li>
      <li>
        Anerkennen, dass dies unkomfortabel und unbequem ist. Und erkennen, dass genau das gut und wichtig ist!
      </li>
      <li>
        Sich eigenständig informieren, also dazu lesen, Veranstaltungen besuchen etc.! Marginalisierte Personen stehen in keinster Weise in einer Bringschuld!
      </li>
      <li>
        Marginalisierten Menschen, die Diskriminierung erleben und davon berichten, zuhören und ihre gelebten Erfahrungen nicht negieren, sondern diese als wertvolles und wichtiges Wissen betrachten und einbeziehen!
      </li>
      <li>
        Anerkennen, dass die eigenen Erfahrungen, das eigene Wissen etc. situiert, limitiert und voreingenommen sind und nicht von der eigenen Position, Situation und Perspektive auf andere schließen!
      </li>
      <li>
        Üben, strukturelle Unterdrückung zu erkennen und mit einer »intersektionalen Brille« Dinge und Situationen im alltäglichen, privaten und beruflichen Leben beobachten! Wer ist die Norm? Wer wird nicht mit eingeschlossen?
      </li>
      <li>
        Sich die Frage stellen: Wie bin ich an der Aufrechterhaltung und Verstärkung diskriminierender Strukturen beteiligt im privaten und im beruflichen Kontext?
      </li>
      <li>
        Verantwortung übernehmen! Wen fördere ich, wen zitiere ich, wen retweete ich, wen binde ich ein, wen stelle ich ein, …?
      </li>
      <li>
        Mit anderen über Intersektionalität, Diskriminierung und Privilegierung sprechen, es teilen, es benennen, sich bewusst für eine Diskussion oder Auseinandersetzung entscheiden!
      </li>
    </ul>

    <h3>Weiterführende Quellen für Dich</h3>

    <div class="books">
      <h4>Artikel &amp; Bücher</h4>
      <ul>
        <li>Theorien der Intersektionalität zur Einführung</li>
        <li>Intersektionalität in Deutschland. Chancen, Lücken und Herausforderungen</li>
        <li>„Reach Everyone on the Planet …“ – Kimberlé Crenshaw und die Intersektionalität</li>
      </ul>
    </div>

    <div class="links">
      <h4>Websiten</h4>
      <ul>
        <li>Portal Intersektionalität</li>
        <li>Center for Intersectional Justice</li>
        <li>European Network Against Racism</li>
        <li>Antidiskriminierungsstelle des Bundes</li>
        <li>European Union Agency for Fundamental Rights</li>
      </ul>
    </div>

    <div class="social-media">
      <h4>Soziale Medien</h4>
      <ul>
        <li class="instagram">
          Tupoka Ogette (@tupoka.o)
        </li>
        <li class="instagram">
          Tupoka Ogette (@tupoka.o)
        </li>
        <li class="twitter">
          Kimberlé Crenshaw (@sandylocks)
        </li>
        <li class="twitter">
          Emilia Roig (@EmiliaZenzile)
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.chapter.and-now {
  background-color: $color-red;
  padding: 3rem 20% 5rem 20%;
  color: white;

  ul.intented-list {
    $intent: 1em;

    padding-left: $intent;
    font-size: $font-size-small;
    font-weight: 600;

    li {
      width: 45%;
      margin-bottom: 2em;

      &:nth-child(2n) {
        position: relative;
        left: 55%;
      }

      &:before {
        position: absolute;
        width: $intent;
        margin-left: -$intent;
        content: "–";
      }
    }
  }

  h4 {
    margin-top: 2em;
    margin-bottom: 0.7em;
  }

  .books, .links, .social-media {
    $icon-width: 1.2em;
    $multiplier: 1.5;

    position: relative;
    width: 33%;

    ul {
      padding-left: $multiplier * $icon-width;

      font-family: $font-family-signika;
      font-size: $font-size-small;
      font-weight: 600;
    }

    li {
      position: relative;
      margin-bottom: 1em;

      &:before {
        position: absolute;
        width: $icon-width;
        height: 100%;
        content: " ";
        margin-left: -$multiplier * $icon-width;
      }

    }

    &.books {
      li:before {
        background: url('~assets/icons/book.svg') center no-repeat;
        background-size: contain;
      }
    }

    &.links {
      left: 33%;

      li:before {
        background: url('~assets/icons/white-arrow-right.svg') center no-repeat;
        background-size: 60% auto;
      }
    }

    &.social-media {
      left: 66%;

      li.instagram:before {
        background: url('~assets/icons/instagram.svg') center no-repeat;
        background-size: contain;
      }

      li.twitter:before {
        background: url('~assets/icons/twitter.svg') center no-repeat;
        background-size: contain;
      }
    }
  }

  h2 {
    font-size: $font-size-title;
    margin-bottom: 1.8rem;
    color: $color-black;
  }

  h3 {
    font-size: $font-size-subtitle;
    margin-top: 4rem;
    margin-bottom: 1.6rem;
    color: $color-black;
    font-weight: 400;
  }

  a {
    color: $color-black;
  }
}
</style>
