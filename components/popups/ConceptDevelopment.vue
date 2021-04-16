<template>
  <div class="chapter concept-development horizontal-content">
    <h2 class="chapter-title">
      {{ $t('overlay1-title') }}
    </h2>
    <div class="content">
      <div class="block">
        <p class="text teaser">
          {{ $t('overlay1-intro') }}
        </p>
      </div>

      <div class="block">
        <div class="title usa icon">
          <h3 class="label">
            {{ $t('overlay1-subtitle1') }}
          </h3>
        </div>
        <h4 class="block-title">
          <q>{{ $t('overlay1-heading1') }}</q>
        </h4>
        <p class="text">
          {{ $t('overlay1-text1') }}
        </p>
      </div>

      <div class="block columned">
        <h4 class="block-title">
          {{ $t('overlay1-heading2') }}
        </h4>
        <p class="text">
          {{ $t('overlay1-text2') }}
        </p>
      </div>

      <div class="block">
        <h4 class="block-title">
          {{ $t('overlay1-heading3') }}
        </h4>
        <p class="text">
          {{ $t('overlay1-text3') }}
        </p>
      </div>

      <div class="block columned">
        <div class="title germany icon">
          <h3 class="label">
            {{ $t('overlay1-subtitle2') }}
          </h3>
        </div>
        <h4 class="block-title">
          {{ $t('overlay1-heading4') }}
        </h4>
        <p class="text">
          {{ $t('overlay1-text4') }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../styles/_variables";

.concept-development {

  @media (min-width: $media-breakpoint-min-m) {

    .block {

      .title {
        position: absolute;
        top: 0;

        margin-top: 1.5rem;
        margin-bottom: 0.75rem;

        .label {
          font-weight: 400;
          font-size: $font-size-subtitle;
        }

        &.germany {
          height: 3rem;
          background: url('~assets/icons/states/deutschland.svg') no-repeat;
          background-size: contain;

          .label {
            position: relative;
            left: 1.3rem;
            top: 1.2rem;
          }
        }
        &.usa {
          height: 2.4rem;
          width: 4rem;
          background: url('~assets/icons/states/usa.svg') no-repeat;
          background-size: contain;

          .label {
            position: relative;
            left: 2.2rem;
            top: 1.2rem;
          }
        }
      }

      .block-title {
        position: absolute;
        top: 6rem;
      }

      .text {
        position: absolute;
        top: 6.5rem;
        padding-top: 1rem;
      }
    }
  }
}

</style>
