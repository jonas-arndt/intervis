<template>
  <div class="working-handicapped-visualization">
    <div class="fallback">
      <div class="step-1">
        <div class="inside">
          <Chapter3Case3Step1Visualization />
        </div>
      </div>

      <div class="step-2">
        <div class="inside">
          <Chapter3Case3Step2Visualization />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../styles/_variables";

.working-handicapped-visualization {
  .step-1, .step-2 {
    position: absolute;
    min-height: 100vh;
    width: 100%;
    height: 25%;

    & > .inside {
      position: sticky;
      top: 0;
      height: 100vh;
      width: 100%;
    }

    // step specific styles

    &.step-1 {
      top: 25%;
    }
    &.step-2 {
      top: 75%;
    }
  }
}
</style>
