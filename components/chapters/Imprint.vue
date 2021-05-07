<template>
  <div class="imprint">
    <FullWidthContent>
      <p class="call-for-feedback" v-html="$t('imprint_text1')" />

      <div class="credits">
        <div class="logos">
          <img class="logo" src="~/assets/logos/logo_fhp.png">
          <img class="logo" src="~/assets/logos/logo_uclab.png">
        </div>

        <div class="team">
          <h3 class="title" v-html="$t('imprint_text2')" />
          <p v-html="$t('imprint_text3')" />
        </div>
      </div>

      <p class="links">
        <span class="link" v-html="$t('imprint_text4')" />
        <span class="link" v-html="$t('imprint_text5')" />
      </p>
    </FullWidthContent>
  </div>
</template>

<style lang="scss">
@import "../../styles/_variables";

.imprint {
  padding-top: 3rem;
  padding-bottom: 5rem;
  background: $color-white;

  font-family: $font-family-signika;
  font-size: $font-size-small;

  .call-for-feedback {
    font-size: $font-size-default;
  }

  .credits {
    position: relative;
    width: 100%;
  }

  .logos {
    margin-bottom: 2em;
    position: relative;
    width: 60%;
    max-width: 15rem;

    .logo {
      display: block;
      width: 100%;
    }
  }

  .team {
    .title {
      font-size: $font-size-default;
      font-weight: bold;

      margin-bottom: 0.8em;
    }
  }

  .links {
    margin-top: 3rem;

    .link {
      margin-right: 1.5em;

      &:last-child {
        margin-right: inherit;
      }
    }
  }

  @media (min-width: $media-breakpoint-min-s) {
    .logos {
      width: 30%;
    }

    .team {
      position: absolute;
      left: 50%;
      top: 20%;
    }

  }
}
</style>
