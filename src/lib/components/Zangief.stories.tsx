import type { Meta, StoryObj } from '@storybook/react-vite'

import Zangief from './Zangief'

const meta: Meta<typeof Zangief> = {
  title: 'Zangief',
  component: Zangief,
  args: {
    size: 128
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    action: 'default'
  }
}

export const Stand: Story = {
  args: {
    action: 'stand'
  }
}

export const Walk: Story = {
  args: {
    action: 'walk'
  }
}

export const Jump: Story = {
  args: {
    action: 'jump'
  }
}

export const Attack: Story = {
  args: {
    action: 'attack'
  }
}

export const Damaged: Story = {
  args: {
    action: 'damaged'
  }
}
