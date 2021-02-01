<template>
  <div class="chapter title">
    <div class="inside">
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
      <div class="title-container">
        <h1>Inter…was?<br>Intersektionalität!</h1>
        <p class="subtitle">
          Eine visuelle Einführung in das Zusammenwirken von Machtstrukturen
        </p>
      </div>
      <p class="introduction">
        Identische Qualifikationen.
        <br>Identischer Lebenslauf.
        <br>Identische Bewerbung.
        <br>Der einzige Unterschied: Name und Foto.
        <br>Warum wird Sandra zum Vorstellungsgespräch eingeladen,
        <br>Meyrem aber nicht?
      </p>
      <span class="instruction">Scrolle nach unten, um Antworten darauf zu finden.</span>
    </div>
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
  height: 100vh;
  min-height: 600px;

  padding: 3em 10% 3em 10%;

  & > .inside {
    position: relative;
    height: 100%;
  }

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
    position: absolute;
    top: 15%;
    margin-top: -1.5em;

    font-family: $font-family-signika;
    font-weight: 600;
    font-size: $font-size-small;
  }

  .title-container {
    position: absolute;
    top: 15%;
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
    position: absolute;
    bottom: 50%;
    margin-bottom: -7em;
    font-size: $font-size-title-caption;
    font-style: italic;
  }

  .instruction {
    position: absolute;
    bottom: 0;

    $icon-width: 1.2em;
    $multiplier: 1.5;

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
      background: url('~assets/icons/red-arrow-down.svg') no-repeat;
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
