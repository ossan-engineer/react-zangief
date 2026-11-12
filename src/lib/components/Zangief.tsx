import damaged from '../assets/zangiefDamaged.gif'
import normal from '../assets/zangiefDefault.gif'
import jump from '../assets/zangiefJump.gif'
import attack from '../assets/zangiefLightAttack.gif'
import stand from '../assets/zangiefStand.gif'
import walk from '../assets/zangiefWalk.gif'

export type Action =
  'default' | 'stand' | 'walk' | 'jump' | 'attack' | 'damaged'

const IMAGES = {
  default: normal,
  stand,
  walk,
  jump,
  attack,
  damaged
} satisfies Record<Action, string>

export type Props = {
  /**
   * Animation type.
   */
  action?: Action
  /**
   * The size of Zangief.
   */
  size?: number
  /**
   * Flip Zangief direction.
   */
  flip?: boolean
}

const Zangief = ({ action = 'default', size = 32, flip = false }: Props) => (
  <img
    src={IMAGES[action]}
    alt="Zangief"
    width={size}
    style={{
      imageRendering: 'pixelated',
      transform: flip ? 'scaleX(-1)' : undefined
    }}
  />
)

export default Zangief
