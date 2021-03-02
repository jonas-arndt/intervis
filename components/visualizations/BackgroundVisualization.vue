<template>
  <div class="background-visualization">
    <div class="lines" />
  </div>
</template>

<style scoped lang="scss">
.background-visualization {
  position: relative;
  height: 100%;
  opacity: 0.3;

  .lines {
    position: sticky;
    top: 0;

    width: 100%;
    height: 100vh;

    background: url('~assets/lines/lines-grey.jpg');
    background-size: cover;
  }
}
</style>
