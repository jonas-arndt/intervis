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

.chapter {
  position: relative;

  .chapter-title {
    font-weight: 700;
    margin-bottom: 0.6em;
  }

  .step {
    background: rgb(249, 250, 255, 0.95);
    padding: 1rem;
  }

  .background-visualization {
    z-index: -100;
    position: sticky;
    top: 0;
  }

  @media (min-width: $media-breakpoint-min-m) {
    .narrative {
      position: relative;
      padding-left: 10%;
      padding-right: 10%;

      width: 50%;

      .step {
        background: none;
        padding: 0.8em 1em 0.8em 1em;
      }

      &.right {
        left: 50%;
      }

      &.with-background .step {
        background: rgb(249, 250, 255, 0.95);
      }
    }
  }
}

// Layout definitions from google spreadsheet
b {
  font-weight: 600;
}

i {
  font-style: italic;
}

a {
  font-weight: 800;
  color: $color-red;

  &:hover {
    color: $color-black;
  }
}

.tooltip {
  font-weight: 800;
  color: $color-black;
  cursor: help;
  border-bottom: 1px dotted $color-black;
}

.red-bordered-text, .grey-bordered-text {
  border: 2px solid;
  font-weight: bold;
  border-radius: 0.7em;
  padding: 0 0.2em 0 0.2em;
  margin: 0 -0.2em 0 -0.2em;

  &.red-bordered-text {
    border-color: $color-red;
  }

  &.grey-bordered-text {
    border-color: $color-medium-grey;
  }
}
</style>
