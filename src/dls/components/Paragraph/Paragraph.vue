<template>
  <p :class="['ct-paragraph', sizeClass]">
    <slot />
  </p>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue'
import { ParagraphSize, paragraphSizeClassRegistry } from './Paragraph.contracts'

const props = defineProps({
  size: {
    type: String as PropType<ParagraphSize>,
    required: false,
    default: ParagraphSize.Regular
  }
})

const sizeClass = computed(() => {
  return paragraphSizeClassRegistry[props.size]
})
</script>

<style lang="scss">
.#{$prefix}-paragraph {
  font-weight: 400;
  font-family: Inter, serif;

  &.--regular {
    font-size: 19px;
    line-height: 28px;
  }

  &.--small {
    font-size: 13px;
    line-height: 20px;
  }
}
</style>