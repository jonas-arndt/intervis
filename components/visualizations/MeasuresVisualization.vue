<template>
  <div class="measures-visualization">
    <div class="fallback">
      <div class="step-1">
        <Chapter4Step1Visualization />
      </div>
      <div class="step-2">
        <Chapter4Step2Visualization />
      </div>
      <div class="step-3">
        <Chapter4Step3Visualization />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.measures-visualization {
  .step-1, .step-2, .step-3 {
    position: absolute;
    top: 0%;
    height: 33%;
    min-height: 100vh;
    width: 100%;

    &.step-2 {
      top: 33%;
    }

    &.step-3 {
      top: 67%;
    }

    & > * {
      position: sticky;
      top: 0;
      width: 100%;
      height: 100vh;
    }
  }
}
</style>
