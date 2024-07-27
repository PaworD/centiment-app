import { ComputedRef, Ref } from 'vue'
import { computed, onMounted, ref, toRefs } from 'vue'
import { SortableEvent } from 'vue-draggable-plus'

import { SurveyVariant } from '../../../contracts'
import { SurveyProps } from './Survey.props'

export interface UseSurveyProvides {
  variants: Ref<SurveyVariant[]>,
  selectedVariants: Ref<(SurveyVariant | null)[]>
  canSelect: ComputedRef<boolean>
  moveToSelected(variant: SurveyVariant): void
  addSelectedVariant(event: SortableEvent): void
  removeSelectedVariant(): void
  resetSelected(): void
}

export const useSurvey = (props: SurveyProps): UseSurveyProvides => {
  const { survey } = toRefs(props)

  const variants = ref<SurveyVariant[]>([])
  const selectedVariants = ref<(SurveyVariant | null)[]>([null, null, null])

  onMounted(() => {
    variants.value = survey.value.variants ?? []
  })

  const canSelect = computed<boolean>(() => {
    return selectedVariants.value.filter(selection => selection).length < 3
  })

  function moveToSelected (variant: SurveyVariant): void {
    if (!canSelect.value) {
      return
    }

    _setVariants([...variants.value ?? []].filter((vr) => vr.value !== variant.value), true)
    _setSelectedVariants(removeFirstNull([variant, ...selectedVariants.value]), true)
  }

  function removeFirstNull(array: (SurveyVariant | null)[]): (SurveyVariant | null)[] {
    const index = array.indexOf(null)

    if (index !== -1) {
      array.splice(index, 1)
    }

    return array
  }

  function addSelectedVariant () {
    _setSelectedVariants(removeFirstNull([...selectedVariants.value]), true)
  }

  function removeSelectedVariant (): void {
    _setSelectedVariants([...selectedVariants.value, null], true)
  }

  function resetSelected () {
    const resetCandidates = selectedVariants.value.filter(variant => variant) as SurveyVariant[]
    _resetSelectedVariants()
    _setVariants(resetCandidates)
  }

  function _resetSelectedVariants () {
    _setSelectedVariants([null, null, null], true)
  }

  function _setVariants (newVariants: SurveyVariant[], hard: boolean = false) {
    if (hard) {
      variants.value = newVariants
      return
    }

    variants.value = [...variants.value, ...newVariants]
  }

  function _setSelectedVariants (
    newSelectedVariants: (SurveyVariant | null)[],
    hard: boolean = false) {
    if (hard) {
      selectedVariants.value = newSelectedVariants
      return
    }

    selectedVariants.value = [...selectedVariants.value, ...newSelectedVariants]
  }

  return {
    variants,
    selectedVariants,
    moveToSelected,
    addSelectedVariant,
    removeSelectedVariant,
    resetSelected,
    canSelect,
  }
}