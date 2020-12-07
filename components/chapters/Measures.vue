<template>
  <div class="chapter intersectional_measures">
    <div class="visualization">
      <div class="visual top-left">
        <img src="~/assets/visualizations/measures1.png">
      </div>
      <div class="visual bottom-right">
        <img src="~/assets/visualizations/measures2.png">
      </div>
    </div>
    <div class="narrative">
      <div class="step">
        <h2>Intersektionale Maßnahmen</h2>
        <p>
          Die zuvor betrachteten Beispiele zeigen: Es braucht besondere Maßnahmen, um Diskriminierung und Privilegierung auszugleichen und somit gleiche Bedingungen zu schaffen. Diese müssen intersektional gedacht und auf alle vier Dimensionen von Diskriminierung bezogen werden.
        </p>
        <p>
          Anti-Diskriminierungsmaßnahmen, die beispielsweise ausschließlich sexistische Diskriminierung bekämpfen, und somit eindimensional und nicht intersektional sind, richten sich nur an Frauen, die weiß, heterosexuell, cis-geschlechtlich, jung, nicht arm, ohne Behinderung etc. sind – die Privilegiertesten der marginalisierten Gruppe – und nur ihre gelebten Erfahrungen und Interessen stehen im Vordergrund (dies wird auch als → white feminism bezeichnet).
        </p>
      </div>

      <div class="step">
        <p>
          Frauen*, die intersektional marginalisiert sind (z.B. Frauen* of Color, Transfrauen*, muslimische Frauen*, arme Frauen*, Frauen* mit Behinderung), werden somit nicht mit eingeschlossen. Dies hat zur Folge, dass intersektional marginalisierte Personen und Gruppen nicht befreit werden, sie dadurch sogar noch stärker marginalisiert werden können.
        </p>
        <p>
          Erst, wenn die Rechte, Interessen und Bedürfnisse der strukturell am stärksten marginalisierten Personen und Gruppen durchgesetzt werden, werden alle Menschen von den vorherrschenden Machtstrukturen befreit.
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
  position: relative;

  padding: 20vh 10% 50vh 10%;

  .visualization {
    position: sticky;
    top: 0;
    width: 45%;
    height: 90vh;
    padding: 10%;

    .visual {
      position: absolute;
      width: 60%;

      img {
        width: 100%;
        height: auto;
      }

      &.top-left {
        top: 0;
        left: 0;
      }

      &.bottom-right {
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

  &:after {
    content: "";
    background: url('~assets/lines/lines-small.jpg');
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
}
</style>
