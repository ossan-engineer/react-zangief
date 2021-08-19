import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Zangief from './Zangief'

export default {
  title: 'Zangief',
  component: Zangief
} as ComponentMeta<typeof Zangief>

const Template: ComponentStory<typeof Zangief> = (args) => <Zangief {...args} />

export const Default = Template.bind({})
Default.args = {
  action: 'default',
  size: 128
}

export const Stand = Template.bind({})
Stand.args = {
  action: 'stand',
  size: 128
}

export const Walk = Template.bind({})
Walk.args = {
  action: 'walk',
  size: 128
}

export const Jump = Template.bind({})
Jump.args = {
  action: 'jump',
  size: 128
}

export const Attack = Template.bind({})
Attack.args = {
  action: 'attack',
  size: 128
}

export const Damaged = Template.bind({})
Damaged.args = {
  action: 'damaged',
  size: 128
}
