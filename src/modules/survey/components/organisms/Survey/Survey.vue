<template>
  <div class="Survey">
    <VueDraggable
      v-model="variants"
      group="variants"
      class="Survey__variants"
    >
      <SurveyVariant
        v-for="item in variants"
        :key="item.value"
        :variant="item"
        :show-icon="true"
        @click="moveToSelected"
      />
    </VueDraggable>

    <div class="Survey__right">
      <VueDraggable
        v-model="selectedVariants"
        :group="{ name: 'variants', put: canSelect }"
        class="Survey__variants"
        @add="addSelectedVariant"
        @remove="removeSelectedVariant"
      >
        <div v-for="(element, index) in selectedVariants" :key="index" class="Survey__variants__variant">
          <span>{{ index + 1 }}</span>

          <div class="Survey__variants__variant__shadow">
            <SurveyVariantShadow
              v-if="!element"
              class="Survey__variants__shadows" />

            <SurveyVariant
              v-else
              :show-icon="false"
              :variant="element" />
          </div>
        </div>
      </VueDraggable>

      <div class="Survey__right__footer">
        <button class="Survey__right__footer__reset" @click="resetSelected">
          <UiIcon name="retry" />
          Reset
        </button>
      </div>

      <span v-if="!canSelect" class="Survey__right__info">
       You have reached maximum number of allowed selection
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { VueDraggable } from 'vue-draggable-plus'

import { SurveyVariant } from '../../molecules/SurveyVariant'
import { SurveyVariantShadow } from '../../molecules/SurveyVariantShadow'
import { useSurvey } from './use-survey'
import { SurveyProps } from './Survey.props'

const props = defineProps({
  survey: {
    type: Object,
    required: true
  }
})

const {
  selectedVariants,
  variants,
  addSelectedVariant,
  removeSelectedVariant,
  moveToSelected,
  resetSelected,
  canSelect
} = useSurvey(props as SurveyProps)

</script>

<style lang="scss">
.Survey {
  width: 100%;

  display: flex;
  flex-flow: row;

  gap: 56px;

  &__right {
    width: 100%;

    &__info {
      display: flex;
      justify-content: flex-end;

      font-size: 12px;
      font-weight: 500;

      margin: 12px 0;
      color: $text-danger;
    }

    &__footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      margin-top: 24px;

      &__reset {
        border: 0;
        outline: 0;

        background: transparent;
        padding: 4px 6px;

        color: $text-light;
        font-size: 13px;
        font-weight: 500;

        display: flex;
        align-items: center;
        gap: 6px;

        cursor: pointer;
      }
    }
  }

  &__variants {
    display: flex;
    flex-flow: column;
    gap: 12px;

    width: 100%;

    position: relative;
    z-index: 1;

    &__variant {
      display: flex;

      width: 100%;
      align-items: center;
      gap: 16px;

      > span {
        color: $text-accent;
      }

      &__shadow {
        width: 100%;
      }
    }
  }
}
</style>