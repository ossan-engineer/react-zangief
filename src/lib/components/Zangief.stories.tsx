import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Zangief from './Zangief'

export default {
  title: 'Zangief',
  component: Zangief
} as ComponentMeta<typeof Zangief>

const Template: ComponentStory<typeof Zangief> = (args) => <Zangief {...args} />

export const Normal = Template.bind({})
Normal.args = {}
