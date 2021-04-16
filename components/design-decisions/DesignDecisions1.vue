<template>
  <div>
    <h1>{{ $t('slidein1-subtitle') }}</h1>
    <p class="teaser">
      {{ $t('slidein1-intro') }}
    </p>

    <QuestionWithHiddenAnswer>
      {{ $t('slidein1-heading1') }}
      <template v-slot:toggle>
        {{ $t('slidein1-button1') }}
      </template>
      <template v-slot:answer>
        <p>
          {{ $t('slidein1-text1') }}
        </p>
      </template>
    </QuestionWithHiddenAnswer>

    <QuestionWithHiddenAnswer>
      {{ $t('slidein1-heading2') }}
      <template v-slot:toggle>
        {{ $t('slidein1-button2') }}
      </template>
      <template v-slot:answer>
        {{ $t('slidein1-text2') }}
      </template>
    </QuestionWithHiddenAnswer>

    <QuestionWithHiddenAnswer>
      {{ $t('slidein1-heading3') }}
      <template v-slot:toggle>
        {{ $t('slidein1-button3') }}
      </template>
      <template v-slot:answer>
        <img src="~/assets/intervis_disclosure_figures/alternative1.png">
        <p>
          {{ $t('slidein1-text3') }}
        </p>
      </template>
    </QuestionWithHiddenAnswer>
  </div>
</template>
