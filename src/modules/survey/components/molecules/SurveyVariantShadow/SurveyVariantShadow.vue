<template>
  <div class="SurveyVariantShadow">
    <div class="SurveyVariantShadow__shadow" @drop="onDrop" @dragover="onDragOver"></div>
  </div>
</template>

<style lang="scss">
.SurveyVariantShadow {
  display: flex;
  flex-flow: column;
  gap: 12px;
  z-index: -1;

  &__shadow {
    &__index {
      color: $text-accent;
    }

    &__container {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    background-color: transparent;

    border: 2px solid $accent-light;
    border-image: url("./border-image.png") 2 fill;
    border-radius: 8px;

    display: flex;
    width: 100%;
    padding: 20px;

    z-index: -1;

    &::before {
      content: "shadow";
      visibility: hidden;
      font-weight: 400;
      line-height: 24px;
      font-size: 19px;
    }
  }
}
</style>