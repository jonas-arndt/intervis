<template>
  <div class="chapter case_studies_from_germany">
    <div class="step">
      <h2 class="chapter-title">
        3 Fallbeispiele aus Deutschland
      </h2>
      <p>
        Zur Veranschaulichung der Auswirkungen von intersektionaler Diskriminierung schauen wir uns lokale Fallbeispiele aus Deutschland an. Die folgenden Beispiele sind ein kleiner Ausschnitt der zahlreichen, intersektionalen Diskriminierungsformen und -erfahrungen.
      </p>
      <p>
        Wähle ein Beispiel, worüber du mehr erfahren möchtest.
      </p>
    </div>

    <CaseStudy1 />
    <CaseStudy2 />
    <CaseStudy3 />
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.chapter.case_studies_from_germany {
  h2 {
    color: $color-red;
    margin-bottom: 0.5em;
  }

  p {
    margin-bottom: 3em;
    font-size: $font-size-small;
  }
}

@media (min-width: $media-breakpoint-min-m) {
  .chapter.case_studies_from_germany {
    position: relative;
    padding: 20vh 10% 0 10%;

    height: 100vh;

    p {
      width: 50%;
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
}
</style>
