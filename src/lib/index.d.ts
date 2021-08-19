import * as React from 'react'

export interface Props {
  /**
   * The content of the component.
   */
  children?: React.ReactNode
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component?: React.ElementType<React.HTMLAttributes<HTMLElement>>
  /**
   * Animation type.
   */
  action?: 'default' | 'stand' | 'walk' | 'jump' | 'attack' | 'damaged'
  /**
   * The size of Zangief.
   */
  size?: number
  /**
   * Flip Zangief direction.
   */
  flip?: boolean
}

export default function Zangief(props: Props): JSX.Element
