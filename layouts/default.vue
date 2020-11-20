<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang="scss">
@import "../styles/_variables";
@import "../styles/_fonts";

html {
  font-family: $font-family-pt-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

h1, h2, h3, h4, h5 {
  font-family: $font-family-signika;
}

h1 {
  font-size: $font-size-title;
}

h2 {
  font-size: $font-size-title;
}

p {
  margin-bottom: 1.2em;
}

a {
  text-decoration: none;

  &.cross-reference {
    &:before {
      content: "→ ";
    }
  }
}

ul {
  padding: 0;
}

li {
  list-style: none;
}

.quote {
  font-style: italic;

  &:before {
    content: "»";
  }
  &:after {
    content: "«";
  }
}
</style>
