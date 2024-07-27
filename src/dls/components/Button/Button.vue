<template>
  <button class="ct-button" :class="{ '--disabled': disabled }">
    <slot />
  </button>
</template>

<script lang="ts" setup>
const props = defineProps({
  theme: {
    type: String,
    required: false
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<style lang="scss">
.#{$prefix}-button {
  border: 0;
  outline: 0;

  padding: 8px 16px;

  color: $button-color;
  line-height: 24px;
  font-weight: 500;
  font-size: 16px;

  background: $accent;
  border-radius: 4px;

  cursor: pointer;

  &.--disabled {
    background: $text-light;
    pointer-events: none;
  }
}
</style>