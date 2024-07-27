<template>
  <div class="SurveyVariant" @click.stop="handleOnClick">
    <h4>{{ variant.title }}</h4>

    <div v-if="showIcon" class="SurveyVariant__arrow">
      <UiIcon name="arrow_right" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, toRefs } from 'vue'
import { SurveyVariant } from '../../../contracts'

const props = defineProps({
  variant: {
    type: Object as PropType<SurveyVariant>,
    required: true
  },
  showIcon: {
    type: Boolean,
    required: false,
    default: false
  }
})
const emit = defineEmits(['click'])

const { variant, showIcon } = toRefs(props)

function handleOnClick () {
  emit('click', variant.value)
}
</script>

<style lang="scss">
.SurveyVariant {
  display: flex;
  justify-content: space-between;

  padding: 20px;
  background-color: $text-lightest;
  border: 2px solid #201F2414;
  border-radius: 6px;

  cursor: pointer;

  > h4 {
    font-weight: 400;
    line-height: 24px;
    font-size: 19px;
  }

  &__arrow {
    width: 18px;
  }
}
</style>