<template>
  <div class="chapter case_studies_from_germany">
    <div class="step">
      <h2>Fallbeispiele aus Deutschland</h2>
      <p>
        Kurzer Text: Lokale Fallbeispiel zur Veranschaulichung. Hier genannten Beispiele sind nur ein kleiner Teil. Du kannst dir aussuchen mit welchem Beispiel du anfangen möchtest. Lorem ipsum dolor sit amet, consectetuer.
      </p>
    </div>

    <div class="case-study-1">
      <div class="case-study-link">
        <a href="#">Frauen* mit Kopftuch beim Zugang zum Arbeitsmarkt</a>
      </div>
    </div>
    <div class="case-study-2">
      <div class="case-study-link">
        <a href="#">Sinti*zze und Rom*nja Kinder im Schulsystem</a>
      </div>
    </div>
    <div class="case-study-3">
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
