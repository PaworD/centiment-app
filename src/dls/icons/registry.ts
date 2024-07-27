import { Component } from 'vue'
import { defineAsyncComponent } from 'vue'

import { Icon, IconNames } from '../components/Icon'

export type IconNames = Record<Icon, Component>
export const IconRegistryKey = 'iconRegistryKey'

export enum Icon {
  ArrowRight = 'arrow_right',
  Retry = 'retry'
}

export const iconsRegistry: IconNames = {
  [Icon.ArrowRight]: defineAsyncComponent(() => import('./ArrowRight.vue')),
  [Icon.Retry]: defineAsyncComponent(() => import('./Reset.vue'))

}