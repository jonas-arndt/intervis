<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang="scss">
@import "../styles/_variables";
@import "../styles/_fonts";
@import "../styles/_reset";
@import "../styles/_defaults";

// custom style definitions

html {
  background-color: #F9FAFF;
}

.page {
  overflow: hidden;
}

.chapter {
  padding: 1rem;

  .chapter-title {
    font-weight: 700;
  }
}

a.cross-reference {
  &:before {
    content: "→ ";
  }
}

.popup-overlay .scroll-container {
  background-color: #ECEEF8;
  overflow-y: hidden;
}

@media (min-width: $media-breakpoint-min-m) {
  .popup-overlay {
    position: relative;
    height: 100vh;
    width: 100vw;

    padding: 2rem;

    .scroll-container {
      position: relative;
      height: 100%;
      width: auto;
    }
  }

  .chapter.horizontal-content {
    position: relative;
    height: 100%;
    width: 100%;

    .chapter-title {
      position: absolute;
      top: 3rem;
      left: 3rem;
    }

    .content {
      position: absolute;
      height: 85%;
      width: 100%;
      bottom: 0;
      left: 0;
      padding: 3rem;

      white-space: nowrap;
      overflow-x: scroll;

      .block {
        position: relative;
        display: inline-block;
        width: 40vw;
        height: 70%;

        white-space: normal;

        margin-right: 3rem;

        h3.block-title {
          font-size: $font-size-subtitle;
        }

        h4.block-title {
          font-size: $font-size-default;
          font-style: italic;
        }

        .text {
          font-size: $font-size-small;

          display: block;
          width: 100%;
        }

        &.columned {
          width: 80vw;

          p {
            columns: 2;
          }
        }

        &:last-child {
          margin-right: auto;
        }
      }
    }
  }
}

// other elements
@import "../styles/case_study";

</style>
