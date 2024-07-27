<template>
  <div class="SurveyHeading">
    <UiParagraph>{{ title }}</UiParagraph>
    <UiParagraph size="small" class="SurveyHeading__subTitle">{{ subTitle }}</UiParagraph>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: false
  }
})
</script>

<style lang="scss">
.SurveyHeading {
  display: flex;
  flex-flow: column;
  gap: 4px;

  &__subTitle {
    color: $text-light;
  }
}
</style>