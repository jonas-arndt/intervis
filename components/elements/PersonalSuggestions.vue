<template>
  <ul class="personal-suggestions">
    <li v-html="$t('chapter5-point1')" />
    <li v-html="$t('chapter5-point2')" />
    <li v-html="$t('chapter5-point3')" />
    <li v-html="$t('chapter5-point4')" />
    <li v-html="$t('chapter5-point5')" />
    <li v-html="$t('chapter5-point6')" />
    <li v-html="$t('chapter5-point7')" />
    <li v-html="$t('chapter5-point8')" />
    <li v-html="$t('chapter5-point9')" />
  </ul>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.personal-suggestions {
  padding-left: 1em;
  font-weight: 600;
  font-family: $font-family-signika;
  line-height: 1.33em;
  margin-top: 4em;
  margin-bottom: 8em;

  li {
    margin-bottom: 2em;
    position: relative;

    &:before {
      position: absolute;
      display: block;
      left: -0.8em;
      content: "–";
      font-weight: normal;
    }
  }

  @media (min-width: $media-breakpoint-min-m) {
    li {
      width: 45%;

      &:nth-child(2n) {
        position: relative;
        left: 55%;
      }
    }
  }
}

</style>
