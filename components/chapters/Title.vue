<template>
  <div class="chapter title">
    <div class="language-switcher">
      <ul>
        <li><a href="#">DE</a></li>
        <li><a href="#">EN</a></li>
      </ul>
    </div>
    <span class="date">XX.XX.XXXX</span>
    <h1>Inter…was?<br>Intersektionalität!</h1>
    <p class="subtitle">
      Eine visuelle Einführung in das Zusammenwirken von Machtstrukturen
    </p>
    <p class="introduction">
      Identische Qualifikationen.
      <br>Identischer Lebenslauf.
      <br>Identische Bewerbung.
      <br>Der einzige Unterschied: Name und Foto.
      <br>Warum wird Sandra zum Vorstellungsgespräch eingeladen,
      <br>Meyrem aber nicht?
    </p>
    <span>Scrolle nach unten, um antworten darauf zu finden</span>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.chapter.title {
  position: relative;

  &:after {
    content: "";
    background: url('~assets/lines/lines-grey.jpg');
    background-size: cover;
    opacity: 0.25;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
}
</style>
