<template>
  <div v-if="shouldDisplay" class="SurveyRenderer">
    <transition appear name="slide-up">
      <div v-if="currentSurvey">
        <SurveyHeading
          class="SurveyRenderer__heading"
          :title="currentSurvey.question"
          :sub-title="currentSurvey.subTitle"
        />

        <slot v-bind="{ survey: currentSurvey }"></slot>

        <UiButton class="SurveyRenderer__next" @click="nextStep">
          Next
        </UiButton>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { SurveyHeading } from '../../molecules/SurveyHeading'
import { SurveyRendererProps, surveyRendererProps } from './SurveyRenderer.props'
import { useSurveyRenderer } from './use-survey-renderer'

const props = defineProps(surveyRendererProps)
const emit = defineEmits(['next', 'prev'])

const {
  shouldDisplay,
  currentSurvey,
  nextStep
} = useSurveyRenderer(props as SurveyRendererProps, emit)
</script>

<style lang="scss">
.SurveyRenderer {
  &__heading {
    margin-bottom: 48px;
  }

  &__next {
    margin-top: 48px;
  }

  .slide-up-enter-active,
  .slide-up-leave-active {
    transition: all 0.25s ease-out;
  }

  .slide-up-enter-from {
    opacity: 0;
    transform: translateY(30px);
  }

  .slide-up-leave-to {
    opacity: 0;
    transform: translateY(-30px);
  }
}
</style>