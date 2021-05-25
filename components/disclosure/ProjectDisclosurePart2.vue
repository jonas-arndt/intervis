<template>
  <DisclosureContent>
    <h2 v-html="$t('backside-decision–subtitle1')" />
    <p v-html="$t('backside-decision–intro')" />

    <QuestionWithHiddenAnswer>
      <span v-html="$t('backside-decision-heading1')" />
      <template v-slot:toggle>
        <span v-html="$t('backside-decision-button1')" />
      </template>
      <template v-slot:answer>
        <p v-html="$t('backside-decision-text1')" />
      </template>
    </QuestionWithHiddenAnswer>

    <QuestionWithHiddenAnswer>
      <span v-html="$t('backside-decision-heading2')" />
      <template v-slot:toggle>
        <span v-html="$t('backside-decision-button2')" />
      </template>
      <template v-slot:answer>
        <p v-html="$t('backside-decision-text2')" />
      </template>
    </QuestionWithHiddenAnswer>

    <QuestionWithHiddenAnswer>
      <span v-html="$t('backside-decision-heading3')" />
      <template v-slot:toggle>
        <span v-html="$t('backside-decision-button3')" />
      </template>
      <template v-slot:answer>
        <img src="~/assets/disclosure/alternative1.jpg">
        <p v-html="$t('backside-decision-text3')" />
      </template>
    </QuestionWithHiddenAnswer>

    <h2 v-html="$t('backside-decision-subtitle2')" />

    <QuestionWithHiddenAnswer>
      <span v-html="$t('backside-decision-heading4')" />
      <template v-slot:toggle>
        <span v-html="$t('backside-decision-button4')" />
      </template>
      <template v-slot:answer>
        <p v-html="$t('backside-decision-text4')" />
      </template>
    </QuestionWithHiddenAnswer>

    <QuestionWithHiddenAnswer>
      <span v-html="$t('backside-decision-heading5')" />
      <template v-slot:toggle>
        <span v-html="$t('backside-decision-button5')" />
      </template>
      <template v-slot:answer>
        <p v-html="$t('backside-decision-text5')" />
      </template>
    </QuestionWithHiddenAnswer>

    <QuestionWithHiddenAnswer>
      <span v-html="$t('backside-decision-heading6')" />
      <template v-slot:toggle>
        <span v-html="$t('backside-decision-button6')" />
      </template>
      <template v-slot:answer>
        <p v-html="$t('backside-decision-text6')" />
      </template>
    </QuestionWithHiddenAnswer>

    <QuestionWithHiddenAnswer>
      <span v-html="$t('backside-decision-heading7')" />
      <template v-slot:toggle>
        <span v-html="$t('backside-decision-button7')" />
      </template>
      <template v-slot:answer>
        <img src="~/assets/disclosure/alternative2.jpg">
        <p v-html="$t('backside-decision-text7')" />
      </template>
    </QuestionWithHiddenAnswer>

    <h2 v-html="$t('backside-decision-subtitle3')" />

    <QuestionWithHiddenAnswer>
      <span v-html="$t('backside-decision-heading8')" />
      <template v-slot:toggle>
        <span v-html="$t('backside-decision-button8')" />
      </template>
      <template v-slot:answer>
        <p v-html="$t('backside-decision-text8')" />
      </template>
    </QuestionWithHiddenAnswer>

    <QuestionWithHiddenAnswer>
      <span v-html="$t('backside-decision-heading9')" />
      <template v-slot:toggle>
        <span v-html="$t('backside-decision-button9')" />
      </template>
      <template v-slot:answer>
        <p v-html="$t('backside-decision-text9')" />
      </template>
    </QuestionWithHiddenAnswer>

    <QuestionWithHiddenAnswer>
      <span v-html="$t('backside-decision-heading10')" />
      <template v-slot:toggle>
        <span v-html="$t('backside-decision-button10')" />
      </template>
      <template v-slot:answer>
        <p v-html="$t('backside-decision-text10')" />
      </template>
    </QuestionWithHiddenAnswer>
  </DisclosureContent>
</template>
