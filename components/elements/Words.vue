<template>
  <div class="words">
    <img v-if="$i18n.locale == 'en'" src="~/assets/teaser/teaser-text-en.svg" alt="Access, Inclusion, Participation, Acknowledgment">
    <img v-if="$i18n.locale == 'de'" src="~/assets/teaser/teaser-text-de.svg" alt="Zugang, Integration, Teilhabe, Anerkennung">
  </div>
</template>

<style lang="scss" scoped>
.words {
  position: relative;
  width: 100%;
  height: 100%;

  img {
    position: relative;
    max-width: 100%;
    max-height: 100%;

    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
