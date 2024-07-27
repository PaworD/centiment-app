import { computed, ComputedRef, toRefs, shallowRef } from 'vue'

import { Survey } from '../../../contracts'
import { SurveyRendererProps } from './SurveyRenderer.props'

export interface UseSurveyRendererProvides {
  shouldDisplay: ComputedRef<boolean>
  currentSurvey: ComputedRef<Survey>
  nextStep(): void
  prevStep(): void
}

export const useSurveyRenderer = (
  props: SurveyRendererProps,
  emit: (event: any, ...options: any[]) => void
): UseSurveyRendererProvides => {
  const { surveys } = toRefs(props)
  const currentSurveyIndex = shallowRef(0)

  const shouldDisplay = computed(() => {
    return Array.isArray(surveys.value) && surveys.value.length > 0
  })

  const currentSurvey = computed<Survey>(() => {
    return surveys.value[currentSurveyIndex.value]
  })

  function nextStep (): void {
    emit('next')
  }

  function prevStep (): void {
    emit('prev')
  }

  return {
    shouldDisplay,
    currentSurvey,
    nextStep,
    prevStep
  }
}