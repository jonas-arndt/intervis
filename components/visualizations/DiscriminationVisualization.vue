<template>
  <div class="discrimination-visualization">
    <div class="case-container">
      <div class="visual">
        <img src="~/assets/visualizations/discrimination1.png">
      </div>
      <div class="description">
        <p class="title">
          In allen sozialen Kategorien privilegiert
        </p>
        <p class="examples">
          z.B. weißer, heterosexueller, cis-geschlechtlicher, junger, nicht armer Mann ohne Behinderung
        </p>
      </div>
    </div>
    <div class="case-container">
      <div class="visual">
        <img src="~/assets/visualizations/discrimination2.png">
      </div>
      <div class="description">
        <p class="title">
          Aufgrund des Geschlechtes diskriminiert (Sexismus), in Bezug auf andere soziale Kategorien privilegiert
        </p>
        <p class="examples">
          z.B. weiße, heterosexuelle, cis-geschlechtliche, junge, nicht arme Frau ohne Behinderung
        </p>
      </div>
    </div>
    <div class="case-container">
      <div class="visual">
        <img src="~/assets/visualizations/discrimination3.png">
      </div>
      <div class="description">
        <p class="title">
          Aufgrund des Geschlechtes (Sexismus), der ›Rasse‹ (Rassismus) und der Klassenzugehörigkeit (Klassismus) diskriminiert, in Bezug auf andere soziale Kategorien privilegiert
        </p>
        <p class="examples">
          z.B. heterosexuelle, cis-geschlechtliche, junge, arme Frau of Color ohne Behinderung
        </p>
      </div>
    </div>
  </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.discrimination-visualization {
  position: relative;
  height: 100vh;
  width: 90%;
  padding: 1rem;

  .case-container {
    position: relative;
    height: 30vh;

    .visual {
      display: inline-block;

      position: relative;
      width: 35%;
      vertical-align: middle;
      margin-right: 0%;

      img {
        position: relative;
        width: 100%;
        height: auto;
      }
    }

    .description {
      display: inline-block;

      position: relative;
      width: 60%;
      vertical-align: middle;

      font-size: $font-size-smaller;

      .title {
        font-weight: 700;
      }
    }
  }

  @media (min-width: $media-breakpoint-min-m) {
    left: 60%;
    width: 30%;
  }
}

</styles>
