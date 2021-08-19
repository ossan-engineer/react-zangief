import React from 'react'
import normal from '../assets/zangiefDefault.gif'
import stand from '../assets/zangiefStand.gif'
import walk from '../assets/zangiefWalk.gif'
import jump from '../assets/zangiefJump.gif'
import attack from '../assets/zangiefLightAttack.gif'
import damaged from '../assets/zangiefDamaged.gif'

type Props = {
  action?: 'normal' | 'stand' | 'walk' | 'jump' | 'attack' | 'damaged'
  size?: number
}

const ACTIONS = {
  normal,
  stand,
  walk,
  jump,
  attack,
  damaged
}

const Zangief: React.FC<Props> = ({ action = 'normal', size = 32 }) => {
  return (
    <img
      src={ACTIONS[action]}
      alt="Zangief"
      width={size}
      style={{
        imageRendering: 'pixelated'
      }}
    />
  )
}

export default Zangief
