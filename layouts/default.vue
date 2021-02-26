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

// other elements
@import "../styles/case-study";
@import "../styles/horizontal-content"

</style>
