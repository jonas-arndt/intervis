<template>
  <div class="measures-visualization">
    <div class="visual-container">
      <div class="visual top-left">
        <img src="~/assets/visualizations/measures1.png">
      </div>
      <div class="visual bottom-right">
        <img src="~/assets/visualizations/measures2.png">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.measures-visualization {
  position: relative;
  height: 100vh;
  width: 100%;
  padding: 1rem;

  .visual-container {
    position: relative;
    top: 10%;
    left: 10%;
    width: 80%;
  }

  .visual {
    img {
      max-width: 60%;
      height: auto;
    }

    &.bottom-right {
      position: relative;
      left: 40%;
    }
  }

  @media (min-width: $media-breakpoint-min-m) {
    .visual-container {
      width: 45%;
      height: 80%;
      left: 0;
      padding: 10%;
    }

    .visual {
      width: 60%;

      img {
        width: 100%;
        max-width: none;
        height: auto;
      }

      &.top-left {
        position: absolute;
        top: 0;
        left: 0;
      }

      &.bottom-right {
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
  }
}
</style>
