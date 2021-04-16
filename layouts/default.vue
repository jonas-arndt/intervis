<template>
  <Nuxt />
</template>

<style lang="scss">
@import "../styles/_variables";
@import "../styles/_fonts";
@import "../styles/_reset";
@import "../styles/_defaults";

// custom style definitions

html,
body,
#__nuxt,
#__layout {
    height: 100%;
}

.page {
  overflow: hidden;
}

.chapter {
  .chapter-title {
    font-weight: 700;
    margin-bottom: 0.6em;
  }

  .step {
    background: rgb(249, 250, 255, 0.95);
    padding: 1rem;
  }

  @media (min-width: $media-breakpoint-min-m) {
    .narrative {
      padding-left: 10%;
      padding-right: 10%;

      .step {
        width: 60%;
        padding: $font-size-small 1em $font-size-small 1em;
      }
    }
  }
}

a.cross-reference {
  &:before {
    content: "→ ";
  }
}

.red-button {
  display: inline-block;
  padding: 0.8em 1.2em 0.8em 1.2em;

  border-radius: 1.7em;
  border: none;
  background: $color-red;

  font-family: $font-family-signika;
  color: white;
}

// other elements
@import "../styles/case-study";
@import "../styles/horizontal-content"

</style>
