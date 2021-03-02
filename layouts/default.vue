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
  }

  .step {
    background: rgb(249, 250, 255, 0.95);
    padding: 1rem;
    margin-bottom: 5rem;

  }
}

a.cross-reference {
  &:before {
    content: "→ ";
  }
}

// other elements
@import "../styles/case-study";
@import "../styles/horizontal-content"

</style>
