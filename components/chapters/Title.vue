<template>
  <div class="chapter title">
    <div class="language-switcher">
      <ul>
        <li :class="{ 'active': language == 'de' }">
          <a href="#" @click.prevent="language = 'de'">DE</a>
        </li>
        <li :class="{ 'active': language == 'en' }">
          <a href="#" @click.prevent="language = 'en'">EN</a>
        </li>
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
    <span class="instruction">Scrolle nach unten, um antworten darauf zu finden</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      language: 'de'
    }
  }
}

</script>

<style lang="scss" scoped>
@import "../../styles/_variables";

.chapter.title {
  position: relative;

  .language-switcher {
    li {
      display: inline-block;
      margin-right: 0.5em;

      a {
        display: block;
        font-family: $font-family-signika;
        font-weight: 700;
        color: $color-black;
      }

      &.active {
        a {
          border: 2px solid $color-red;
          border-radius: 1.2em;
          padding: 0.1em 0.4em 0.1em 0.4em;

          color: $color-red;
        }
      }
    }
  }

  .date {
    font-family: $font-family-signika;
    font-weight: 600;
    font-size: $font-size-small;
  }

  h1 {
    font-weight: 700;
  }

  .subtitle {
    font-family: $font-family-signika;
    font-weight: 400;
    font-size: $font-size-title-caption;
  }

  .introduction {
    font-size: $font-size-title-caption;
    font-style: italic;
  }

  .instruction {
    $icon-width: 1.2em;
    $multiplier: 1.5;

    position: relative;
    padding: 0.5em 0 0.5em 0;
    padding-left: $multiplier * $icon-width;

    font-family: $font-family-signika;
    font-size: $font-size-small;
    color: $color-red;

    &:before {
      position: absolute;
      width: $icon-width;
      height: 100%;
      content: "";
      margin-left: -$multiplier * $icon-width;
      background: url('~assets/icons/red-arrow-down.svg') center no-repeat;
      background-size: contain;

    }
  }

  // background image
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
