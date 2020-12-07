<template>
  <div class="chapter case_studies_from_germany">
    <div class="step">
      <h2>Fallbeispiele aus Deutschland</h2>
      <p>
        Zur Veranschaulichung der Auswirkungen von intersektionaler Diskriminierung schauen wir uns lokale Fallbeispiele aus Deutschland an. Die folgenden Beispiele sind ein kleiner Ausschnitt der zahlreichen, intersektionalen Diskriminierungsformen und -erfahrungen. Wähle eine Beispiel, worüber du mehr erfahren möchtest.
      </p>
    </div>

    <div class="case-study">
      <div class="case-study-link">
        <a href="#">Frauen* mit Kopftuch beim Zugang zum Arbeitsmarkt</a>
      </div>
    </div>
    <div class="case-study">
      <div class="case-study-link">
        <a href="#">Sinti*zze und Rom*nja Kinder im Schulsystem</a>
      </div>
    </div>
    <div class="case-study">
      <div class="case-study-link">
        <a href="#">Frauen* mit Behinderung auf dem Arbeitsmarkt</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.chapter.case_studies_from_germany {
  position: relative;
  padding: 20vh 10% 0 10%;

  height: 100vh;

  h2 {
    color: $color-red;
    margin-bottom: 0.5em;
  }

  p {
    margin-bottom: 3em;
    width: 50%;
    font-size: $font-size-small;
  }

  .case-study {
    position: relative;
    display: inline-block;
    width: 22%;
    margin-right: 16%;

    vertical-align: top;

    &:last-child {
      margin-right: inherit;
    }
  }

  .case-study-link {
    position: relative;
    height: 10rem;

    padding: 0.25rem 0.75rem 0.25rem 0.75rem;

    $border-definition: 2px solid $color-red;

    &:before, &:after {
      content: "";

      position: absolute;
      width: 1em;
      height: 1em;
    }

    &:before {
      top: 0;
      left: 0;

      border-top: $border-definition;
      border-left: $border-definition;
    }

    &:after {
      right: 0;
      bottom: 0;

      border-right: $border-definition;
      border-bottom: $border-definition;
    }

    a {
      font-family: $font-family-signika;
      font-size: $font-size-subtitle;
      color: $color-black;

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
