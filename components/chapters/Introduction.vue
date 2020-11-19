<template>
  <div class="chapter grid-visualization">
    <div class="visualization">
      <ul>
        <li>Zugang</li>
        <li>Einschluss</li>
        <li>Teilhabe</li>
        <li>Anerkennung</li>
      </ul>
    </div>
    <div class="narrative">
      <div class="step">
        <p>
          Zugang zu Ressourcen wie zum Arbeitsmarkt und zu Wohnraum, gesellschaftlicher Einschluss, soziale und politische Teilhabe, gesellschaftliche Anerkennung. Als Person A kannst Du diese Wörter ohne Probleme lesen.
        </p>
        <p>
          Was passiert, wenn du in andere Personen schlüpfst und aus ihrer Sicht auf diese Wörter schaust?
        </p>
      </div>
      <div class="step">
        <p>
          Fällt Dir etwas auf?
          <br>Die Wörter sind aus der Sicht dieser Person nur noch schwer zu erkennen, fast unleserlich.
        </p>
      </div>
      <div class="step">
        <p>
          Verschiedene Personen haben ungleiche Bedingungen, wenn es um Zugang zu Ressourcen, gesellschaftlichen Einschluss, soziale und politische Teilhabe, gesellschaftliche Anerkennung etc. geht. Sie werden unterschiedlich benachteiligt und bevorzugt.
        </p>
        <p>
          Um das genauer verstehen zu können, werfen wir einen Blick darauf, was unter Intersektionalität, Diskriminierung und Privilegerung verstanden wird.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../styles/_variables";

.chapter.grid-visualization {
  position: relative;

  &:after {
    content: "";
    background: url('~assets/lines/lines-grey.jpg');
    background-size: cover;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
}
</style>
