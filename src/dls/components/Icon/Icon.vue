<template>
  <component :is="iconComponent" />
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'
import { IconNames, IconRegistryKey } from '@/dls/icons/registry'

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const icons = inject<IconNames>(IconRegistryKey)

const iconComponent = computed(() => {
  return icons[props.name]
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