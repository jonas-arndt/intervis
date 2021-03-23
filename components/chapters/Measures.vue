<template>
  <div class="chapter intersectional_measures">
    <MeasuresVisualization class="background-visualization" />
    <div class="narrative">
      <div class="step">
        <h2 class="chapter-title">
          4 Intersektionale Maßnahmen
        </h2>
        <p>
          Die zuvor betrachteten Beispiele zeigen: Es braucht besondere Maßnahmen, um Diskriminierung und Privilegierung auszugleichen und somit gleiche Ausgangsbedingungen zu schaffen. Diese müssen intersektional gedacht sein und nicht nur die individuelle Dimension, sondern vor allem die strukturelle und institutionelle Dimension von Diskriminierung einbeziehen.
        </p>
        <p>
          Antidiskriminierungsmaßnahmen, die beispielsweise ausschließlich sexistische Diskriminierung bekämpfen, und somit eindimensional und nicht intersektional sind, richten sich tendenziell eher an Frauen, die weiß, heterosexuell, cis-geschlechtlich, jung, nicht arm, ohne Behinderung etc. sind – die Privilegiertesten der marginalisierten Gruppe. Ihre gelebten Erfahrungen und Interessen stehen im Vordergrund, unterscheiden sich aber womöglich gravierend von denen anderer Frauen*.
        </p>
      </div>

      <div class="step">
        <p>
          Frauen*, die intersektional marginalisiert sind (z.B. Frauen* of Color, Transfrauen*, Frauen* mit Hidschab, arme Frauen*, Frauen* mit Behinderung), werden somit nicht mit eingeschlossen.
        </p>
        <p>
          Die intersektionale Diskriminierung einer Frau* mit Hidschab kann beispielsweise nicht aufgedeckt werden, wenn nur Geschlecht oder nur Religion/›Rasse‹/Ethnizität betrachtet wird, denn in der gleichen Situation ist eine Frau* ohne Hidschab und ein muslimischer Mann nicht der gleichen Art/Form von Diskriminierung ausgesetzt.
        </p>
        <p>
          Solche eindimensionalen Maßnahmen können folglich intersektionale Diskriminierung und Marginalisierung nicht überwinden. Personen und Gruppen können dadurch sogar möglicherweise noch stärker marginalisiert werden.
        </p>
      </div>

      <div class="step">
        <p>
          Erst wenn die Rechte, Interessen und Bedürfnisse der strukturell am stärksten marginalisierten Personen und Gruppen durchgesetzt bzw. berücksichtigt werden, werden alle Menschen von sozialer Ungleichheit und asymmetrischen Machtverhältnissen befreit. Ungleiche Ausgangsbedingungen beim Zugang zu Ressourcen, bei sozialer und politischer Teilhabe, bei gesellschaftlicher Einbeziehung und Anerkennung etc. können überwunden werden.
        </p>
      </div>

      <div class="step">
        <p class="highlight">
          Denn ihre Befreiung erfordert den vollständigen Abbau und die Überwindung aller Macht- und Herrschaftsstrukturen in ihrer Verwobenheit.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../styles/_variables";

.chapter.intersectional_measures {

  .narrative {
    h2 {
      color: $color-red;
    }

    p {
      font-size: $font-size-small;

      &.highlight {
        font-size: $font-size-subtitle;
        font-weight: 700;
        font-style: italic;

        margin-bottom: 0;
      }
    }
  }

  .visualization {
    position: relative;

    .visual {

      img {
        max-width: 60%;
        height: auto;
      }

      &.bottom-right {
        position: relative;
        left: 40%;
      }
    }
  }
}

@media (min-width: $media-breakpoint-min-m) {
  .chapter.intersectional_measures {
    position: relative;
    padding: 20vh 10% 50vh 10%;

    .visualization {
      position: sticky;
      top: 0;
      width: 45%;
      height: 90vh;
      padding: 10%;

      .visual {
        width: 60%;

        img {
          width: 100%;
          max-width: none;
          height: auto;
        }

        &.top-left {
          position: absolute;
          top: 0;
          left: 0;
        }

        &.bottom-right {
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }
    }

    .narrative {
      position: relative;
      width: 45%;
      left: 50%;

      padding-bottom: 100vh;

      .step {
        margin-top: 50vh;

        &:first-child {
          margin-top: -50vh;
        }
      }
    }
  }
}
</style>
