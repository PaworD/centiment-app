import { Component } from 'vue'
import { defineAsyncComponent } from 'vue'

export type IconNames = Record<Icon, Component>
export const IconRegistryKey = 'iconRegistryKey'

export enum Icon {
  ArrowRight = 'arrow_right',
  Retry = 'retry',
  ChevronUp = 'chevron_up',
}

export const iconsRegistry: IconNames = {
  [Icon.ArrowRight]: defineAsyncComponent(() => import('./ArrowRight.vue')),
  [Icon.Retry]: defineAsyncComponent(() => import('./Reset.vue')),
  [Icon.ChevronUp]: defineAsyncComponent(() => import('./ChevronUp.vue'))
}