<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang="scss">
@import "../styles/_fonts";

html {
  font-family:
    'PT Serif',
    sans-serif;
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
  font-family: 'Signika', sans-serif;
}

ul {
  padding: 0;
}

li {
  list-style: none;
}
</style>
