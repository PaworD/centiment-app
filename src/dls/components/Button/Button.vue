<template>
  <button class="ct-button" :class="[themeClass, { '--disabled': disabled }]">
    <slot name="icon" />

    <slot />
  </button>
</template>

<script lang="ts" setup>
import { computed, PropType, toRefs } from 'vue'
import { ButtonTheme, buttonThemeClassesRegistry } from './Button.contracts'

const props = defineProps({
  theme: {
    type: String as PropType<ButtonTheme>,
    required: false,
    default: ButtonTheme.Primary
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false
  }
})

const { theme, disabled } = toRefs(props)

const themeClass = computed<string>(() => {
  return buttonThemeClassesRegistry[theme?.value]
})
</script>

<style lang="scss">
.#{$prefix}-button {
  border: 0;
  outline: 0;

  font-weight: 500;
  font-size: 16px;

  background: $accent;
  border-radius: 4px;

  display: flex;
  align-items: center;
  gap: 6px;

  cursor: pointer;

  &.--primary {
    color: $button-color;
    background: $accent;

    padding: 8px 16px;
    line-height: 24px;
  }

  &.--text {
    color: $text-light;
    background: transparent;

    padding: 4px 6px;
  }

  &.--disabled {
    background: $text-light;
    pointer-events: none;
  }
}
</style>