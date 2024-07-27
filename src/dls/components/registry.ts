import { Component } from 'vue'

import { Paragraph } from './Paragraph'
import { Icon } from './Icon'
import { Button } from './Button'

export enum DlsComponent {
  Paragraph = 'Paragraph',
  Icon = 'Icon',
  Button = 'Button',
}

export const dlsComponents: Record<string, Component> = {
  [DlsComponent.Paragraph]: Paragraph,
  [DlsComponent.Icon]: Icon,
  [DlsComponent.Button]: Button

}