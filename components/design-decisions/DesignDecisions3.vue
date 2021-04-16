<template>
  <div>
    <h1>{{ $t('slidein3-subtitle') }}</h1>

    <QuestionWithHiddenAnswer>
      <h1>{{ $t('slidein3-heading1') }}</h1>
      <template v-slot:toggle>
        <h1>{{ $t('slidein3-button1') }}</h1>
      </template>
      <template v-slot:answer>
        <p /><h1>{{ $t('slidein3-text1') }}</h1>
        </p>
      </template>
    </QuestionWithHiddenAnswer>

    <QuestionWithHiddenAnswer>
      <h1>{{ $t('slidein3-heading2') }}</h1>
      <template v-slot:toggle>
        <h1>{{ $t('slidein3-button2') }}</h1>
      </template>
      <template v-slot:answer>
        <h1>{{ $t('slidein3-text2') }}</h1>
      </template>
    </QuestionWithHiddenAnswer>

    <QuestionWithHiddenAnswer>
      <h1>{{ $t('slidein3-heading3') }}</h1>
      <template v-slot:toggle>
        <h1>{{ $t('slidein3-button3') }}</h1>
      </template>
      <template v-slot:answer>
        <h1>{{ $t('slidein3-text3') }}</h1>
      </template>
    </QuestionWithHiddenAnswer>
  </div>
</template>
