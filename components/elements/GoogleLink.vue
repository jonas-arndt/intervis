<template>
  <a href="https://forms.gle/vNSTSwdxJrdoHUB77" target="_blank" class="google-link">
    <span class="main-statement">Hier findest du<br>einen 15-minütigen<br>Fragebogen zum<br>Artikel.</span>
    <span class="sub-statement">Wir freuen uns über<br>Deine Teilnahme!</span>
  </a>
</template>

<style lang="scss">
@import "../../styles/_variables";

$circle-radius: 11em;

.google-link {
  display: block;
  width: $circle-radius;
  height: $circle-radius;
  border-radius: $circle-radius;

  padding-top: 1.8em;

  font-family: $font-family-signika;
  font-size: $font-size-default;
  line-height: 1.2 * $font-size-default;
  font-weight: normal;
  text-align: center;
  color: $color-white;

  background-color: $color-red;
  cursor: pointer;

  .main-statement, .sub-statement {
    display: block;
  }
  .main-statement {
    font-weight: 600;
  }
}

</style>
