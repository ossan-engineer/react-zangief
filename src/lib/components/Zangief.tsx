import React from 'react'
import normal from '../assets/zangiefDefault.gif'
import stand from '../assets/zangiefStand.gif'
import walk from '../assets/zangiefWalk.gif'
import jump from '../assets/zangiefJump.gif'
import attack from '../assets/zangiefLightAttack.gif'
import damaged from '../assets/zangiefDamaged.gif'

type Props = {
  action?: 'default' | 'stand' | 'walk' | 'jump' | 'attack' | 'damaged'
  size?: number
  flip?: boolean
}

const ACTIONS = {
  default: normal,
  stand,
  walk,
  jump,
  attack,
  damaged
}

const Zangief: React.FC<Props> = ({
  action = 'default',
  size = 32,
  flip = false
}) => {
  return (
    <img
      src={ACTIONS[action]}
      alt="Zangief"
      width={size}
      style={{
        imageRendering: 'pixelated',
        transform: flip ? 'scale(-1,1)' : 'scale(1,1)'
      }}
    />
  )
}

export default Zangief
