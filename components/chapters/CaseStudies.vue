<template>
  <div class="chapter case_studies_from_germany">
    <div class="narrative">
      <div class="step">
        <h2 class="chapter-title">
          3 Fallbeispiele aus Deutschland
        </h2>
        <p>
          Zur Veranschaulichung der Auswirkungen von intersektionaler Diskriminierung schauen wir uns Fallbeispiele aus Deutschland an. Die folgenden Beispiele sind ein kleiner Ausschnitt der zahlreichen, intersektionalen Diskriminierungsformen und -erfahrungen.
        </p>
        <p>
          Wähle ein Beispiel, worüber du mehr erfahren möchtest.
        </p>
      </div>
    </div>

    <CaseStudy1 />
    <CaseStudy2 />
    <CaseStudy3 />
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.chapter.case_studies_from_germany {
  padding-top: 30vh;
  padding-bottom: 20vh;

  h2 {
    color: $color-red;
    margin-bottom: 0.5em;
  }

  p {
    margin-bottom: 3em;
  }

  @media (min-width: $media-breakpoint-min-m) {
  }
}

</style>
