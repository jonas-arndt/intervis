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

.case-study-visalization {
  .quote {
    position: absolute;
    display: block;
    height: 100%;
    width: 100%;
    top: 0;
    margin: 0;

    font-size: $font-size-subtitle;
    font-weight: bold;
    font-style: italic;

    .text {
      display: table-cell;
      height: 100vh;
      vertical-align: middle;
    }
  }

  .legend {
    position: absolute;
    bottom: 0;
    right: 0;

    span {
      display: block;
    }

    .digit {
      font-size: $font-size-title;
      font-style: italic;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .details {
      font-family: $font-family-signika;
      font-size: $font-size-small;
    }
  }
}

.chapter-4-visualization {
  .visual {
    position: absolute;
    height: 45%;
    width: 50%;
    overflow: hidden;

    img {
      max-height: 100%;
      max-width: 100%;
    }

    &.top-left {
      top: 5%;
      left: 15%;
    }

    &.bottom-right {
      right: 15%;
      bottom: 5%;

      img {
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
  }

  @media (min-width: $media-breakpoint-min-m) {
    .visual {
      width: 25%;

      &.top-left {
        left: 7.5%
      }

      &.bottom-right {
        right: 57.5%;
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
